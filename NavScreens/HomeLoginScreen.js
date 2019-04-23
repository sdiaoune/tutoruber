import React, {Fragment} from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
const axios = require('axios');
import Ripple from 'react-native-material-ripple';
import { StackActions, NavigationActions } from 'react-navigation';

const IP_ADDRESS = '10.108.47.73'; //USE THIS TO CHANGE IP ADDRESS FOR ALL URLs

export default class HomeLoginScreen extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      username: 'username',
      password: 'password'
    }
  }  
  static navigationOptions = {
    title: 'HomeLogin',
  };

  //Makes it so the HomeLoginScreen is removed from the stack as we transition after logging in
  resetStack = () => {
    return this.props
        .navigation
        .dispatch(StackActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({ routeName: 'HomeMap'})
          ]
        }));
  }

  verifyUser(){
    axios({
      method: 'post',
      url: 'http://' + IP_ADDRESS + ':3000/api/login',
      data: {
        username: this.state.username,
        password: this.state.password
      }
    })
    .then((res)=>{
      if(res.data.username == this.state.username){
        console.log(res.data.user_id)
        console.log('works')
        global.userID = React.createContext(res.data.user_id)
        console.log('global user id is: ' + global.userID._currentValue)
        this.resetStack()
      }else{
        console.log('not valid')
      }
    })
    .catch((res)=>{
      console.log(res)
      console.log(this.state.username)
      console.log(this.state.password)
    })
  }

  render() {
    return (
      <Fragment>
      <SafeAreaView style={{flex: 0, backgroundColor: '#0066BF'}} />
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
              <TextInput style = {styles.bodyTextInput} onChangeText={(text)=>this.setState({username: text})} placeholder="Username" placeholderTextColor='gray' maxLength={35} autoCapitalize = 'none' />
              <TextInput style = {styles.bodyTextInput} onChangeText={(text)=>this.setState({password: text})} placeholder="Password" placeholderTextColor='gray' maxLength={35} autoCapitalize = 'none' secureTextEntry ={true} />
              <TouchableOpacity onPress={this.onPressForgotPass}>
                <Text style = {styles.bodyText}>Forgot Password?</Text>
              </TouchableOpacity>
              <View style={styles.bodyButtonHolder}>
                <Ripple onPress={() => this.verifyUser()}>
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
      </Fragment>
    );
  }
}

/* STYLE SHEETS */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a2caff'
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