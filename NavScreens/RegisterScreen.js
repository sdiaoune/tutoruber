import React, {Fragment} from 'react';
import { Animated, Keyboard, UIManager, Dimensions,
          StyleSheet, Text, View, Image, ImageBackground,
          TextInput, TouchableOpacity, Button, Picker, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

//Have to install first
import Ripple from 'react-native-material-ripple';
const axios = require('axios');

export default class RegisterScreen extends React.Component {
    static navigationOptions = {
        title: 'Register',
    };

    constructor() {
      super()
      this.state = {
         username: '',
         password: '',
         email: '',
         firstname: '',
         lastname: '',
         major: 'none',
         majorList: []
      }
    }

    saveMajorsToList(){
      axios({
        method: 'post',
        url: 'http://10.108.47.73:3000/api/majors',
        data: {

        }
      })
      .then((res) => {
        this.setState({majorList: res.data});
      })
      .catch((res) => {})
    }

    componentDidMount() {
      this.saveMajorsToList()
    }

    registerUser(){
      axios({
        method: 'post',
        url: 'http://10.108.47.73:3000/api/createuser',
        data: {
          firstname: this.state.firstname,
          lastname: this.state.lastname,
          username: this.state.username,
          email: this.state.email,
          password: this.state.password,
          major_id: this.state.major
        }
      })
      .then((res)=>{
        console.log('registered')
        console.log(this.state.firstname + ' ' + this.state.lastname + ' ' + this.state.username + ' ' + this.state.email + ' ' + this.state.password + ' ' + this.state.major + ' ')
        this.props.navigation.goBack();
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
        <View style={styles.navBar}>
          <Ripple onPress={() => this.props.navigation.goBack()}>
            <View style={styles.navLeft}>
              <Icon name="ios-arrow-back" size={40} />
              <Image source={require('../assets/TutorUberLogo.png')} style={{width: 40, height: 40}}  />
            </View>
          </Ripple>
          <Image source={require('../assets/TutorUberTitle.png')} style={{width: 80, height: 40}}  />
          <View style={styles.rightNav}>
          </View>
        </View>
        <View style={styles.body}>
        <ImageBackground source={require('../assets/splashLogin.png')} style={{width: '100%', height: '100%'}}>
             {/*Used to move everything to around the center of the page */}
            <View style={{flex:0.4}}></View>
            <View>
              <TextInput style = {styles.bodyTextInput} onChangeText={(text)=>this.setState({username: text})} placeholder="Username" placeholderTextColor='gray' maxLength={35} autoCapitalize = 'none' />
              <TextInput style = {styles.bodyTextInput} onChangeText={(text)=>this.setState({password: text})} placeholder="Password" placeholderTextColor='gray' maxLength={35} autoCapitalize = 'none' secureTextEntry={true} />
              <TextInput style = {styles.bodyTextInput} onChangeText={(text)=>this.setState({firstname: text})} placeholder="First Name" placeholderTextColor='gray' maxLength={35} autoCapitalize = 'words' />
              <TextInput style = {styles.bodyTextInput} onChangeText={(text)=>this.setState({lastname: text})} placeholder="Last Name" placeholderTextColor='gray' maxLength={35} autoCapitalize = 'words' />
              <TextInput style = {styles.bodyTextInput} onChangeText={(text)=>this.setState({email: text})} placeholder="Email" placeholderTextColor='gray' maxLength={35} autoCapitalize = 'none' keyboardType = 'email-address' />
              <View>
                <Picker
                  selectedValue={this.state.major}
                  style={{marginLeft: 65, marginRight: 65, paddingHorizontal: 7}}
                  onValueChange={(itemValue, itemIndex) => this.setState({major: itemIndex})}
                >
                  <Picker.Item label="Choose Major" value="none" />
                  {
                    this.state.majorList.map((s, i) => {
                      return <Picker.Item key={i} value={s.name} label={s.name} />
                    })
                  }
                </Picker>
                <View style={styles.bodyButtonHolder}>
                  <Ripple onPress={() => this.registerUser()}>
                   <Image source={require('../assets/RegisterButton.png')} style={{width:108, height: 36}} />
                  </Ripple>
                </View>
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
  navLeft: {
    flexDirection: 'row',
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
  //Used to organize the buttons in one group
  bodyButtonHolder: {
    marginTop: 10,
    marginLeft: 65,
    marginRight: 65,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});