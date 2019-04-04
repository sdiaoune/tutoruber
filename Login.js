import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Modal } from 'react-native';
import { LinearGradient } from 'expo';
import { black } from 'ansi-colors';

//import axios
const axios = require('axios');


export default class Login extends React.Component {

    constructor(props) {
      super(props);
      this.state = { username: 'Username', password: 'Password' };
    }



  render() {
    const {navigate} = this.props.navigation;
    console.log('rendering')
    return (
      // '['#4c669f', '#3b5998', '#192f6a']'
      <View style={styles.container}>
      <LinearGradient
          colors={['#8A2387', '#E94057', '#F27121']}
          style={{ flex: 1, alignItems: "center",  }}>
          {/* Main Title */}
          <Text style={styles.maintext}>
          {"\n\n\n"}Tutors</Text>
          {/* Username input */}
          <TextInput
          style={{height: 40, width: 200, borderColor: 'white', borderWidth: 1, color: 'white', borderRadius: 8, margin: 10, padding: 10}}
          onChangeText={(username) => this.setState({username})}
          value={this.state.username}
          />
          {/* Password Input */}
          <TextInput
          style={{height: 40, width: 200, borderColor: 'white', borderWidth: 1, color: 'white', borderRadius: 8, margin: 10, padding: 10}}
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
        />

      <TouchableOpacity onPress={this._onPressButton} style={styles.btn}>
        <Text color="white">Signin</Text>
      </TouchableOpacity>

{/* <Text>text</Text> */}

{/* Signup */}
<Button title="Don't have an account? Signup" color="#ffffff" accessibilityLabel="Learn more about this purple button" onPress={onPressLearnMore}/>
      </LinearGradient>

      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center'
  },
  maintext: {
    color: '#ffffff',
    fontSize: 40,
    fontWeight: 'bold'
  },
  btn: {
    height: 40,
    width: 200,
    borderColor: '#ffffff',
    borderWidth: 1,
    color: '#ffffff',
    borderRadius: 8,
    margin: 10,
    padding: 10,
    backgroundColor: "#ffffff",
    alignItems: 'center'
  },
  
});

const onPressLearnMore = () => false;

const onPress = () => {
  this.setState({
    // count: this.state.count+1
  })
}

