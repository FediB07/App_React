import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import ForgotPassword from '../Screens/auth/ForgotPassword';
import Login from '../Screens/auth/Login';
import Noeud from '../Screens/home/Noeud';
import Views from '../Screens/home/Views';
import { ROUTES } from '../constants';
import BottomTabNavigator from './BottomTabNavigator';
import EnterOtp from '../Screens/auth/EnterOtp';


const  Stack = createStackNavigator();

export default function AuthNavigator() {
    console.log(Stack);
  return (
    <Stack.Navigator>
        <Stack.Screen  options={{headerShown: false}} name={ROUTES.LOGIN} component={Login} />
        <Stack.Screen  options={{headerShown: false}} name={ROUTES.HOME} component={BottomTabNavigator}/>
        <Stack.Screen   options={{headerShown: false}} name={ROUTES.Forgot_Password} component={ForgotPassword} />
        <Stack.Screen name={ROUTES.NOEUD} component={Noeud} />
        <Stack.Screen name={ROUTES.VIEW} component={Views} />
        <Stack.Screen options={{headerShown: false}} name={ROUTES.OTP} component={EnterOtp} />
    
    </Stack.Navigator>
  );
}
