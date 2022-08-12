import React from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { Icon } from "react-native-vector-icons/MaterialIcons";
import styles from "../../style";
import auth from '@react-native-firebase/auth';
// import img from "../../asstes/admin.png"
import { useSelector } from "react-redux";
export default function Profile({ navigation }) {
  const dataFromReducer = useSelector((a) => a.user)
  console.log(dataFromReducer)
  let signOut = () => {
    auth()
      .signOut()
      .then(() => {
        console.log('User signed out!');
      })
      // navigation.goBack(navigation.navigate("Home"))
      ;
   
  }
  return (
    <View style={[{ flex: 1 }]}>
      {/* <ScrollView> */}
      <View style={[{ flex: 1.6 }, styles.bgThemeDark]}>
        <View style={[styles.alignItemsEnd, styles.my1, styles.mx3]}>
          <TouchableOpacity>
            <Text style={[styles.fs3]}>?</Text>
          </TouchableOpacity>
        </View>
        <View style={[{ alignItems: "center", justifyContent: "flex-end" }, styles.my3, styles.mx3]}>
          <Image style={[{ borderRadius: 100, height: 60, width: 60, marginVertical: 10 }]} source={require("../../asstes/admin.png")} />
          <Text style={[styles.textBold, styles.textLight, styles.fs4, styles.my1]}>{dataFromReducer}</Text>
        </View>
      </View>

      <View style={[{ flex: 4 }, styles.bgWhite]}>
        <ScrollView>
          <View style={styles.m2}>
            <TouchableOpacity>
              <View style={[styles.flexRow, styles.my1]}>
                {/* <Icon name="delete" size={40} color={"black"}/> */}
                <Text style={[styles.textBlack, styles.textBold, styles.px1]}>+</Text>
                <Text style={[styles.fs5, styles.textBlack, styles.px1]}>Manage Account</Text>
              </View>
            </TouchableOpacity>

            <View style={[styles.flexRow, styles.my1]}>
              {/* <Icon name="delete" size={40} color={"black"}/> */}
              <Text style={[styles.textBlack, styles.textBold, styles.px1]}>+</Text>
              <Text style={[styles.fs5, styles.textBlack, styles.px1]}>Rewards and Wallet</Text>
            </View>
            <View style={[styles.flexRow, styles.my1]}>
              {/* <Icon name="delete" size={40} color={"black"}/> */}
              <Text style={[styles.textBlack, styles.textBold, styles.px1]}>+</Text>
              <Text style={[styles.fs5, styles.textBlack, styles.px1]}>gift Cards</Text>
            </View>
            <View style={[styles.flexRow, styles.my1]}>
              {/* <Icon name="delete" size={40} color={"black"}/> */}
              <Text style={[styles.textBlack, styles.textBold, styles.px1]}>+</Text>
              <Text style={[styles.fs5, styles.textBlack, styles.px1]}>Reviews</Text>
            </View>
            <View style={[styles.flexRow, styles.my1]}>
              {/* <Icon name="delete" size={40} color={"black"}/> */}
              <Text style={[styles.textBlack, styles.textBold, styles.px1]}>+</Text>
              <Text style={[styles.fs5, styles.textBlack, styles.px1]}>Questions and properties</Text>
            </View>
            <View style={styles.my1}>
              <Text style={[styles.textBlack, styles.textBold, styles.fs5]}>Help and Security</Text>
            </View>
            <View style={[styles.flexRow, styles.my1]}>
              {/* <Icon name="delete" size={40} color={"black"}/> */}
              <Text style={[styles.textBlack, styles.textBold, styles.px1]}>+</Text>
              <Text style={[styles.fs5, styles.textBlack, styles.px1]}>Contact Customer Service</Text>
            </View>
            <View style={[styles.flexRow, styles.my1]}>
              {/* <Icon name="delete" size={40} color={"black"}/> */}
              <Text style={[styles.textBlack, styles.textBold, styles.px1]}>+</Text>
              <Text style={[styles.fs5, styles.textBlack, styles.px1]}>Safety Resource Center</Text>
            </View>
            <View style={[styles.flexRow, styles.my1]}>
              {/* <Icon name="delete" size={40} color={"black"}/> */}
              <Text style={[styles.textBlack, styles.textBold, styles.px1]}>+</Text>
              <Text style={[styles.fs5, styles.textBlack, styles.px1]}>Dispute Resolution</Text>
            </View>


            <View style={styles.my1}>
              <Text style={[styles.textBlack, styles.textBold, styles.fs5]}>Discover</Text>
            </View>

            <View style={[styles.flexRow, styles.my1]}>
              {/* <Icon name="delete" size={40} color={"black"}/> */}
              <Text style={[styles.textBlack, styles.textBold, styles.px1]}>+</Text>
              <Text style={[styles.fs5, styles.textBlack, styles.px1]}>Deals</Text>
            </View>
            <View style={[styles.flexRow, styles.my1]}>
              {/* <Icon name="delete" size={40} color={"black"}/> */}
              <Text style={[styles.textBlack, styles.textBold, styles.px1]}>+</Text>
              <Text style={[styles.fs5, styles.textBlack, styles.px1]}>AirPort Taxis</Text>
            </View>
            <View style={[styles.flexRow, styles.my1]}>
              {/* <Icon name="delete" size={40} color={"black"}/> */}
              <Text style={[styles.textBlack, styles.textBold, styles.px1]}>+</Text>
              <Text style={[styles.fs5, styles.textBlack, styles.px1]}>Travel Communities</Text>
            </View>


            <View style={styles.my1}>
              <Text style={[styles.textBlack, styles.textBold, styles.fs5]}>Setting and Legal</Text>
            </View>

            <View style={[styles.flexRow, styles.my1]}>
              {/* <Icon name="delete" size={40} color={"black"}/> */}
              <Text style={[styles.textBlack, styles.textBold, styles.px1]}>+</Text>
              <Text style={[styles.fs5, styles.textBlack, styles.px1]}>Settings</Text>
            </View>
            <View style={[styles.flexRow, styles.my1]}>
              {/* <Icon name="delete" size={40} color={"black"}/> */}
              <Text style={[styles.textBlack, styles.textBold, styles.px1]}>+</Text>
              <Text style={[styles.fs5, styles.textBlack, styles.px1]}>Give App feedback</Text>
            </View><View style={[styles.flexRow, styles.my1]}>
              {/* <Icon name="delete" size={40} color={"black"}/> */}
              <Text style={[styles.textBlack, styles.textBold, styles.px1]}>+</Text>

              <TouchableOpacity onPress={signOut}>
                <Text style={[styles.fs5, styles.textDanger, styles.px1, styles.textBold]}>Sign Out</Text>
              </TouchableOpacity>
            </View>




          </View>
        </ScrollView>
      </View>
    </View>

  );
}