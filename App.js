import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import AppNavigation from "./navigation/nav";
import { Provider } from "react-redux";
import store from "./config/redux/store";
export default function App() {

  return <>
  <Provider store={store}>
    <AppNavigation />
    </Provider>
    {/* <View>
  <Text>kdfjlfjsdklfjl</Text>

  <TouchableOpacity>
    <Text>sdahdkjhasd</Text>
  </TouchableOpacity>
  </View> */}
  </>
}