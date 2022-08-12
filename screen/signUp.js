import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import styles from "../style";
import auth from '@react-native-firebase/auth';
import { useDispatch } from "react-redux";

export default function Signup({ navigation }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()

  let createUser = () => {
    let obj = {
      email: email,
      password: password
    }
    if (email == '') {
      console.log("Email Required")
      return
    }
    else if (password == '') {
      console.log("Password required")
      return
    }
    auth()
      .createUserWithEmailAndPassword(obj.email, obj.password)
      .then(() => {
        console.log('User account created & signed in!');
        dispatch({
          type: "DATAFROMLOGIN",
          payload: obj.email
        });
        navigation.navigate("MainLayout")
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
              var user = userCredential.user;
              console.log('User account created & signed in!');
              console.log(user)
              dispatch({
                type: "DATAFROMLOGIN",
                payload: obj.email
              });
              navigation.navigate("MainLayout")
            })
            .catch((error) => {
              var errorMessage = error.message;
              console.log(errorMessage)
            });
        }
        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }
      });
    
  }

  return <>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      <View style={[styles.bgLight, { flex: 1 }, styles.mx2]}>
        <View style={[{ marginTop: 100 }]}>
          <Text style={[styles.fs2, styles.textBold, styles.textSecondary]}>Enter Your Email and Password</Text>
          <Text style={[styles.fs6, styles.textSecondary, styles.my1]}>We'll use this to sign you in or to create an account if you dont have one yet.</Text>
        </View>
        <View style={styles.my1}>
          <TextInput value={email} onChangeText={(e) => setEmail(e)} required={true} keyboardType="email-address" placeholder="Enter Your Email" placeholderTextColor={"gray"} style={[styles.input, styles.textBlack]} />
        </View>
        <View style={styles.my1}>
          <TextInput value={password} onChangeText={(e) => setPassword(e)} secureTextEntry={true} required={true} placeholder="Enter Password" placeholderTextColor={"gray"} style={[styles.input, styles.textBlack]} />
        </View>
        {/* onPress={()=>navigation.navigate("MainLayout")} */}
        <View style={[{ marginTop: 20 }]}>
          <TouchableOpacity onPress={(createUser)} style={[styles.bgbtnClr]}>
            <Text style={[styles.textCenter, styles.textLight, styles.p1, styles.fs5]}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </>
}