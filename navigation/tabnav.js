import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from '../screen/mainLayoutScreens/profile';
import Search from '../screen/mainLayoutScreens/search';
import Booking from '../screen/mainLayoutScreens/booking';
import Save from '../screen/mainLayoutScreens/save';





const Tab = createBottomTabNavigator();

export default function AppTabNavigation() {
    return (
        <NavigationContainer independent={true}>
            <Tab.Navigator>
                <Tab.Screen options={{ headerShown: false }} name="Search" component={Search} />
                <Tab.Screen options={{ headerShown: true,headerStyle:{
                    backgroundColor:"#003680"
                },headerTintColor:"white"}} name="Save" component={Save} />
                <Tab.Screen options={{ headerShown: false}} name="Booking" component={Booking} />
                <Tab.Screen options={{ headerShown: false}} name="Profile" component={Profile} />
                {/* <Tab.Screen name="SettingsScreen" component={SettingsScreen} /> */}
            </Tab.Navigator>
        </NavigationContainer>
    );
}



