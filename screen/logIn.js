import React from "react";
import { View,Text,TouchableOpacity } from "react-native";
import styles from "../style";
// import Icon from 'react-native-vector-icons/MaterialIcons';


export default function HomeScreen({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
     

        <View style={[styles.bgLight, { flex: 1 }, styles.mx2]}>
        <View style={[{ marginTop: 100 }]}>
          <Text style={[styles.fs2, styles.textBold, styles.textSecondary]}>Sign In or Create an Account</Text>
          <Text style={[styles.fs6, styles.textSecondary, styles.my1]}>Choose any option below to sign in or start creating an account</Text>
        </View>
        <View style={[{ marginTop: 20 }]}>
          <TouchableOpacity onPress={()=>navigation.navigate("Signup")}  style={[styles.bgbtnClr]}>
            <Text style={[styles.textCenter, styles.textLight, styles.p1, styles.fs5]}>Sign in with Email</Text>
          </TouchableOpacity>
        </View>

        <View style={[{ marginTop: 20 }]}>
          <TouchableOpacity   style={[styles.bgTransparent]}>

            <Text style={[styles.textCenter, styles.textBlack, styles.p1, styles.fs5]}>Sign in with Google</Text>
          </TouchableOpacity>
        </View>

        <View style={[{ marginTop: 20 }]}>
          <TouchableOpacity style={[styles.bgInfo]}>
            <Text style={[styles.textCenter, styles.textBlack, styles.p1, styles.fs5]}>Sign in with Facebook</Text>

          {/* <Text><Icon name="delete" size={30} color="#900" /></Text> */}


          </TouchableOpacity>
        </View>


        <View>
            <Text style={[styles.textBlack,styles.textCenter,styles.my3,styles.fs4]}>---- Or ----</Text>
        </View>

        <View>
            <TouchableOpacity onPress={()=>navigation.navigate("Signup")} style={[{borderWidth:1,borderColor:"skyblue"}]}>
                <Text  style={[styles.textCenter, styles.textInfo, styles.p1, styles.fs5]}>Create an Account</Text>
            </TouchableOpacity>
        </View>
      </View>
      </View>
    );
  }