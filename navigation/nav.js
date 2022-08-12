// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screen/logIn';
import styles from '../style';
import Signup from '../screen/signUp';
import MainLayout from '../screen/mainLayout';
import Booking from '../screen/mainLayoutScreens/booking';

const Stack = createNativeStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen options={{
          title: "Booking.com", headerStyle: {
            backgroundColor: "#003680"
          }, headerTitleStyle: {
            color: styles._light
          }
        }} name="Home" component={HomeScreen} />
        <Stack.Screen options={{
          title: "Booking.com", headerStyle: {
            backgroundColor: "#003680"
          }, headerTitleStyle: {
            color: styles._light
          }
        }} name='Signup' component={Signup} />
        <Stack.Screen options={{
          title: "Booking.com", headerStyle: {
            backgroundColor: "#003680"
          }, headerTitleStyle: {
            color: styles._light
          }, headerShown: false
        }} name='MainLayout' component={MainLayout} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;