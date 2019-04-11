import React from 'react';
import { LinearGradient } from 'expo';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, TouchableHighlight, Modal, Picker, Image, ListView, SafeAreaView } from 'react-native';
import Ripple from 'react-native-material-ripple';

export default class ReviewScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    static navigationOptions = {
        title: 'ReviewScreen'
    };

    render(){
        return(
            <SafeAreaView style={{flex: 1}}>
                <View style={{padding: 20}}>
                    <Text style={{fontSize: 20, marginLeft: 8, color: '#0C6CD4'}}>Soya Diaoune</Text>
                    <Text style={{fontSize: 12, marginLeft: 8}}>4.3/5 stars</Text>
                    <Text style={{fontSize: 16, marginLeft: 8, color: '#444444'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                </View>
            </SafeAreaView>
        )
    }
}