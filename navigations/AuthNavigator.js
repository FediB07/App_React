import React from 'react';
import ForgotPassword from '../Screens/auth/ForgotPassword';
import Login from '../Screens/auth/Login';
import { createStackNavigator } from '@react-navigation/stack';
import { ROUTES } from '../constants';
import BottomTabNavigator from './BottomTabNavigator';

const  Stack = createStackNavigator();

export default function AuthNavigator() {
    console.log(Stack);
  return (
    <Stack.Navigator>
       <Stack.Screen  options={{headerShown: false}} name={ROUTES.LOGIN} component={Login} />
        <Stack.Screen  options={{headerShown: false}} name={ROUTES.HOME} component={BottomTabNavigator}/>
        <Stack.Screen name={ROUTES.Forgot_Password} component={ForgotPassword} />
    </Stack.Navigator>
  );
}
