import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { ROUTES } from '../../constants';
const items = [
  {
    Nom: 'ping1',
    Reference: 1023,
  },
  {
    Nom: 'ping2',
    Reference: 827,
  },

];


export default function Noeud() {
  const [value, setValue] = React.useState(0);
  const navigation = useNavigation();

  return (
    <SafeAreaView  style={{ flex: 1, backgroundColor: '#fafafa' }}>
      <View style={styles.container}>
        {items.map(({ Nom, Reference }, index) => {
          const isActive = value === index;
          return (
            <TouchableOpacity
              key={index}
              onPress={() => {
                setValue(index);
                navigation.navigate(ROUTES.VIEW)
              }}>
              <View style={[styles.radio, isActive && styles.radioActive]}>
                <View style={styles.radioTop}>
                  <Text style={styles.radioNom}>Nom : {Nom}</Text>

                  <Text style={styles.radioReference}>
                    <Text style={{ fontWeight: '700' }}>{Reference}</Text> Reference
                  </Text>
                </View>

               
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
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
    padding: 12,
    borderRadius: 6,
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
  radioTop: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  radioNom: {
    fontSize: 15,
    fontWeight: '600',
    color: '#111827',
  },
  radioReference: {
    fontSize: 14,
    fontWeight: '500',
    color: '#2f2f2f',
  },
  radioDescription: {
    fontSize: 15,
    fontWeight: '400',
    color: '#848a96',
  },
});
