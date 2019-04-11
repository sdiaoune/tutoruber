import React from 'react';
import { LinearGradient } from 'expo';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, TouchableHighlight, Modal, Picker, Image } from 'react-native';

import MapView from 'react-native-maps';

import { Marker } from 'react-native-maps';

export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = { search: 'search', modalVisible: false, modal2Visible: false, markers: [], searchbox: 'Search', allclasses: classes, course: '', modal2name: '', modal2major: '', modal2description: ''};
      }

      static navigationOptions = {
        title: 'Welcome'
      };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
  setModal2Visible(visible, name, major, description) {
    this.setState({modal2Visible: visible, modal2name: name, modal2major: major, modal2description: description});
  }

  performSearch(){
    this.setState({markers: marks})
    this.setModalVisible(!this.state.modalVisible)
  }

  render() {
      const {navigate} = this.props.navigation;
    return (
        <View style={{flex: 1}}>
        {/* Popup Modal */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={{marginTop: 22, flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <View style={{padding: 16, width: 300, height: 'auto', borderRadius: 16, backgroundColor: 'white', shadowOffset:{  width: 2,  height: 4,  },
    shadowColor: '#848484',
    shadowOpacity: 0.2,
    borderRadius: 8}}>
              <Text>Hello World!</Text>
              <Picker
              selectedValue={this.state.course}
              style={{ marginTop: 8, marginBottom: 8 }}
              onValueChange={(itemValue, itemIndex) => this.setState({course: itemValue})}>
              {
                this.state.allclasses.map((item, key)=>{
                return <Picker.Item key={key} label={item.classTitle} value={item.classTitle} />
                })
              }
              {/* <Picker.Item label="Java" value="java" />
              <Picker.Item label="JavaScript" value="js" /> */}
              </Picker>
              <TouchableOpacity style={styles.btn} onPress={()=>{
                this.state.searchbox = this.state.course
                this.performSearch();
              }}>
                <Text>Perform Search</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }} style={styles.btn}>
                <Text>Dismiss</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <Modal animationType="slide"
          transparent={true}
          visible={this.state.modal2Visible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={{marginTop: 22, flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <View style={{padding: 16, width: 300, height: 'auto', borderRadius: 16, backgroundColor: 'white', shadowOffset:{  width: 2,  height: 4 },
    shadowColor: '#848484',
    shadowOpacity: 0.2,
    borderRadius: 8, justifyContent: 'center', alignItems: 'center'}}n>
    <Image
          style={{width: 100, height: 100, borderRadius: 100/2}}
          source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
        />
    <Text style={{fontSize: 18}}>{this.state.modal2name}</Text>
    <Text style={{fontSize: 12}}>{this.state.modal2major}</Text>
    <Text></Text>
    <Text style={{fontSize: 12}}>{this.state.modal2description}</Text>
              <TouchableOpacity
                onPress={() => {
                  this.setModal2Visible(!this.state.modal2Visible);
                }} style={styles.btn2}>
                <Text style={{color: 'white'}}>Book Now</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  this.setModal2Visible(!this.state.modal2Visible);
                  this.props.navigation.navigate('Profile', {name: this.state.modal2name, major: this.state.modal2major, description: this.state.modal2description});
                }} style={styles.btn}>
                <Text style={{}}>Open Profile</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  this.setModal2Visible(!this.state.modal2Visible);
                }} style={styles.btn}>
                <Text>Dismiss</Text>
              </TouchableOpacity>
              
            </View>
          </View>
        </Modal>
        <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 25.7574,
          longitude: -80.3733,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
      >
      {/* Set Markers */}
      {
        this.state.markers.map((mark, key) => 
        <MapView.Marker
          key={key}
          coordinate={mark.latlng}
          onPress={()=>{this.setModal2Visible(!this.state.modal2Visible, mark.name, mark.major, mark.description)}}
        />)
      }
      {/* {
        this.state.markers.map((mark, key) => 
        <MapView.Marker
          key={key}
          coordinate={mark.latlng}
          title={mark.title}
          description={mark.description}
          onPress={()=>{this.setModal2Visible(!this.state.modal2Visible)}}
        />)
      } */}
      </MapView>
      <View style={styles.container} >
        <TouchableOpacity onPress={() => this.setModalVisible(!this.state.modalVisible)} style={styles.btn}>
        <Text style={{color: '#848484'}}>{this.state.searchbox}</Text>
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
        margin: 8,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btn2: {
      height: 40,
      width: '90%',
      backgroundColor: '#FC3953',
      margin: 8,
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

var marks = [
  {
    title: 'First Location',
    description: 'Hi, I tutor Programming II and Programming II',
    name: 'Christopher Fernandez',
    major: 'Computer Science',
    latlng: {
      latitude: 25.7574,
      longitude: -80.3733
    }
  },
  {
    title: 'Second Location',
    description: 'Hi, I tutor Database and Programming I',
    name: 'John Doe',
    major: 'Computer Engineering',
    latlng: {
      latitude: 25.7571,
      longitude: -80.3739
    }
  }
]

const classes = [
  {
    classTitle: 'Programming I',
    classCode: 'COP 2210'
  },
  {
    classTitle: 'Programming II',
    classCode: 'COP 3337'
  },
  {
    classTitle: 'Programming III',
    classCode: 'COP 4338'
  },
  {
    classTitle: 'Database',
    classCode: 'COP 4710'
  }
]