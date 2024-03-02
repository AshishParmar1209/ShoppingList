import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Button,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const {width, height} = Dimensions.get('screen');

const login = (props: any) => {
  const {navigation, route} = props;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Image
          style={{
            height: width / 1.5,
            width: width / 1.5,
            margin: 8,
            padding: 8,
            paddingTop: 20,
          }}
          source={require('../../assets/loginvector.png')}
        />
        <Text
          style={{
            fontSize: 30,
            fontWeight: '700',
            color: 'black',
            padding: 12,
            paddingBottom: 0,
            margin: 8,
          }}>
          Welcome
        </Text>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '700',
            color: 'grey',
            margin: 8,
            paddingHorizontal: 20,
            textAlign: 'center',
          }}>
          Welcome to Mobile Tech Youtube Channel. Please subscribe and like the
          video.
        </Text>

        <View style={{padding: 8, paddingHorizontal: 0}}>
          <TouchableOpacity
            onPress={() => {
              AsyncStorage.setItem('isLoggedIn', '1').then(res => {
                navigation.navigate('HomeStack', {
                  screen: 'Home',
                  params: {name: 'Hey, Ashish'},
                });
              });
            }}
            style={{
              padding: 8,
              paddingVertical: 15,
              margin: 8,
              borderRadius: 20,
              backgroundColor: '#7F00FF',
              width: width - 50,
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '700',
                color: 'white',
                textTransform: 'uppercase',
              }}>
              Login
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              padding: 8,
              paddingVertical: 15,
              margin: 8,
              borderRadius: 20,
              borderWidth: 1,
              borderColor: '#7F00FF',
              width: width - 50,
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '700',
                color: '#7F00FF',
                textTransform: 'uppercase',
              }}>
              Sing Up
            </Text>
          </TouchableOpacity>
        </View>

        <View>
          <Text
            style={{
              padding: 8,
              margin: 8,
              color: 'grey',
              fontSize: 13,
              alignSelf: 'center',
            }}>
            Login As{' '}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              width: '100%',
              padding: 8,
              margin: 8,
            }}>
            <View>
              <Image
                style={{height: width / 8.5, width: width / 8.5}}
                source={require('../../assets/google.png')}
              />
            </View>
            <View>
              <Image
                style={{height: width / 8.5, width: width / 8.5}}
                source={require('../../assets/apple.png')}
              />
            </View>
            <View>
              <Image
                style={{height: width / 8.5, width: width / 8.5}}
                source={require('../../assets/facebook.png')}
              />
            </View>
            <View>
              <Image
                style={{height: width / 8.5, width: width / 8.5}}
                source={require('../../assets/twitter.png')}
              />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

{
  /* <Text>Login Screen</Text>
        <Button
          title="Go to Home Screen"
          onPress={() => {
            AsyncStorage.setItem('isLoggedIn', '1').then(res => {
              navigation.navigate('HomeStack', {
                screen: 'Home',
                params: {name: 'Hey, Ashish'},
              });
            });
          }}
        /> */
}
