/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  Alert,
  Clipboard,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Text from './shared/text';

function App(): React.JSX.Element {
  const container = {
    backgroundColor: '#2C3335',
    flex: 1,
    padding: 10,
  };

  const passwordField: StyleSheet.NamedStyles<{}> = {
    paddingVertical: 14,
    paddingHorizontal: 16,
    backgroundColor: '#616C6F',
    borderRadius: 10,
  };

  const [length, setLength] = React.useState('16');
  const [passwordFormat, setPasswordFormat] = React.useState({
    lowerCase: false,
    speacialChars: false,
    numbers: false,
    upperCase: false,
  });
  const [password, setPassword] = useState('');

  function generatePassword() {
    const passLength = +length;
    if ((passLength && passLength > 50) || passLength < 8) {
      return Alert.alert('Password length should be in range of 8-50');
    }
    const CAPITAL = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const SMALL = 'abcdefghijklmnopqrstuvwxyz';
    const NUMBERS = '0123456789';
    const SPCHARS = '@#$-_.';
    let pass = '';
    const sample =
      (passwordFormat.upperCase ? CAPITAL : '') +
      (passwordFormat.lowerCase ? SMALL : '') +
      (passwordFormat.speacialChars ? SPCHARS : '') +
      (passwordFormat.numbers ? NUMBERS : '');
    const l = sample.length;
    if (!l) {
      return Alert.alert(
        'Please select at least 1 type of characters to include',
      );
    }
    for (let i = 1; i < passLength; i++) {
      pass += sample.charAt(Math.round(Math.random() * l));
    }
    setPassword(pass);
  }

  return (
    <SafeAreaView style={container}>
      <StatusBar barStyle={'light-content'} backgroundColor={'#2C3335'} />
      <Text semibold center style={styles.heading}>
        Password Generator
      </Text>
      <View style={styles.passwordOptions}>
        <View style={styles.lengthInput}>
          <Text>Password Length</Text>
          <TextInput
            style={styles.input}
            inputMode="numeric"
            onChangeText={text => setLength(text)}
            value={length}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            passwordFormat.upperCase = !passwordFormat.upperCase;
            setPasswordFormat(a => ({...a}));
          }}
          style={styles.lengthInput}>
          <Text
            style={[
              styles.option,
              passwordFormat.upperCase ? styles.optionActive : {},
            ]}>
            Uppercase
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            passwordFormat.lowerCase = !passwordFormat.lowerCase;
            setPasswordFormat(a => ({...a}));
          }}
          style={styles.lengthInput}>
          <Text
            style={[
              styles.option,
              passwordFormat.lowerCase ? styles.optionActive : {},
            ]}>
            Lowercase
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            passwordFormat.speacialChars = !passwordFormat.speacialChars;
            setPasswordFormat(a => ({...a}));
          }}
          style={styles.lengthInput}>
          <Text
            style={[
              styles.option,
              passwordFormat.speacialChars ? styles.optionActive : {},
            ]}>
            Special Characters
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            passwordFormat.numbers = !passwordFormat.numbers;
            setPasswordFormat(a => ({...a}));
          }}
          style={styles.lengthInput}>
          <Text
            style={[
              styles.option,
              passwordFormat.numbers ? styles.optionActive : {},
            ]}>
            Numbers
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        {password && (
          <TouchableOpacity
            onPress={() => {
              Clipboard.setString(password);
            }}>
            <Text
              numberOfLines={1}
              ellipsizeMode="middle"
              style={passwordField}>
              {password}
            </Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity style={styles.button} onPress={generatePassword}>
          <Text center semibold>
            Generate Password
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 22,
    textAlign: 'center',
    padding: 10,
  },
  passwordOptions: {
    gap: 8,
    marginVertical: 10,
  },
  lengthInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
    color: 'white',
    padding: 4,
    paddingHorizontal: 18,
  },
  option: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    width: '100%',
    borderRadius: 10,
    borderColor: '#444',
  },
  optionActive: {
    borderColor: 'tomato',
    backgroundColor: '#444',
  },
  button: {
    marginTop: 10,
    paddingVertical: 14,
    backgroundColor: 'tomato',
    color: 'white',
    borderRadius: 10,
  },
  footer: {
    marginTop: 'auto',
  },
});
export default App;
