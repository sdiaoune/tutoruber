import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Modal } from 'react-native';

function buttonPressed(){

};

//Soya, is this still needed? If not, please delete

export default class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.state = { text: 'Placeholder'};
    }
    static navigationOptions = {
        // header: null
    }
    render(){
        return (
            <View style={{flex: 1, backgroundColor: '#FFFAE3'}}>
                <Text>Search Course</Text>
                <TextInput
                style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                onChangeText={(text) => this.setState({text})}
                value={this.state.text}
                />
                {/* Tutor View */}
                <View style={styles.container}>
                    <Text style={{fontSize: 30}}>Lorem Ipsum</Text>
                    <Text style={{fontSize: 20}}>Rating</Text>
                    <TouchableOpacity style={styles.button}>
                        <Text>Book Meeting</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = {
    container: {
        backgroundColor: '#ffffff',
        shadowOffset:{  width: 2,  height: 4 },
        shadowColor: '#848484',
        shadowOpacity: 0.2,
        borderRadius: 8,
        margin: 10
    },
    button: {
        backgroundColor: '#F7567C',
        height: 40,
        margin: 16,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        shadowOffset:{  width: 2,  height: 4 },
        shadowColor: '#848484',
        shadowOpacity: 0.2
    }
}