import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {View, Text, SafeAreaView, Button, Image} from 'react-native';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import {getPersonList} from './api/homeAction';

const Home = (props: any) => {
  const {navigation, route} = props;
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const {Reducer} = useSelector(
    reducer => ({Reducer: reducer.home}),
    shallowEqual,
  );

  const {loading, success, error} = Reducer;

  useEffect(() => {
    // dispatch(getPersonList());
  }, []);

  useEffect(() => {
    if (success) {
      console.log('Success Call Response : ', success?.data);
      if (success?.data?.data?.length > 0) {
        setData(success?.data?.data);
      }
    }
  }, [success]);

  useEffect(() => {
    if (error) {
      console.log('error Call Response : ', error);
    }
  }, [error]);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        {/* <Text>Home Screen</Text> */}
        {/* <Text>{route?.params?.name}</Text> */}
        <Button
          title="Go To Map"
          onPress={() => {
            navigation.navigate('Map');
            // AsyncStorage.setItem('isLoggedIn', '').then(res => {
            //   navigation.navigate('LoginStack', {
            //     screen: 'Login',
            //   });
            // });
          }}
        />
        {data &&
          data?.map((item, index) => (
            <View
              key={'person' + index}
              style={{
                margin: 8,
                marginVertical: 4,
                padding: 8,
                paddingVertical: 12,
                elevation: 2,
                borderRadius: 12,
                backgroundColor: 'white',
                flexDirection: 'row',
              }}>
              <Image
                source={{uri: item?.avatar}}
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 30,
                  marginHorizontal: 8,
                }}
              />
              <View>
                <Text style={{fontSize: 15, fontWeight: '700', color: 'black'}}>
                  {item?.first_name + ' ' + item?.last_name}
                </Text>
                <Text style={{fontSize: 14, fontWeight: '500', color: 'grey'}}>
                  {item?.email}
                </Text>
              </View>
            </View>
          ))}
      </View>
    </SafeAreaView>
  );
};

// {"id":7,"email":"michael.lawson@reqres.in","first_name":"Michael","last_name":"Lawson","avatar":"https://reqres.in/img/faces/7-image.jpg"}

export default Home;
