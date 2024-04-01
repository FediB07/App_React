import React, { useState,useEffect }  from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Svg, { Path, Circle } from 'react-native-svg'; 


export default function Views() {
 
  const [depth, setDepth] = useState(37.9);
  const [temperature, setTemperature] = useState(2.1);

  return (
    <View style={styles.container}>
    <View style={styles.sonarDisplay}>
      <Text style={styles.depthText}>{depth} m</Text>
      <Text style={styles.temperatureText}>{temperature} °C</Text>
      <FishFinder />
    </View>
  </View>
  );
}
const FishFinder = () => {
  // const [data, setData] = useState([]); // Données du sondeur (profondeur, échos, etc.)

  // useEffect(() => {
  //   // Générer des données de test pour le graphique
  //   const newData = [...data];
  //   for (let i = 0; i < 100; i++) {
  //     newData.push({
  //       depth: Math.random() * 50,
  //       echo: Math.random() * 10,
  //     });
  //   }
  //   setData(newData);
  // }, []);

  return (
    <View style={styles.fishFinder}>
      {/* <Svg width={400} height={200}>
        <Path
          d="M 0 0 L 400 200"
          stroke="white"
          strokeWidth={1}
        />
        {data.map((point, index) => (
          <Circle
            key={index}
            cx={index * 4}
            cy={200 - point.depth}
            r={point.echo}
            fill="red"
          />
        ))}
      </Svg> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000080',
  },
  sonarDisplay: {
    flex: 1,
    borderRadius: 10,
    borderColor: 'red',
    borderWidth: 2,
    margin: 10,
  },
  depthText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    margin: 10,
  },
  temperatureText: {
    fontSize: 18,
    color: 'white',
    margin: 10,
  },
  fishFinder: {
    flex: 1,
    // Code pour le style du graphique
  },
});