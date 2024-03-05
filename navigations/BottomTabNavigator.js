import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
//import ROUTES from '../constants/ROUTES';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import Home from '../Screens/home/Home';
import Noeud from '../Screens/home/Noeud';
import Project from '../Screens/home/Project';
import Settings from '../Screens/home/Settings';
import Views from '../Screens/home/Views';
import { COLORS, ROUTES } from '../constants';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator(props) {
  const navigation = useNavigation();

  return (
  <Tab.Navigator
  screenOptions={({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;
      let rn = route.name;

      if (rn === ROUTES.SETTINGS) {
        iconName = focused ? 'settings' : 'settings-outline';

      } else if (rn === ROUTES.HOME_TAB) {
        iconName = focused ? 'home' : 'home-outline';

      } else if (rn === ROUTES.NOEUD) {
        iconName = focused ? 'list' : 'list-outline';
      }else if (rn === ROUTES.PROJECT) {
        iconName = focused ? 'person' : 'person-outline';
      }else if (rn === ROUTES.VIEW) {
        iconName = focused ? 'briefcase' : 'briefcase-outline';
      }

     
      return <Ionicons name={iconName} size={size} color={color} />;
    },
  })}
  tabBarOptions={{
    activeTintColor: 'tomato',
    inactiveTintColor: 'grey',
    labelStyle: { paddingBottom: 10, fontSize: 10 },
    style: { padding: 10, height: 70}
  }}
  >
      <Tab.Screen  name={ROUTES.HOME_TAB} component={Home} />
      <Tab.Screen name={ROUTES.NOEUD} component={Noeud} />
      <Tab.Screen name={ROUTES.PROJECT} component={Project} />
      <Tab.Screen name={ROUTES.VIEW} component={Views} />
      <Tab.Screen name={ROUTES.SETTINGS} component={Settings} />
  </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  tabBarStyle: {
    position: 'absolute',
    backgroundColor: COLORS.transparent,
    borderTopWidth: 0,
    bottom: 15,
    right: 10,
    left: 10,
    height: 92,
  },
});