import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TextInput, TouchableOpacity, Button, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

//Have to install first
import Ripple from 'react-native-material-ripple';

export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'Profile',
  };
  constructor() {
    super()
    this.state = {
       myText: 'My Original Text'
    }
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.navBar}>
          <Image source={require('../assets/TutorUberLogo.png')} style={{width: 40, height: 40}}  />
          <Image source={require('../assets/TutorUberTitle.png')} style={{width: 80, height: 40}}  />
          <View style={styles.rightNav}>
            <Ripple onPress={() => this.props.navigation.toggleDrawer()}>
              <Icon name="menu" size={40} />
            </Ripple>
          </View>
        </View>
        <View style={styles.body}>
          <ImageBackground source={require('../assets/splashLogin.png')} style={{width: '100%', height: '100%'}}>
             {/*Used to move everything to around the center of the page */}
            <View style={{flex:0.05}}></View>
            <View style={styles.bodyCont}>
              <Image source={require('../assets/blank-profile-pic.png')} style={{width: 100, height: 100, borderRadius: 50, marginBottom: 30}} />
              <Text style={styles.bodyText}>Username:</Text>
              <Text style={styles.dynamicText}>   {this.state.myText}</Text>
              <Text style={styles.bodyText}>Email:</Text>
              <Text style={styles.dynamicText}>   {this.state.myText}</Text>
              <Text style={styles.bodyText}>First Name:</Text>
              <Text style={styles.dynamicText}>   {this.state.myText}</Text>
              <Text style={styles.bodyText}>Last Name:</Text>
              <Text style={styles.dynamicText}>   {this.state.myText}</Text>
            </View>
          </ImageBackground>
        </View>
      </SafeAreaView>
    );
  }

  //onPress Handlers for Buttons and Touchable Text
  onPressForgotPass() {
    console.log("Forgot Password");
  }

  onPressLogin() {
    console.log("Login");
  }
}

/* STYLE SHEETS */
const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  //Main Body container
  body: {
    flex:1, //Fills remaining space
    backgroundColor: '#000',
  },
  bodyCont: {
      marginLeft: 40,
      marginRight: 40,
  },
  bodyText: {
      marginBottom: 20,
      color: '#2C2C2C',
      fontSize: 16,
      textDecorationLine: 'underline',
  },
  dynamicText: {
    marginBottom: 35,
    color: '#2C2C2C',
    fontSize: 16,
  }
});