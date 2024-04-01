
import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MapView, { Marker, PROVIDER_DEFAULT } from 'react-native-maps';


const cities = [
  { name: 'Ville 1', latitude: 37.27837440447127, longitude: 9.863168370116336 },
  { name: 'Ville 2', latitude: 37.28949291945062, longitude: 9.857263759671392 },
  { name: 'Ville 3', latitude: 37.32740096356928, longitude: 9.847127511740903 },
  { name: 'Ville 4', latitude: 37.323175120251435, longitude: 9.802547702881231 },
];


export default function Home() {
  const [selectedCity, setSelectedCity] = useState(null);

  const handleCityPress = (city) => {
    setSelectedCity(city);
  };

  const getMapRegion = () => ({
    latitude: selectedCity.latitude,
    longitude: selectedCity.longitude,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  });

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={styles.map}
        provider={PROVIDER_DEFAULT}
        region={selectedCity ? getMapRegion() : {
          latitude: 36.806389,
          longitude: 10.181667,
          latitudeDelta: 3,
          longitudeDelta: 2,
        }}
      >
        {selectedCity && (
          <Marker
            coordinate={{
              latitude: selectedCity.latitude,
              longitude: selectedCity.longitude,
            }}
          />
        )}
      </MapView>

      <ScrollView horizontal style={styles.cityList}>
        {cities.map((city, index) => (
          <TouchableOpacity style={styles.card} key={index} onPress={() => handleCityPress(city)}>
           <Image
              source={require('../../assets/peche.png')} // Chemin vers votre image
              style={styles.cityImage}
            />
            <View style={styles.textContent}>
              <Text>
               gghghgh
              </Text>
              <Text>
               hhsdjjshdj
              </Text>
            </View>
          
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}



const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', 
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  cityList: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    paddingVertical: 10,
  },
  cityImage: {
    width: 100,
    height: 100,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 2,
    backgroundColor: "#FFF",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: { x: 2, y: -2 },
    height: 180,
    width: 240,
    overflow: "hidden",
  },
  textContent: {
    flex: 2,
    padding: 6,
  },
});