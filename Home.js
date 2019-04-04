import React from 'react';
import { LinearGradient } from 'expo';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Modal } from 'react-native';

import MapView from 'react-native-maps';

import { Marker } from 'react-native-maps';

export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = { search: 'search',  };
      }

      static navigationOptions = {
        title: 'Welcome'
        // header: null
      };


  render() {
      const {navigate} = this.props.navigation;
    return (
        <View style={{flex: 1}}>
        <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 25.7574,
          longitude: -80.3733,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
      >
      <Marker
      coordinate={marker.latlng}
      title={marker.title}
      description={marker.description} />
      </MapView>
      <View style={styles.container} >
        <TouchableOpacity onPress={() => navigate('Settings', {})} style={styles.btn}>
        <Text style={{color: '#848484'}}>Go to list...</Text>
        </TouchableOpacity>
      </View>
      {/* <View style={styles.container} >
        <TouchableOpacity onPress={() => navigate('Search', {})} style={styles.btn}>
        <Text style={{color: '#848484'}}>Search for a course...</Text>
        </TouchableOpacity>
      </View> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container : {
    position: 'absolute',
    top: 10,
    left: 10,
    right: 10,
    zIndex: 10,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    shadowOffset:{  width: 2,  height: 4,  },
    shadowColor: '#848484',
    shadowOpacity: 0.2,
    borderRadius: 8,
    },
    btn: {
        height: 40,
        width: '90%',
        backgroundColor: '#DCDCDC',
        margin: 16,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

const marker = {
    title: 'Your Location',
    description: 'FIU',
    latlng: {
        latitude: 25.7574,
        longitude: -80.3733
    }
}