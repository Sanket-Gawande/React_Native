import {
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import {ICountry, countries} from './constant';
import Snackbar from 'react-native-snackbar';
const Converter = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const calculateResult = useCallback(
    (c: ICountry) => {
      if (!+input) {
        return Snackbar.show({
          text: 'Please enter valid number to convert.',
          duration: Snackbar.LENGTH_SHORT,
        });
      }
      setResult(`${c.currency}${(+input * c.rate).toFixed(2)}`);
    },
    [input],
  );
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#eee'} />
      <TextInput
        style={[styles.input]}
        placeholder="Enter amount, Ex. 2450"
        keyboardType="numeric"
        value={input}
        onChangeText={t => setInput(t)}
        clearButtonMode="always"
      />
      <View style={styles.main}>
        <Text style={[styles.text, styles.title]}>Countries</Text>
        <FlatList
          data={countries}
          numColumns={3}
          keyExtractor={c => c.flag}
          renderItem={({item: c}) => (
            <TouchableOpacity
              onPress={() => calculateResult(c)}
              key={c.country}
              style={styles.country}>
              <Text style={styles.flag}>{c.flag}</Text>
              <Text style={[styles.text, styles.center]}>{c.country}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
      {!!+input && (
        <Text style={[styles.text, styles.title, styles.result]}>{result}</Text>
      )}
    </View>
  );
};

export default Converter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    padding: 12,
    flexDirection: 'column',
    display: 'flex',
    rowGap: 20,
  },
  text: {fontSize: 16, color: '#333'},
  title: {fontSize: 20, fontWeight: '500'},
  input: {
    borderWidth: 2,
    borderColor: '#ddd',
    color: '#666',
    borderRadius: 10,
    paddingHorizontal: 12,
    width: '100%',
    fontSize: 18,
    backgroundColor: '#fff',
    fontWeight: '600',
    marginTop: 20,
  },
  center: {textAlign: 'center'},
  result: {textAlign: 'center', marginTop: 'auto', marginBottom: 20},
  main: {gap: 8},
  countriesGrid: {
    flexDirection: 'row',
    gap: 10,
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  flag: {textAlign: 'center', fontSize: 28},
  country: {
    padding: 8,
    borderRadius: 10,
    gap: 4,
    backgroundColor: '#fff',
    flex: 1,
    margin: 6,
  },
});
