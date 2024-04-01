import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  KeyboardAvoidingView,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { ROUTES } from '../../constants';


export default function ForgotPassword() {
  const navigation = useNavigation();
  return (
    <KeyboardAvoidingView behavior="position" style={styles.mainCon}>
    <View style={{paddingTop:40 , paddingBottom:40 ,paddingHorizontal:12}}>
      <Pressable onPress={() =>  {
                navigation.navigate(ROUTES.LOGIN)
              }}>
        <Icon name="arrow-back" size={30} color="#000000" />
      </Pressable>
    </View>
    <View style={{position: 'relative',top:40}}>
      <View style={styles.container}>
        <View style={styles.loginLblCon}>
          <Text style={styles.loginLbl}>Forgot Password?</Text>
        </View>
        <View style={styles.forgotDes}>
          <Text style={styles.forgotDesLbl}>
            Don't worry! It happens, please enter the address associated
            with your account
          </Text>
        </View>
        <View style={styles.formCon}>
          <View style={styles.textBoxCon}>
            <View style={styles.textCon}>
              <TextInput
                style={styles.textInput}
                placeholder={'Email ID'}
                placeholderTextColor={'#aaa'}
              />
            </View>
          </View>
        </View>

        <View style={[styles.loginCon, {marginTop: 35}]}>
          <Pressable
            style={styles.LoginBtn}
            onPress={() =>{navigation.navigate(ROUTES.OTP)}}>
            <Text style={styles.loginBtnLbl}>Submit</Text>
          </Pressable>
        </View>
      </View>
    </View>
  </KeyboardAvoidingView>
  )
}


const styles = StyleSheet.create({
  mainCon: {
    backgroundColor: '#fff',
    flex: 1,
  },
  loginIcon: {
   
    alignSelf: 'center',
  },
  formCon: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  container: {
    paddingHorizontal: 20,
  },
  loginLblCon: {
    position: 'relative',
    bottom: 40,
  },
  loginLbl: {
    color: '#000',
    fontSize: 40,
  
  },
  // at: {
  //   alignSelf: 'center',
  //   width: '10%',
  // },

  textBoxCon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textCon: {
    width: '90%',
  },

  textInput: {
    paddingHorizontal:18,
    borderBottomColor: '#aaa',
    borderWidth: 1,
    borderRadius:12,
    // borderTopWidth: 1,
    // borderLeftWidth: 1,
    // borderRightWidth: 1,
    color: '#000',
    fontSize: 16,
    width:316,
    height: 45,
  },

  LoginBtn: {
    backgroundColor: '#0057ff',
    borderRadius: 20,
  },
  loginBtnLbl: {
    textAlign: 'center',
    fontSize: 16,
 
    color: '#fff',
    paddingVertical: 10,
  },

  forgotDes: {
    position: 'relative',
    bottom: 35,
  },
  forgotDesLbl: {
    color: '#000',

  },
});