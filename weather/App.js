import React from 'react';
import {StyleSheet, Text, Platform,KeyboardAvoidingView,
  ImageBackground,TextInput,View} from 'react-native';

  import SearchInput from './components/SearchInput';
  import getImageForWeather from './utils/getImageForWeather';

  export default class App extends React.Component {
    render() {
      return (
       <KeyboardAvoidingView style={styles.container} behavior="padding">
       
       <ImageBackground
       source={getImageForWeather('Clear')}
       style={styles.imageContainer}
       imageStyle={styles.image}
       >
       <View style={styles.detailsContainer}>

       <Text style={[styles.largeText, styles.textStyle]}>San Francisco</Text>
       <Text style={[styles.smallText, styles.textStyle]}>Light Cloud</Text>
       <Text style={[styles.largeText, styles.textStyle]}>24°</Text>
       
       <SearchInput placeholder="Search any city" />

       </View>
       </ImageBackground>
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
    imageContainer: {
      flex: 1,
    },
    image: {
      flex: 1,
      width: null,
      height: null,
      resizeMode: 'cover',
    },
    textStyle: {
      textAlign: 'center',
      fontFamily: 'Roboto',
      color: 'white',

    },
    largeText: {
      fontSize: 44,
    },
    smallText: {
      fontSize: 18,
    },
    detailsContainer: {
flex: 1,
justifyContent: 'center',
backgroundColor: 'rgba(0,0,0,0.6)',
paddingHorizontal: 20,
},
  });
