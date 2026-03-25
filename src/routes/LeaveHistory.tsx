/* eslint-disable react-native/no-inline-styles */
import { View, Text } from 'react-native'
import React,{useState} from 'react'
import Label from '../components/Label';
import DatePickerField from '../components/DatePickerField';



const LeaveHistory = () => {
  const[date,setDate] = useState<Date | null>(null);
  return (
    <View>
      <Text style={{fontSize:20,fontWeight:'bold',color:'#de0d0d',textAlign:'center',paddingBottom:20}}>Leave History</Text>
      <Label text="Date Of Leave" />
      <DatePickerField value={date} onChange={setDate} /> 
      
    </View>
  )
}

export default LeaveHistory;