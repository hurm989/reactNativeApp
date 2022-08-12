import { useNavigationState } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import styles from "../../style";
import { useEffect } from "react";
export default function Save({ navigation, route }) {
    // const { save } = route.params
    const [elemnts, setE] = useState()
    const [loader, setLoader] = useState(false)
    useEffect(() => {
        if (route.params) {
            setE(route.params.save)
            // const [elemnts, setE] = useState(route.params.save)
            setLoader(true)
        }

    })
    return <>

        {
            loader ? <ScrollView>
                {elemnts.map((e, i) => {
                    return <>
                        {/* <TouchableOpacity onPress={() => navigation.navigate('Booking', { e: e })}> */}
                        <View key={i}>
                            <View style={[styles.m1]}>
                                <View style={styles.border1}>
                                    <View style={[styles.flexRow, styles.alignItemsCenter, styles.w75, styles.px2]}>
                                        <View
                                            style={[styles.p1, styles.alignItemsCenter]}>
                                            <Image style={[{ width: 100, height: 100 }]} source={require("../../asstes/hotel2.png")} />
                                        </View>
                                        <View style={[styles.p1]}>
                                            <View style={[styles.flexRow, styles.justifyContentBetween, styles.alignItemsCenter]}>
                                                <Text style={[styles.textThemeDark, styles.fs3, styles.textBold]}>{e.name}</Text>
                                                {/* <TouchableOpacity onPress={() => unSave(e, i)}>
                                                <Text value={e.price} style={[styles.textBlack, styles.fs5, styles.textBold]}>X</Text>
                                            </TouchableOpacity> */}
                                            </View>

                                            <Text style={[styles.textBlack, styles.textThemeDark]}>{e.location}</Text>
                                            <Text style={[styles.textBlack, styles.my1]}>{e.discription} </Text>


                                            <View style={[styles.flexRow, styles.justifyContentBetween, styles.mb1]}>
                                                <Text style={[styles.fs6, styles.textBlack]}>{"Room: " + e.room}</Text>
                                                <Text style={[styles.fs6, styles.textBlack]}>{"* " + e.service}</Text>
                                            </View>

                                            <View style={[styles.flexRow, styles.justifyContentBetween]}>

                                                <TouchableOpacity onPress={() => navigation.navigate('Booking', { e: e })} style={[styles.bgThemeDark, { borderRadius: 1 }]}>
                                                    <Text style={[styles.textBlack, styles.textCenter, styles.fs6, styles.textWhite, styles.px1]}>
                                                        Add to Cart
                                                    </Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </>

                })}
            </ScrollView> : <View style={[styles.p1]}>
                <Text style={[styles.textBlack, styles.fs3]}> Your cart is empty</Text>
            </View>
        }
    </>
}
