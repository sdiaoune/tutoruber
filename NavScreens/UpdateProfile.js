import React, {Fragment} from 'react';
import { StyleSheet, View, TextInput, Text, Button, TouchableOpacity, Alert, SafeAreaView} from 'react-native';
const axios = require('axios');

const IP_ADDRESS = '10.108.47.73'; //USE THIS TO CHANGE IP ADDRESS FOR ALL URLs

export default class UpdateProfile extends React.Component {
    constructor(props){
        super(props)
        this.state = {firstname: '', lastname: '', username: ''}
    }
    static navigationOptions = {
        title: 'UpdateProfile',
    };

    makechanges(){

        axios({
            method: 'post',
            url: 'http://' + IP_ADDRESS + ':3000/api/updateuser',
            data: {
                firstname: this.state.firstname,
                lastname: this.state.lastname,
                username: this.state.username,
                user_id: global.userID._currentValue
            }
        })
        .then( (res) => {
            Alert.alert(
                'Profile Changes Made',
                'Success',
                [
                  {text: 'OK', onPress: () => console.log('OK Pressed')},
                ],
                { cancelable: false }
              );
              console.log(this.state.user_id)
        })
        .catch(function (error) {
          Alert.alert(
            'Error',
            'No changes made',
            [
              {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            { cancelable: false }
          );
          console.log(error)
        });
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
          this.setState({firstname: res.data.firstname, lastname: res.data.lastname, username: res.data.username});
        })
        .catch(function(res){
          console.log('error')
        });
      }

    componentWillMount() {
        this.displayUser()
    }

    render(){
        return(
            <SafeAreaView style={{flex: 1}}>
                <Text style={styles.text}>First Name</Text>
                <TextInput style={styles.textbox} onChangeText={(text) => this.setState({firstname: text})} value={this.state.firstname}></TextInput>
                <Text style={styles.text}>Last Name</Text>
                <TextInput style={styles.textbox} onChangeText={(text) => this.setState({lastname: text})} value={this.state.lastname}></TextInput>
                <Text style={styles.text}>Username</Text>
                <TextInput style={styles.textbox} onChangeText={(text) => this.setState({username: text})} value={this.state.username}></TextInput>
                <TouchableOpacity style={styles.btn} onPress={()=>{this.makechanges()}}><Text>Submit Changes</Text></TouchableOpacity>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    textbox: {
        borderWidth: 1,
        borderColor: 'black',
        margin: 8,
        padding: 8,
        borderRadius: 8
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
    text: {
        margin: 8
    }
});