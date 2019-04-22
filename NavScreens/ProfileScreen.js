import React, {Fragment} from 'react';
import { ListView, StyleSheet, Text, View, Image, ImageBackground, TextInput, TouchableOpacity, Button, SafeAreaView, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
const axios = require('axios');

//Have to install first
import Ripple from 'react-native-material-ripple';

const IP_ADDRESS = '10.0.0.71'; //USE THIS TO CHANGE IP ADDRESS FOR ALL URLs

export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'Profile',
  };
  constructor() {
    super()
    this.state = {
       username: 'username',
       email: 'email',
       firstname: 'firstname',
       lastname: 'lastname',
       major: 'major',
       list: [],
    }
    this.dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  }

  componentDidMount(){
    this.displayUser()
    this.displaySessions()
  }

  displayUser(){
    console.log('running displayUser()')
    axios({
      method: 'post',
      url: 'http://' + IP_ADDRESS + ':3000/api/singleuser',
      data: {
        user_id: global.userID._currentValue
      }
    })
    .then((res) => {
      console.log(res.data.firstname)
      this.setState({firstname: res.data.firstname,lastname: res.data.lastname,username: res.data.username,email: res.data.email, major: res.data.name,});
    })
    .catch(function(res){
      console.log('error')
    });
  }
  
  //Display past sessions
  displaySessions(){
    console.log('checking reviews')
        axios({
            method: "post",
            url: "http://" + IP_ADDRESS + ":3000/api/getreviews",
            data: {
                tutor_id: 1
            }
        })
        .then((res) => {
            this.setState({list: res.data})
            console.log(res.data)
        })
        .catch((res)=>{})
  }
  
  render() {
    return (
      <Fragment>
      <SafeAreaView style={{flex: 0, backgroundColor: '#0066BF'}} />
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
             <Image
                style={{width: 100, height: 100, borderRadius: 100/2, marginLeft: 25, marginTop: 25}}
                source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
                />
            <View style={{flex:0.05}}></View>
            <View style={styles.bodyCont}>
              <Text style={styles.profileText}>{'Name: ' + this.state.firstname + ' ' + this.state.lastname}</Text>
              <Text style={styles.profileText}>{'Username: ' + this.state.username}</Text>
              <Text style={styles.profileText}>{'Email: ' + this.state.email}</Text>
              <Text style={styles.profileText}>{'Major: ' + this.state.major}</Text>
              <Text style={styles.profileText}></Text>
              <ScrollView style={{width: '100%'}}>
                <ListView
                 enableEmptySections={true}
                 dataSource={this.dataSource.cloneWithRows(this.state.list)}
                 renderRow={(rowData, sectionID, rowID, highlightRow) => 
                   <Ripple style={styles.listrow} onPress={()=> 
                      {
                        this.props.navigation.navigate('Review', {row_data: rowData})
                      }}>
                      <View style={{padding: 20}}>
                        <Text style={{fontSize: 20, marginLeft: 8, color: '#0C6CD4'}}>{rowData.user_firstname + ' ' + rowData.user_lastname}</Text>
                        <Text style={{fontSize: 12, marginLeft: 8}}>{rowData.userratingtutor}/5 stars</Text>
                        <Text style={{fontSize: 16, marginLeft: 8, color: '#444444'}}>{rowData.user_comment}</Text>
                      </View>
                  </Ripple>
                 }
                 renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator}/>}
               />
              </ScrollView>
            </View>
          </ImageBackground>
        </View>
      </SafeAreaView>
      </Fragment>
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
  },
  //Main Body container
  body: {
    flex:1, //Fills remaining space
    backgroundColor: '#000',
    alignItems: 'center'
  },
  bodyCont: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: 'rgba(0,121,137,0.12)'
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
  },
  profileText: {
    fontSize: 18,
    marginLeft: 10,
    marginTop: 10
  }
});