import React from "react";
import { View, Text } from "react-native";
import AppTabNavigation from "../navigation/tabnav";
// import { useSelector } from "react-redux/es/exports";
// import { useSelector } from "react-redux";

export default function MainLayout() {
    // const dataFromReducer =useSelector((a)=>a.user)
    // console.log(dataFromReducer)
    return <>
        <AppTabNavigation />

        {/* <View>
            <Text>Mainlayout</Text>
        </View> */}
    </>
}