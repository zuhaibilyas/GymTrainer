import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {ScrollView} from 'react-native-gesture-handler';

const Menu = ({navigation}) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const token = await AsyncStorage.getItem('@token');
    console.log('token', token);
    var myHeaders = new Headers();
    myHeaders.append('Accept', 'application/json');
    myHeaders.append('Authorization', 'Bearer ' + token);

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      // body: formdata,
      redirect: 'follow',
    };

    fetch('http://34.233.35.208/api/products', requestOptions)
      .then(response => response.json())
      .then(async result => {
        console.log(result);
        if (result.status == '200') {
          setData(result.data);
        } else {
        }
      })
      .catch(error => console.log('error', error));
  };
  return (
    <View style={{flex: 1}}>
      <View style={styles.style}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Image source={require('../image/drawer.png')} />
        </TouchableOpacity>
        <Image
          style={{flex: 1}}
          source={require('../image/JABAL.png')}
          resizeMode={'contain'}
        />
        <Image source={require('../image/message.png')} />
      </View>
      <View style={styles.scr}>
        <ScrollView>
          {data.map(item => {
            return (
              <ImageBackground
                style={styles.flex1}
                source={require('../image/food.png')}>
                <Text style={styles.Imagetext}>{item.name}</Text>
                <Image
                  style={styles.arrow}
                  source={require('../image/arrow.png')}
                />
              </ImageBackground>
            );
          })}
          <ImageBackground
            style={styles.flex1}
            source={require('../image/food.png')}>
            <Text style={styles.Imagetext}>My Nutritional Coaching</Text>
            <Image
              style={styles.arrow}
              source={require('../image/arrow.png')}
            />
          </ImageBackground>
          <ImageBackground
            style={styles.flex1}
            source={require('../image/run.png')}>
            <Text style={styles.Imagetext}>My Mental Coaching</Text>
            <Image
              style={styles.arrow}
              source={require('../image/arrow.png')}
            />
          </ImageBackground>
          <ImageBackground
            style={styles.flex1}
            source={require('../image/gym.png')}>
            <Text style={styles.Imagetext}>
              My Health Prevention {'\n'}Coaching
            </Text>
            <Image
              style={styles.arrow}
              source={require('../image/arrow.png')}
            />
          </ImageBackground>
        </ScrollView>
      </View>
    </View>
  );
};
export default Menu;

const styles = StyleSheet.create({
  style: {
    height: 60,
    backgroundColor: '#9D804D',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 20,
  },
  scr: {
    backgroundColor: '#CCCCCC',
    flex: 1,
    paddingHorizontal: 20,
    alignContent: 'center',
  },
  flex1: {height: 130, marginVertical: 12, justifyContent: 'center'},
  Imagetext: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
  arrow: {position: 'absolute', right: 0, marginRight: 18},
});
