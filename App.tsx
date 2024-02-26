import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import Home from './src/screens/home/home';
import login from './src/screens/login/login';
import profile from './src/screens/profile/profile';
import HomeStack from './src/navigation/homestack';
import LoginStack from './src/navigation/loginstack';
import Mainstack from './src/navigation/mainstack';
import {
  notificationListner,
  requestNotificationPermission,
} from './src/utils/NotificationManager';

const Stack = createNativeStackNavigator();

const App = () => {
  useEffect(() => {
    requestNotificationPermission();
    notificationListner();
  }, []);

  return (
    <NavigationContainer>
      <Mainstack />
    </NavigationContainer>
  );
};

export default App;
