import axios from 'axios';
import  AsyncStorage  from '@react-native-async-storage/async-storage';

const api = axios.create({
  baseURL: 'https://dummyjson.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(async (config) => {
  const Token = await AsyncStorage.getItem('accessToken');

  if (Token) {
    config.headers.Authorization = `Bearer ${Token}`;
  }
  return config;
},
(error)=> Promise.reject(error)
);

api.interceptors.response.use((response)=>response,
async (error)=>{
  const originalRequest = error.config;

  if (error.response?.status ===401 && !originalRequest._retry){

    originalRequest._retry = true;

    try{
      const refreshToken = await AsyncStorage.getItem('refreshToken');
      const response = await axios.post('https://dummyjson.com/auth/refresh',
        {refreshToken});
        
        const newAccessToken = response.data.acessToken;

        await AsyncStorage.setItem('accessToken', newAccessToken);

        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

        return api(originalRequest);

    }catch(refreshError){
      console.log(refreshError,"Refresh token expired.Please login again");
    }
  }
  return Promise.reject(error);
}
)

// Optional: Add request interceptors here later for auth tokens
export default api;