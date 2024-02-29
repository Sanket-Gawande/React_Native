import {
  ScrollView,
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  Linking,
} from 'react-native';
import React from 'react';
import FlatCard from './shared/flat-card';
import ImageCards from './shared/card';
const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Flat Cards</Text>
          <FlatCard />
          <Text style={styles.title}>Flat Cards Repetition</Text>
          <FlatCard />
          <Text style={styles.title}>Card with images</Text>
          <ImageCards />
        </View>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://sanket.vercel.app')}>
          <Text style={styles.button}>Open Portfolio</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    gap: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    paddingTop: 8,
  },
  button: {
    backgroundColor: 'slateblue',
    borderRadius: 28,
    padding: 16,
    marginHorizontal: 8,
    borderWidth: 2,
    borderColor: 'white',
    fontWeight: '500',
    color: 'white',
  },
});
