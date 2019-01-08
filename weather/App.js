import React from 'react';
import {StyleSheet, Text, Platform,KeyboardAvoidingView,
  TextInput,View} from 'react-native';

import SearchInput from './components/SearchInput';

export default class App extends React.Component {
  render() {
  return (
 <KeyboardAvoidingView style={styles.container} behavior="padding">
  <Text style={styles.red}>Test :vv</Text>

  <Text style={[styles.largeText, styles.textStyle]}>San Francisco</Text>
  <Text style={[styles.smallText, styles.textStyle]}>Light Cloud</Text>
  <Text style={[styles.largeText, styles.textStyle]}>24°</Text>
  
<SearchInput placeholder="Search any city" />


</KeyboardAvoidingView>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  red: {
    color: 'red',
  },
  textStyle: {
    textAlign: 'center',
    fontFamily: 'Roboto',
  },
  largeText: {
    fontSize: 44,
  },
  smallText: {
    fontSize: 18,
  },
});
