import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { ROUTES } from '../../constants';




const items = [
  {
    Nom_p: 'Sonar 1',
    Region: 'rafraf',
    Date_p: '23/03/2024',
    description: 'The Ping sonar is a multipurpose single-beam echosounder with a 100 meter sonar range and 300 meter depth rating.',
  },
  {
    Nom_p: 'Sonar 2',
    Region: 'Cap zebib',
    Date_p: '09/05/2024',
    description: 'The Ping sonar is a multipurpose single-beam echosounder with a 100 meter sonar range and 300 meter depth rating.',
  },
  {
    Nom_p: 'Sonar 3',
    Region: 'Metline',
    Date_p: '16/08/2024',
    description: 'The Ping sonar is a multipurpose single-beam echosounder with a 100 meter sonar range and 300 meter depth rating.',
  },
];


export default function Project() {

  
  const [value, setValue] = React.useState(0);
  const navigation = useNavigation();

  return (
    <ScrollView>
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fafafa' }}>
      <View style={styles.container}>
        

        {items.map(({ Nom_p, Region, Date_p, description }, index) => {
      
          return (
            
            <TouchableOpacity
              key={index}
              onPress={() => {
                setValue(index);
                navigation.navigate(ROUTES.NOEUD);
              }}>
              <View style={[styles.radio]}>
                <Text style={styles.radioNom_p}>{Nom_p}</Text>

                <Text style={styles.radioRegion}>
                  {Region}
                  
                </Text>

                <View style={styles.radioBadge}>
                  <Text style={styles.radioBadgeText}>{Date_p}</Text>
                </View>

                <Text style={styles.radioDescription}>{description}</Text>

                <View />
              </View>
            </TouchableOpacity>
            
          );
        })}
      </View>
    </SafeAreaView>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#1d1d1d',
    marginBottom: 12,
  },
  /** Radio */
  radio: {
    position: 'relative',
    backgroundColor: '#fff',
    marginBottom: 12,
    padding: 16,
    borderRadius: 8,
    alignItems: 'flex-start',
    borderWidth: 2,
    borderColor: 'transparent',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  radioActive: {
    borderColor: '#0069fe',
  },
  radioNom_p: {
    fontSize: 14,
    fontWeight: '600',
    letterSpacing: 1.2,
    color: '#b3b3b3',
    textTransform: 'uppercase',
    marginBottom: 8,
  },
  radioRegion: {
    fontSize: 18,
    fontWeight: '700',
    color: '#2f2f2f',
    marginBottom: 12,
  },
  radioBadge: {
    backgroundColor: '#dce9fe',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
    marginBottom: 12,
  },
  radioBadgeText: {
    fontSize: 15,
    fontWeight: '500',
    color: '#0069fe',
  },
  radioDescription: {
    fontSize: 15,
    fontWeight: '500',
    color: '#848a96',
  },
  
  
});
