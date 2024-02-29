import {Link} from '@react-navigation/native';
import React from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';

const Home = () => (
  <View style={styles.container}>
    <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
    <Text>Home Screen</Text>
    <Link to={'/Details'} style={styles.link}>
      Go to details
    </Link>
  </View>
);

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  link: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#009875',
    color: '#fff',
    borderRadius: 20,
    maxWidth: 150,
    textAlign: 'center',
  },
});
