import React from "react";
import { View, Text, TouchableOpacity, TextInput, Image, ScrollView } from "react-native";
import styles from "../../style";
import { useState } from "react";
import DropDownPicker from 'react-native-dropdown-picker';
import { useSelector } from "react-redux";

export default function Search({ navigation, route }) {
  const dataFromReducer = useSelector((a) => a.user)
  // console.log(dataFromReducer)

  const [openRoom, setOpenRoom] = useState(false);
  const [openService, setOpenService] = useState(false);
  const [value, setValue] = useState(null);
  const [booking, setBooking] = useState('')
  const [save, setSave] = useState([])
  const [search, setSearch] = useState()
  const [flter, setFilter] = useState([])
  const [empty, setEmpty] = useState(false)
  const [fltrApp, setfltrApp] = useState(false)
  const [room, setRoom] = useState([
    { label: 'One', value: '1' },
    { label: 'Two', value: '2' },
    { label: 'Three', value: '3' },
    { label: 'Four', value: '4' },
    { label: 'Five', value: '5' },
  ]);
  const [service, setService] = useState([
    { label: "breakfast", value: "breakfast" },
    { label: "lunch", value: "lunch" },
    { label: "dinner", value: "dinner" },
  ])
  let res = (e) => {
    console.log(e)
    if (e == "") {
      setfltrApp(false)
      setEmpty(false)
    }
    else {
      const myRoom = hotel.filter((elem, ind) => {
        return elem.room == e
      })
      console.log(myRoom)

      if (myRoom.length == 0) {
        console.log("empty")
        setEmpty(true)
      }
      else {
        setFilter(myRoom)
        setEmpty(false)
        setfltrApp(true)
      }
    }
  }
  let saveAS = (e) => {
    console.log(e)
    save.push(e)
    console.log(save)
    navigation.navigate("Save", { save: save })
  }
  const [hotel, setHotel] = useState([{
    name: "Abcd",
    room: 2,
    service: "dinner",
    img: "../../asstes/hotel2.png",
    location: "Karachi,Pakistan",
    discription: "Example of horizontal card created with dfkjsodfjiosdfjdf eruieruiExample of horizontal ",
    price: "10"
  },
  {
    name: "Xyz",
    room: 4,
    service: "dinner",
    img: "../../asstes/hotel2.png",
    location: "Karachi,Pakistan",
    discription: "Example of horizontal card created with dfkjsodfjiosdfjdf eruieruiExample of horizontal ",
    price: "10"
  },
  {
    name: "hjasgdj",
    room: 1,
    service: "lunch",
    img: "../../asstes/hotel2.png",
    location: "Karachi,Pakistan",
    discription: "Example of horizontal card created with dfkjsodfjiosdfjdf eruieruiExample of horizontal ",
    price: "10"
  },
  {
    name: "mine",
    room: 10,
    service: "lunch",
    img: "../../asstes/hotel2.png",
    location: "Karachi,Pakistan",
    discription: "Example of horizontal card created with dfkjsodfjiosdfjdf eruieruiExample of horizontal ",
    price: "10"
  },
  {
    name: "hjasgdj",
    room: 1,
    service: "breakfast",
    img: "../../asstes/hotel2.png",
    location: "Karachi,Pakistan",
    discription: "Example of horizontal card created with dfkjsodfjiosdfjdf eruieruiExample of horizontal ",
    price: "10"
  },
  {
    name: "mine",
    room: 1,
    service: "breakfast",
    img: "../../asstes/hotel2.png",
    location: "Karachi,Pakistan",
    discription: "Example of horizontal card created with dfkjsodfjiosdfjdf eruieruiExample of horizontal ",
    price: "10"
  }

  ])
  return (
    <View style={{ flex: 1 }}>
      <View style={[{ flex: 0.8 }, styles.bgThemeDark, { borderBottomEndRadius: 10, borderBottomStartRadius: 10 }]}>
        <View style={[styles.my1, styles.flexRow, { justifyContent: "flex-end" }, styles.m1, { alignItems: "center" }]}>
          <View style={{ marginHorizontal: 50 }}>
            <Text style={[styles.fs3, styles.textBold, styles.textCenter, styles.textWhite]}>Booking.com</Text>
          </View>
          <View style={styles.flexRow}>
            <TouchableOpacity>
              <Text style={[styles.fs1, styles.mx1]}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={[styles.fs1, styles.mx1]}>=</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.my2}>
          <Text style={[styles.textCenter, styles.textWhite, styles.fs6, { fontStyle: "Lucida Calligraphy" }]}>Be where the good life is</Text>
        </View>
      </View>

      <View style={[{ flex: 4 }, styles.bgWhite]}>
        <View style={[{ borderWidth: 2, borderColor: "#fdbe18", borderRadius: 3 }, styles.m1]}>
          <View style={[{ borderWidth: 2, borderColor: "#fdbe18" }, styles.p1, styles.flexRow, styles.justifyContentBetween, styles.alignItemsCenter]}>
            {/* <DropDownPicker  style={{ borderRadius: 0, borderWidth: 2, borderColor: "#fdbe18", marginVertical: 10,zIndex:10 }} placeholder="No. of Rooms"
                open={openRoom}
                value={value}
                items={room}
                setOpen={setOpenRoom}
                setValue={setValue}
                setItems={setRoom}
              /> */}
            <View style={{ borderRadius: 0, borderWidth: 2, borderColor: "#fdbe18", marginVertical: 0 ,width:"100%"}}>
              <TextInput onChangeText={(e) => res(e)} style={[styles.textBlack, styles.textBold,styles.px1]} textContentType="numeric" keyboardType="numeric" placeholder="Enter Rooms" placeholderTextColor={"gray"} />
            </View>
          </View>
        </View>


        {
          empty ? <View style={[styles.p1]}>
            <Text style={[styles.textBold, styles.textDanger, styles.fs1]}> Not Found :( </Text>
          </View> : <ScrollView>
            <View style={[styles.my1]}>
              {
                fltrApp ? flter.map((e, i) => {
                  return <>
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

                              </View>
                              <Text style={[styles.textBlack, styles.textThemeDark]}>{e.location}</Text>
                              <Text style={[styles.textBlack, styles.my1]}>{e.discription} </Text>


                              <View style={[styles.flexRow, styles.justifyContentBetween, styles.mb1]}>
                                <Text style={[styles.fs6, styles.textBlack]}>{"Room: " + e.room}</Text>
                                <Text style={[styles.fs6, styles.textBlack]}>{"* " + e.service}</Text>
                              </View>

                              <View style={[styles.flexRow, styles.justifyContentBetween]}>
                                <View style={[styles.border1, styles.textCenter, { borderRadius: 10 }]}>
                                  <TouchableOpacity onPress={() => saveAS(e)} style={[styles.px1]}>
                                    <Text style={[styles.fs6, styles.textBlack]}>Save</Text>
                                  </TouchableOpacity>
                                </View>
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

                }) :
                  hotel.map((e, i) => {
                    return <>

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

                                </View>
                                <Text style={[styles.textBlack, styles.textThemeDark]}>{e.location}</Text>
                                <Text style={[styles.textBlack, styles.my1]}>{e.discription} </Text>


                                <View style={[styles.flexRow, styles.justifyContentBetween, styles.mb1]}>
                                  <Text style={[styles.fs6, styles.textBlack]}>{"Room: " + e.room}</Text>
                                  <Text style={[styles.fs6, styles.textBlack]}>{"* " + e.service}</Text>
                                </View>

                                <View style={[styles.flexRow, styles.justifyContentBetween]}>
                                  <View style={[styles.border1, styles.textCenter, { borderRadius: 10 }]}>
                                    <TouchableOpacity onPress={() => saveAS(e)} style={[styles.px1]}>
                                      <Text style={[styles.fs6, styles.textBlack]}>Save</Text>
                                    </TouchableOpacity>
                                  </View>
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

                  })
              }
            </View>
          </ScrollView>
        }
        {/* <ScrollView>
          <View style={[styles.my5]}>
            {
              fltrApp ? flter.map((e, i) => {
                return <>

                  <View key={i} style={[styles.my5]}>
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

                            </View>
                            <Text style={[styles.textBlack, styles.textThemeDark]}>{e.location}</Text>
                            <Text style={[styles.textBlack, styles.my1]}>{e.discription} </Text>


                            <View style={[styles.flexRow, styles.justifyContentBetween, styles.mb1]}>
                              <Text style={[styles.fs6, styles.textBlack]}>{"Room: " + e.room}</Text>
                              <Text style={[styles.fs6, styles.textBlack]}>{"* " + e.service}</Text>
                            </View>

                            <View style={[styles.flexRow, styles.justifyContentBetween]}>
                              <View style={[styles.border1, styles.textCenter, { borderRadius: 10 }]}>
                                <TouchableOpacity onPress={() => saveAS(e)} style={[styles.px1]}>
                                  <Text style={[styles.fs6, styles.textBlack]}>Save</Text>
                                </TouchableOpacity>
                              </View>
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

              }) :
                hotel.map((e, i) => {
                  return <>

                    <View key={i} style={[styles.my5]}>
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

                              </View>
                              <Text style={[styles.textBlack, styles.textThemeDark]}>{e.location}</Text>
                              <Text style={[styles.textBlack, styles.my1]}>{e.discription} </Text>


                              <View style={[styles.flexRow, styles.justifyContentBetween, styles.mb1]}>
                                <Text style={[styles.fs6, styles.textBlack]}>{"Room: " + e.room}</Text>
                                <Text style={[styles.fs6, styles.textBlack]}>{"* " + e.service}</Text>
                              </View>

                              <View style={[styles.flexRow, styles.justifyContentBetween]}>
                                <View style={[styles.border1, styles.textCenter, { borderRadius: 10 }]}>
                                  <TouchableOpacity onPress={() => saveAS(e)} style={[styles.px1]}>
                                    <Text style={[styles.fs6, styles.textBlack]}>Save</Text>
                                  </TouchableOpacity>
                                </View>
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

                })
            }
          </View>
        </ScrollView> */}
      </View>


    </View>
  );
}