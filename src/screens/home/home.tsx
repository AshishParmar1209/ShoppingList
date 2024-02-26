import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {View, Text, SafeAreaView, Button} from 'react-native';

const Home = (props: any) => {
  const {navigation, route} = props;
  return (
    <SafeAreaView style={{flex: 1}}>
      <View>
        <Text>Home Screen</Text>
        <Text>{route?.params?.name}</Text>
        <Button
          title="Logout"
          onPress={() => {
            AsyncStorage.setItem('isLoggedIn', '').then(res => {
              navigation.navigate('LoginStack', {
                screen: 'Login',
              });
            });
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
