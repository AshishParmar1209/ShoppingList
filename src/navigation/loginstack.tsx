import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {View, Text} from 'react-native';
import login from '../screens/login/login';
import SingUp from '../screens/singup/singup';

const Stack = createNativeStackNavigator();
const LoginStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={login} />
      <Stack.Screen name="SignUp" component={SingUp} />
    </Stack.Navigator>
  );
};

export default LoginStack;
