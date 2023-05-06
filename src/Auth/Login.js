import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

export default function Login({navigation}) {
  const [Username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const Submit = async () => {
    console.log('altaf', Username);
    console.log('Zuhaib', password);

    var myHeaders = new Headers();
    myHeaders.append('Accept', 'application/json');

    var formdata = new FormData();
    formdata.append('email', Username);
    formdata.append('password', password);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow',
    };

    fetch('http://34.233.35.208/api/login', requestOptions)
      .then(response => response.json())
      .then(async result => {
        console.log(result.message);
        if (result.status == '200') {
          await AsyncStorage.setItem('@token', result.token);

          navigation.navigate('Drawer');
        } else {
        }
      })
      .catch(error => console.log('error', error));
  };

  return (
    <ImageBackground style={styles.color} source={require('../image/2nd.png')}>
      <TouchableOpacity style={styles.camera}>
        <Image
          style={styles.Vectorimg}
          resizeMode="contain"
          source={require('../image/Vector.png')}
        />
      </TouchableOpacity>
      <TextInput
        placeholder="Username"
        style={styles.user}
        onChangeText={text => setUsername(text)}
        value={Username}
      />
      <TextInput
        placeholder="Password"
        style={styles.user}
        onChangeText={text => setPassword(text)}
        value={password}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate('Drawer')}
        style={styles.france}>
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
  color: {
    flex: 1,
    backgroundColor: '#9D804D',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Vectorimg: {
    height: 25,
    width: 25,
  },
  camera: {backgroundColor: 'white', padding: 10, borderRadius: 50},
  user: {
    backgroundColor: 'white',
    paddingVertical: 5,
    borderRadius: 50,
    width: 290,
    paddingHorizontal: 25,
    marginTop: 30,
  },
  france: {
    flexDirection: 'row',
    backgroundColor: 'black',
    padding: 8,
    width: 245,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
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
  Iam: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
  },
});
