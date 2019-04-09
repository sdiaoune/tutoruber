import React from 'react';
import { StyleSheet, View, TextInput, Text, Button, TouchableOpacity, Alert} from 'react-native';
const axios = require('axios');

export default class UpdateLogin extends React.Component {
    constructor(props){
        super(props)
        this.state = {email: 'johndoe@email.com', password: 'jdoepass123'}
    }

    makechanges(){
        axios({
            method: 'post',
            url: 'http://10.108.47.73:3000/api/updatelogin',
            data: {
                email: this.state.email,
                password: this.state.password,
                user_id: 1
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
            <View style={styles.container}>
                <Text style={styles.text}>Email</Text>
                <TextInput style={styles.textbox} onChangeText={(text) => this.setState({email: text})} value={this.state.email}></TextInput>
                <Text style={styles.text}>Password</Text>
                <TextInput style={styles.textbox} onChangeText={(text) => this.setState({password: text})} value={this.state.password}></TextInput>
                <TouchableOpacity style={styles.btn} onPress={()=>{this.makechanges()}}><Text>Submit Changes</Text></TouchableOpacity>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    textbox: {
        borderWidth: 1,
        borderColor: 'black',
        margin: 8,
        padding: 8,
        borderRadius: 8,
        width: '90%'
    },
    btn: {
        height: 40,
        width: '90%',
        backgroundColor: '#DCDCDC',
        margin: 8,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        margin: 8
    }
});