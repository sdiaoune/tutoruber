import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

//Have to install first
import Ripple from 'react-native-material-ripple';

export default class HomeLoginScreen extends React.Component {  
  static navigationOptions = {
    title: 'HomeLogin',
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        {/* Navigation Bar. No need to change. All style changes in style sheets */}
        <View style={styles.navBar}>
          <Image source={require('../assets/TutorUberLogo.png')} style={{width: 40, height: 40}}  />
          <Image source={require('../assets/TutorUberTitle.png')} style={{width: 80, height: 40}}  />
          <View style={styles.rightNav}></View>
        </View>

        {/* Beginning of Body */}
        <View style={styles.body}>
          <ImageBackground source={require('../assets/splashLogin.png')} style={{width: '100%', height: '100%'}}>
             {/*Used to move everything to around the center of the page */}
            <View style={{flex:0.4}}></View>
            <View>
              <TextInput style = {styles.bodyTextInput} placeholder="Username" placeholderTextColor='gray' maxLength={35} autoCapitalize = 'none' />
              <TextInput style = {styles.bodyTextInput} placeholder="Password" placeholderTextColor='gray' maxLength={35} autoCapitalize = 'none' secureTextEntry ={true} />
              <TouchableOpacity onPress={this.onPressForgotPass}>
                <Text style = {styles.bodyText}>Forgot Password?</Text>
              </TouchableOpacity>
              <View style={styles.bodyButtonHolder}>
                <Ripple onPress={() => this.props.navigation.navigate('HomeMap')}>
                  <Image source={require('../assets/LoginButton.png')} style={{width:90, height: 36}} />
                </Ripple>
                <Ripple onPress={() => this.props.navigation.navigate('Register')}>
                  <Image source={require('../assets/RegisterButton.png')} style={{width:108, height: 36}} />
                </Ripple>
              </View>
            </View>
          </ImageBackground>
        </View>
      </SafeAreaView>
    );
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
    width: 40,
  },
  //Main Body container
  body: {
    flex:1, //Fills remaining space
    backgroundColor: '#000',
  },
  //Used to style the TextInput components
  bodyTextInput: {
    marginTop: 10,
    marginLeft: 65,
    marginRight: 65,
    height: 45,
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: 'white',
    elevation: 7,
    paddingHorizontal: 7,
  },
  //Used to style the 'Forgot Password' Clickable Text Element
  bodyText: {
    marginTop: 10,
    marginLeft: 65,
    marginRight: 65,
    color: 'blue',
    textDecorationLine: 'underline',
  },
  //Used to organize the buttons in one group
  bodyButtonHolder: {
    marginTop: 10,
    marginLeft: 65,
    marginRight: 65,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});