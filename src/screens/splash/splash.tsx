import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect} from 'react';
import {View, Text} from 'react-native';

const Splash = (props: any) => {
  const {navigation} = props;
  useEffect(async () => {
    const isLoggedIn = await AsyncStorage.getItem('isLoggedIn');
    if (isLoggedIn == '1') {
      navigation.navigate('HomeStack', {screen: 'Home'});
    } else {
      navigation.navigate('LoginStack', {screen: 'Login'});
    }
  }, []);
  return (
    <View>
      <Text></Text>
    </View>
  );
};

export default Splash;
