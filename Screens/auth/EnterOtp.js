import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
    KeyboardAvoidingView,
    Pressable,
    StyleSheet,
    Text,
    View
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { ROUTES } from '../../constants';

export default function EnterOtp(){
    resendOTP = () => {};
    const navigation = useNavigation();
      return (
        <KeyboardAvoidingView behavior="position" style={styles.mainCon}>
          <View style={{paddingTop:40 , paddingBottom:40 ,paddingHorizontal:12}}>
           <Pressable onPress={() =>  {
                navigation.navigate(ROUTES.Forgot_Password)
              }}>
                <Icon name="arrow-back" size={30} color="#000000" />
            </Pressable>
          </View>
          <View style={{position: 'relative', bottom: 30}}>
            <View style={styles.container}>
              <View style={styles.loginLblCon}>
                <Text style={styles.loginLbl}>Enter OTP?</Text>
              </View>
              <View style={styles.forgotDes}>
                <Text style={styles.forgotDesLbl}>
                  An 4 digit code has been sent to
                </Text>
                <Text style={styles.forgotDesLbl}>+91 1234567890</Text>
              </View>
              <View style={styles.formCon}>
                {/* <OTPInputView
                  pinCount={4}
                  autoFocusOnLoad
                  style={{width: '80%', height: 70}}
                  codeInputFieldStyle={{color: '#000'}}
                  onCodeFilled={code =>
                    {}
                  }
                /> */}
                <Pressable onPress={() =>{}}>
                  <Text style={styles.registerLbl}>Resend OTP</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      );
    
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
      alignItems: 'center',
    },
    container: {
      paddingHorizontal: 20,
      marginTop: 50,
    },
    loginLblCon: {
      position: 'relative',
      bottom: 40,
    },
    loginLbl: {
      color: '#000',
      fontSize: 40,
      
    },
    forgotDes: {
      position: 'relative',
      bottom: 35,
    },
    forgotDesLbl: {
      color: '#000',
   
    },
    registerLbl: {color: '#0057ff'},
  });