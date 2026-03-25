import React from 'react'   
import { View } from 'react-native';
import{createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';  
import PendingActivity from '../routes/PendingActivity';
import RaisedRequest from '../routes/RaisedRequest';
import LeaveHistory from '../routes/LeaveHistory';
import SubmittedActivity from '../routes/SubmittedActivity';

const Tab = createMaterialTopTabNavigator();

const TimeSpaceScreen = () => {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flex:1, paddingTop:0}}>
   <Tab.Navigator>
      <Tab.Screen name="Pending Activity" component={PendingActivity} />
      <Tab.Screen name='Raised Request' component={RaisedRequest} />
      <Tab.Screen name='Leave History' component={LeaveHistory} />
      <Tab.Screen name='Submitted Activity' component={SubmittedActivity} />
   </Tab.Navigator>
   </View>
  );
};

export default TimeSpaceScreen;
