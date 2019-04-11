import React from 'react';
import { StyleSheet, View, TextInput, Text, Button, TouchableOpacity, Alert, SafeAreaView} from 'react-native';
const axios = require('axios');

export default class UpdateLogin extends React.Component {
    constructor(props){
        super(props)
        this.state = {email: 'John', password: 'Doe'}
    }
    static navigationOptions = {
        title: 'UpdateLogin',
    };

    makechanges(){
        axios({
            method: 'post',
            url: 'http://10.108.229.254:3000/api/updatelogin',
            data: {
                email: this.state.email,
                password: this.state.password,
                user_id: 2
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
              )
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    render(){
        return(
            <SafeAreaView style={{flex: 1}}>
                <Text style={styles.text}>Email</Text>
                <TextInput style={styles.textbox} onChangeText={(text) => this.setState({email: text})} value={this.state.firstname}></TextInput>
                <Text style={styles.text}>Password</Text>
                <TextInput style={styles.textbox} onChangeText={(text) => this.setState({password: text})} value={this.state.lastname}></TextInput>
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