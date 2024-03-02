import React, {useState} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import MapView, {Marker, Polyline} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const Map = () => {
  const [cords, setCords] = useState([
    {
      latitude: 21.133620517301647,
      longitude: 72.70971435166206,
    },
    {
      latitude: 21.12481388697105,
      longitude: 72.7419866914841,
    },
  ]);
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <MapView
          provider="google"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
          initialRegion={{
            latitude: 21.121707748383923,
            longitude: 72.74211364602,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          <MapViewDirections
            origin={cords[0]}
            destination={cords[1]}
            apikey="AIzaSyBOQ2azajQupxYoxSx-PPT2xYAzVcObRwg" // insert your API Key her
            strokeWidth={4}
            strokeColor="#111111"
          />
          <Marker draggable={false} coordinate={cords[0]} />
          <Marker draggable={false} coordinate={cords[1]} />
          {/* <Polyline
            coordinates={cords}
            strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
            strokeColors={['#7F0000']}
            strokeWidth={6}
          /> */}
        </MapView>
      </View>
    </SafeAreaView>
  );
};

export default Map;
