import React, {Fragment} from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, Modal, Picker, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
const axios = require('axios');

//Socket for pinging
import SocketIOClient from 'socket.io-client';
//ignore socket warning (necessary for react-native)
console.ignoredYellowBox = ['Remote debugger'];
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings([
    'Unrecognized WebSocket connection option(s) `agent`, `perMessageDeflate`, `pfx`, `key`, `passphrase`, `cert`, `ca`, `ciphers`, `rejectUnauthorized`. Did you mean to put these under `headers`?'
]);


//Have to install first
import Ripple from 'react-native-material-ripple';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';

export default class HomeMapScreen extends React.Component {

    constructor(props) {
        super(props);
        this.socket = SocketIOClient('http://100.64.2.194:4000');
        this.socket.on('chat message', (message) => {
          console.log(message);
          this.setModal3Visible(!this.state.modal3Visible);
        } );
        this.state = { search: 'search', modalVisible: false, modal2Visible: false, modal3Visible: false, markers: [], searchbox: 'Search', allclasses: [], course: '', modal2name: '', modal2major: '', modal2description: '', };
      }

      static navigationOptions = {
        title: 'HomeMap',
        drawerLockMode: 'locked-open',
      };
    
      //Created Functions
      setModalVisible(visible) {
        this.setState({modalVisible: visible});
      }
      setModal2Visible(visible, name, major, description) {
        this.setState({modal2Visible: visible, modal2name: name, modal2major: major, modal2description: description});
      }
      setModal3Visible(visible) {
        this.setState({modal3Visible: visible});
      }
    
      performSearch(){
        this.setState({markers: marks})
        this.setModalVisible(!this.state.modalVisible)
      }

      saveMajorsToList(){
        axios({
          method: 'post',
          url: 'http://100.64.2.194:3000/api/majors',
          data: {
  
          }
        })
        .then((res) => {
          this.setState({allclasses: res.data});
        })
        .catch((res) => {})
      }
  
      componentDidMount() {
        this.saveMajorsToList()
      }

  render() {
    return (
      <Fragment>
      <SafeAreaView style={{flex: 0, backgroundColor: '#0066BF'}} />
        <SafeAreaView style={{flex: 1, backgroundColor: '#a2caff'}}>
          {/* Navigation Bar. No need to change. All style changes in style sheets */}
          <View style={styles.navBar}>
            <Image source={require('../assets/TutorUberLogo.png')} style={{width: 40, height: 40}}  />
            <Image source={require('../assets/TutorUberTitle.png')} style={{width: 80, height: 40}}  />
            <View style={styles.rightNav}>
              <Ripple onPress={() => this.props.navigation.toggleDrawer()}>
                <Icon name="menu" size={40} />
              </Ripple>
            </View>
          </View>

          {/* Beginning of Body */}
          {/* Popup Modal For Majors */}
          <Modal
            animationType="slide"
            transparent={true}
            visible={this.state.modalVisible}
            onRequestClose={() => {
             Alert.alert('Modal has been closed.');
            }}>

            {/*View For Modal */}
            <View style={styles.modalStyle}>
              <View style={styles.modalInner}>
                {/* Picker For Majors */}
                <Picker
                  selectedValue={this.state.course} //Currently selected value
                  style={{ marginTop: 8, marginBottom: 8 }}
                  onValueChange={(itemValue, itemIndex) => this.setState({course: itemValue})}>
                  {
                    this.state.allclasses.map((item, key)=>{
                    return <Picker.Item key={key} label={item.name} value={item.name} />
                    })
                  }
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

          {/* Popup Modal For Profiles */}
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
                  this.props.navigation.navigate('ProfileReview', {name: this.state.modal2name, major: this.state.modal2major, description: this.state.modal2description});
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

      {/* Popup Modal For Profiles */}
      <Modal animationType="slide"
      transparent={true}
      visible={this.state.modal3Visible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
      }}>
      <View style={{marginTop: 22, flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <View style={{padding: 16, width: 300, height: 'auto', borderRadius: 16, backgroundColor: 'white', shadowOffset:{  width: 2,  height: 4 },
    shadowColor: '#848484',
    shadowOpacity: 0.2,
    borderRadius: 8, justifyContent: 'center', alignItems: 'center'}}n>

    <Text style={{fontSize: 18}}>'Someone' would like to send you a request</Text>
    <TouchableOpacity
    onPress={() => {
      this.setModal3Visible(!this.state.modal3Visible);
    }} style={styles.btn2}>
      <Text style={{color: 'white'}}>Confirm</Text>
    </TouchableOpacity>
    <TouchableOpacity
    onPress={() => {
      this.setModal3Visible(!this.state.modal3Visible);
    }} style={styles.btn}>
      <Text>Deny</Text>
    </TouchableOpacity>
            </View>
          </View>
        </Modal>
          
        {/* Search Bar at top of Map */}
      <View style={styles.container} >
        <TouchableOpacity onPress={() => this.setModalVisible(!this.state.modalVisible)} style={styles.btn}>
        <Text style={{color: '#848484'}}>{this.state.searchbox}</Text>
        </TouchableOpacity>
      </View>

        {/* Map For Displaying Tutors and User Location */}
        <MapView
        style={{ flex: 1 }}
        initialRegion={{ //Starting region centered on FIU.
          latitude: 25.7574,
          longitude: -80.3733,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
      >

      <Marker //Marker for User's location
        coordinate={marker.latlng}
        title={marker.title}
        description={marker.description} >
        <View style={styles.mycircle}>
          <Text style={styles.pinText}>M</Text>
        </View>
        </Marker>
      
      {/* Set Markers */}
      {
        this.state.markers.map((mark, key) => 
        <MapView.Marker
          key={key}
          coordinate={mark.latlng}
          onPress={()=>{this.setModal2Visible(!this.state.modal2Visible, mark.name, mark.major, mark.description)}}
        >
        <View style={styles.circle}>
          <Text style={styles.pinText}>{key + 1}</Text>
        </View>
        </MapView.Marker>)
      }
      </MapView>
      </SafeAreaView>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container : {
  marginTop: 5,
  height: 60,
  backgroundColor: '#ffffff',
  alignItems: 'center',
  shadowOffset:{  width: 2,  height: 4,  },
  shadowColor: '#848484',
  shadowOpacity: 0.2,
  borderRadius: 8,
  },
  //Bar at top with Menu Icon
  navBar: {
    height: 55,
    backgroundColor: '#0066BF',
    elevation: 5,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  //Used to force Menu Icon to right
  rightNav: {
    flexDirection: 'row', //Makes everything organize in rows rather than columns
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
  },
    modalStyle: {
      marginTop: 22,
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    },
    modalInner: {
      padding: 16,
      width: 300,
      height: 'auto',
      borderRadius: 16,
      backgroundColor: 'white',
      shadowOffset:{  width: 2,  height: 4,  },
      shadowColor: '#848484',
      shadowOpacity: 0.2,
      borderRadius: 8
    },
    circle: {
      width: 30,
      height: 30,
      borderRadius: 30 / 2,
      backgroundColor: 'red',
    },
    mycircle: {
      width: 30,
      height: 30,
      borderRadius: 30 / 2,
      backgroundColor: 'blue',
    },
    pinText: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
      fontSize: 20,
      marginBottom: 10,
    }
})

const marker = {
  title: 'Your Location',
  description: 'FIU',
  latlng: {
      latitude: 25.7574,
      longitude: -80.3743
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