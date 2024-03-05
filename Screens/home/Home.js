import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { PROVIDER_DEFAULT } from 'react-native-maps';

export default function Home() {
  return (
    <View style={{flex:1}}>
    <MapView style={StyleSheet.absoluteFill}
    provider={PROVIDER_DEFAULT} 
    region={{
      latitude:  36.806389,
      longitude:  10.181667,
      latitudeDelta:  3,
      longitudeDelta:  2,
    }}
    />
   
   </View>
  )
}
