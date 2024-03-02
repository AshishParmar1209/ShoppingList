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
import {Provider} from 'react-redux';
import {store} from './src/redux/store/store';

const Stack = createNativeStackNavigator();

const App = () => {
  useEffect(() => {
    requestNotificationPermission();
    notificationListner();
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Mainstack />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
