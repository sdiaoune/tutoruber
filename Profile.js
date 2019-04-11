import React from 'react';
import { LinearGradient } from 'expo';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, TouchableHighlight, Modal, Picker, Image } from 'react-native';

export default class Profile extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: this.props.navigation.state.params.name,
            major: this.props.navigation.state.params.major,
            description: this.props.navigation.state.params.description
        }
    }
    
    render(){
        const {navigate} = this.props;
        // const name = navigate.getParam('name','name');
        // const major = navigate.getParam('major','major');
        // const description = navigate.getParam('description','description');
        return(
            <View style={{flex: 1, alignItems: 'center'}}>
                <Image
                style={{width: 100, height: 100, borderRadius: 100/2}}
                source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
                />
                <Text style={{fontSize: 18}}>{this.state.name}</Text>
                <Text style={{fontSize: 18}}>{this.state.major}</Text>
                <Text style={{fontSize: 18}}></Text>
                <Text>{this.state.description}</Text>
            </View>
        )
    }
}