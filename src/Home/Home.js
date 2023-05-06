import {
  StyleSheet,
  Text,
  onPress,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

export default function Home({navigation}) {
  return (
    <ImageBackground
      style={styles.ImageBackground}
      source={require('../image/Home.png')}>
      <Image source={require('../image/Logo.png')} />
      <TouchableOpacity
        style={styles.france}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.Iam}>I am in France</Text>
        <Image
          style={{marginLeft: 32}}
          source={require('../image/France.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.emirate}>
        <Text style={styles.Iam}>I am in Emirates</Text>
        <Image
          style={{height: 20, marginLeft: 20}}
          source={require('../image/emirates.png')}
        />
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  france: {
    flexDirection: 'row',
    backgroundColor: 'black',
    padding: 8,
    width: 245,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 120,
    borderRadius: 20,
  },
  emirate: {
    flexDirection: 'row',
    backgroundColor: '#9D804D',
    padding: 8,
    width: 245,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
    borderRadius: 20,
  },
  ImageBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Iam: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
  },
});
