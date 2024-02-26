import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';
import { Platform } from 'react-native';

export const requestNotificationPermission = async () => {
    const authStatus = await messaging().requestPermission();
    const enable = authStatus == messaging.AuthorizationStatus.AUTHORIZED || authStatus == messaging.AuthorizationStatus.PROVISIONAL;
    if (enable) {
        getToken();
    }
}

export const getToken = async () => {
    let fcmToken = await AsyncStorage.getItem('fcmToken');
    if (!fcmToken) {
        try {
            let token : string;
            if (Platform.OS == 'ios') {
                token = await messaging().getAPNSToken();
                if (token) {
                    console.warn(token);
                    await AsyncStorage.setItem('fcmToken', token?.toString());
                }
            } else {
                token = await messaging().getToken();
                if (token) {
                    console.warn(token);
                    await AsyncStorage.setItem('fcmToken', token?.toString());
                }
            }
        } catch (error) {
            console.error(error);
        }
    } else {
        console.warn(token);
    }
}

export const notificationListner = async () => {
    messaging().onNotificationOpenedApp(remoteMessage => {
      console.log(
        'Notification caused app to open from background state:',
        remoteMessage.notification,
      );
    });
  
    messaging().onMessage(async remoteMessage => {
      console.log('on receive notification forground', remoteMessage);
    });
  
    messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage) {
          console.log(
            'Notification caused app to open from quit state:',
            remoteMessage.notification,
          );
        }
      });
  };
  