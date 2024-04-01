
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { ROUTES } from '../../constants';



export default function Login(props) {

    const [form, setForm] = useState({
        username: '',
        password: '',
    }); 

    const Tab = [{name:'fedi',pass:'123456'}];

    const navigation = useNavigation();


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#ffff' }}>
      <View style={styles.container}>
        <KeyboardAwareScrollView>
          <View style={styles.header}>
            <Image
              alt="App Logo"
              resizeMode="contain"
              style={styles.headerImg}
              source={
                require('../../assets/peche.png')
              } />

            <Text style={styles.title}>
              Sign in to <Text style={{ color: '#075eec' }}>FishApp</Text>
            </Text>

            <Text style={styles.subtitle}>
              Get access to your profile and more
            </Text>
          </View>

          <View style={styles.form}>
            <View style={styles.input}>
              <Text style={styles.inputLabel}>Username</Text>

              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                onChangeText={username => setForm({ ...form, username })}
                placeholder="enter Username"
                placeholderTextColor="#6b7280"
                style={styles.inputControl}
                value={form.username} />
            </View>

            <View style={styles.input}>
              <Text style={styles.inputLabel}>Password</Text>

              <TextInput
                autoCorrect={false}
                onChangeText={password => setForm({ ...form, password })}
                placeholder="********"
                placeholderTextColor="#6b7280"
                style={styles.inputControl}
                secureTextEntry={true}
                value={form.password} />
            </View>

            <View style={styles.formAction}>
              <TouchableOpacity
                onPress={() => {
                  if('fedi' === form.username && '123456'=== form.password){
                    navigation.navigate(ROUTES.HOME);
                    console.log("correct");
                  
                  }else {
                    console.log("Incorrect username or password");
                }  
                  
                }}>
                <View style={styles.btn}>
                  <Text style={styles.btnText}>Sign in</Text>
                </View>
              </TouchableOpacity>
            </View>
            
            <TouchableOpacity
                onPress={() => {
                  navigation.navigate(ROUTES.Forgot_Password)
                }}>
                <View >
                <Text style={styles.formLink}>Forgot password?</Text>
                </View>
              </TouchableOpacity>
            
          </View>
        </KeyboardAwareScrollView>
        
      </View>
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
    container: {
      paddingVertical: 24,
      paddingHorizontal: 0,
      flexGrow: 1,
      flexShrink: 1,
      flexBasis: 0,
    },
    title: {
      fontSize: 31,
      fontWeight: '700',
      color: '#1D2A32',
      marginBottom: 6,
    },
    subtitle: {
      fontSize: 15,
      fontWeight: '500',
      color: '#929292',
    },
    /** Header */
    header: {
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: 36,
    },
    headerImg: {
      opacity :0.8,
      width: 100,
      height: 100,
      alignSelf: 'center',
      marginBottom: 36,
    },
    /** Form */
    form: {
      marginBottom: 24,
      paddingHorizontal: 24,
      flexGrow: 1,
      flexShrink: 1,
      flexBasis: 0,
    },
    formAction: {
      marginTop: 4,
      marginBottom: 16,
    },
    formLink: {
      fontSize: 16,
      fontWeight: '600',
      color: '#075eec',
      textAlign: 'center',
    },
    
    /** Input */
    input: {
      marginBottom: 16,
    },
    inputLabel: {
      fontSize: 17,
      fontWeight: '600',
      color: '#222',
      marginBottom: 8,
    },
    inputControl: {
      height: 50,
      backgroundColor: '#fff',
      paddingHorizontal: 16,
      borderRadius: 12,
      fontSize: 15,
      fontWeight: '500',
      color: '#222',
      borderWidth: 1,
      borderColor: '#C9D3DB',
      borderStyle: 'solid',
    },
    /** Button */
    btn: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 30,
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderWidth: 1,
      backgroundColor: '#075eec',
      borderColor: '#075eec',
    },
    btnText: {
      fontSize: 18,
      lineHeight: 26,
      fontWeight: '600',
      color: '#fff',
    },
  });