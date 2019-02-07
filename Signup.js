import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Modal } from 'react-native';
import { LinearGradient } from 'expo';
import { black } from 'ansi-colors';


export default class Signup extends React.Component {

    constructor(props) {
      super(props);
      this.state = { 
        username: 'Username',
        password: 'Password',
        firstname: 'First Name',
        lastname: 'Last Name',
        email: 'Email'
     };
    }

  render() {
    const {navigate} = this.props.navigation;
    return (
      // '['#4c669f', '#3b5998', '#192f6a']'
      <View style={styles.container}>
      <LinearGradient
          colors={['#8E2DE2', '#4A00E0']}
          style={{ flex: 1, alignItems: "center",  }}>
          {/* Main Title */}
          <Text style={styles.maintext}>
          {"\n\n\n"}Tutors</Text>
          {/* Firstname input */}
          <TextInput
          style={{height: 40, width: 200, borderColor: 'white', borderWidth: 1, color: 'white', borderRadius: 8, margin: 10, padding: 10}}
          onChangeText={(firstname) => this.setState({firstname})}
          value={this.state.firstname}
          />
          {/* Lastname input */}
          <TextInput
          style={{height: 40, width: 200, borderColor: 'white', borderWidth: 1, color: 'white', borderRadius: 8, margin: 10, padding: 10}}
          onChangeText={(lastname) => this.setState({lastname})}
          value={this.state.lastname}
          />
          {/* Email input */}
          <TextInput
          style={{height: 40, width: 200, borderColor: 'white', borderWidth: 1, color: 'white', borderRadius: 8, margin: 10, padding: 10}}
          onChangeText={(email) => this.setState({email})}
          value={this.state.email}
          />
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
<Button title="Already have an account? Login" color="#ffffff" accessibilityLabel="Learn more about this purple button" onPress={onPressLearnMore}/>
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

