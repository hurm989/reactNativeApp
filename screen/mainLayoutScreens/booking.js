import React, { useEffect, useReducer, useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, Image, RefreshControl } from "react-native";
import AppNavigation, { AppTripNav } from "../../navigation/nav";
import AppTabNavigation from "../../navigation/tabnav";
import styles from "../../style";
import database from '@react-native-firebase/database';

export default function Booking({ navigation, route }) {
    const [loader, setLoader] = useState(true)
    const [paid, setPaid] = useState(false)
    const { e } = route.params
    const Add = (e,i) => {
        console.log(e);
        database()
            .ref('/users/')
            .set(e)
            .then(() => {
                console.log('Data set.')
                setPaid(true)
            });
    }
    return <>
        <View style={[{ flex: 1 }]}>
            <View style={[{ flex: 0.8 }, styles.bgThemeDark, { borderBottomEndRadius: 10, borderBottomStartRadius: 10 }]}>
                <View style={[styles.my1, styles.flexRow, { justifyContent: "flex-end" }, styles.m1, { alignItems: "center" }]}>
                    <View style={[{ marginHorizontal: 110 }]}>
                        <Text style={[styles.fs3, styles.textBold, styles.textCenter, styles.textWhite]}>Trips</Text>
                    </View>
                    <View style={styles.flexRow}>
                        <TouchableOpacity>
                            <Text style={[styles.fs3, styles.mx1, styles.textWhite]}>?</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={[styles.fs3, styles.mx1, styles.textWhite]}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
            <View style={[{ flex: 4 }, styles.bgWhite]}>
                {/* <View>
                    <Text style={[styles.textBlack,styles.textBold,styles.textCenter,styles.fs]}>Bookings</Text>
                </View> */}
                <View style={[styles.borderBottom1, styles.borderBottomSecondary, styles.flexRow, styles.justifyContentAround, styles.p1, styles.my2]}>
                    <View style={[styles.bgThemeDark, styles.px3]}>
                        <TouchableOpacity >
                            <Text style={[styles.textBlack, styles.fs5, styles.textWhite]}>Active</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.px3]}>
                        <TouchableOpacity >
                            <Text style={[styles.textBlack, styles.fs5, styles.textBlack]}>Past</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.px3]}>
                        <TouchableOpacity >
                            <Text style={[styles.textBlack, styles.fs5, styles.textBlack]}>Cancelled</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {
                    loader ? <ScrollView>
                        <View>
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
                                                <TouchableOpacity onPress={() => navigation.goBack()}>
                                                    <Text value={e.price} style={[styles.textBlack, styles.fs5, styles.textBold]}>X</Text>
                                                </TouchableOpacity>
                                            </View>
                                            <Text style={[styles.textBlack, styles.textThemeDark]}>{e.location}</Text>
                                            <Text style={[styles.textBlack, styles.my1]}>{e.discription} </Text>

                                            <View style={[styles.flexRow, styles.justifyContentBetween, styles.mb1]}>
                                                <Text style={[styles.fs6, styles.textBlack]}>{"Room: " + e.room}</Text>
                                                <Text style={[styles.fs6, styles.textBlack]}>{"* " + e.service}</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View>
                                        <View style={[styles.px2, styles.flexRow, styles.justifyContentEnd]}>
                                            <Text style={[styles.fs5, styles.textBlack, styles.textBold]}>Amount: </Text>
                                            <Text style={[styles.fs5, styles.textBlack, styles.textBold]}>{e.price + "$"}</Text>
                                        </View>
                                        <View style={[styles.p1]}>
                                            <TouchableOpacity onPress={() => setLoader(false)} style={[styles.bgThemeDark, { borderRadius: 2 }]}>
                                                <Text style={[styles.textBlack, styles.textCenter, styles.fs5, styles.textWhite, styles.px3, styles.py1]}>
                                                    Book Now
                                                </Text>
                                            </TouchableOpacity>
                                        </View>

                                    </View>
                                </View>

                            </View>
                        </View>
                    </ScrollView> :
                        <View style={[styles.px2]}>
                            <View style={[styles.flexRow, styles.justifyContentBetween]}>
                                <Text style={[styles.fs3, styles.textThemeDark, styles.textBold]}>Total Amount</Text>
                                <Text style={[styles.fs3, styles.textThemeDark, styles.textBold]}>{e.price + "$"}</Text>
                            </View>
                            <View>
                                <View style={[styles.flexRow, styles.justifyContentAround, styles.py3]}>
                                    <TouchableOpacity style={[styles.border1, styles.p1, styles.borderSecondary]}>
                                        <Image style={[{ width: 80, height: 30 }, styles.px2]} source={require("../../asstes/visa.png")} />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={[styles.border1, styles.p1, styles.borderSecondary]}>
                                        <Image style={[{ width: 80, height: 30 }, styles.px2]} source={require("../../asstes/paypal.png")} />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={[styles.border1, styles.p1, styles.borderSecondary]}>
                                        <Image style={[{ width: 70, height: 30 }, styles.px2]} source={require("../../asstes/easypaisa.png")} />
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <View style={[styles.my1]}>
                                        <TouchableOpacity onPress={() => Add(e,i)} style={[styles.bgThemeDark, { borderRadius: 2 }]}>
                                            <Text style={[styles.textBlack, styles.textCenter, styles.fs6, styles.textWhite, styles.px3, styles.py1]}>
                                                Pay Now
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={[styles.my1]}>
                                        <TouchableOpacity onPress={() => setLoader(true)} style={[styles.bgThemeDark, { borderRadius: 2 }]}>
                                            <Text style={[styles.textBlack, styles.textCenter, styles.fs6, styles.textWhite, styles.px3, styles.py1]}>
                                                Go Back
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                }

            </View>
        </View >

    </>
}