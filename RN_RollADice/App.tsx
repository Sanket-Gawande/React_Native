import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Haptic, {HapticFeedbackTypes} from 'react-native-haptic-feedback';
const App = () => {
  const [face, setFace] = useState(0);

  function getFace() {
    Haptic.trigger(HapticFeedbackTypes.impactMedium, {
      ignoreAndroidSystemSettings: true,
    });
    setFace(() => Math.round(Math.random() * 5));
  }

  const images = [
    require('./assets/1-dice.png'),
    require('./assets/2-dice.png'),
    require('./assets/3-dice.png'),
    require('./assets/4-dice.png'),
    require('./assets/5-dice.png'),
    require('./assets/6-dice.png'),
  ];
  return (
    <View style={styles.container}>
      <Image source={images[face]} style={styles.diceView} />
      <TouchableOpacity onPress={getFace} style={styles.roleButton}>
        <Text style={styles.text}>ROLL THE DICE</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
  },
  diceView: {
    borderRadius: 30,
  },
  roleButton: {
    borderWidth: 2,
    borderColor: '#555',
    color: '#fff',
    backgroundColor: '#333',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  text: {
    color: '#fff',
    fontWeight: '500',
  },
});
