import React from 'react';
// import { View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTab from './BottomTab';

const Drawer = createDrawerNavigator();

function DrawerRoutes() {
  return (
    <Drawer.Navigator screenOptions={{headerShown:false,}}>
      <Drawer.Screen name="Home" component={BottomTab} />
      {/* <Drawer.Screen name="Profile" component={Profile} /> */}
    </Drawer.Navigator>
  );
}

export default DrawerRoutes;