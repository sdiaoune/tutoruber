import React from 'react';
import { LinearGradient } from 'expo';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, TouchableHighlight, Modal, Picker, Image, ListView, SafeAreaView } from 'react-native';
import Ripple from 'react-native-material-ripple';

var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class ProfileReviewScreen extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            name: this.props.navigation.state.params.name,
            major: this.props.navigation.state.params.major,
            description: this.props.navigation.state.params.description,
            dataSource: ds.cloneWithRows(['Review 1', 'Review 2', 'Review 3'])
        }
    }

    static navigationOptions = {
        title: 'ProfileReview'
      };
    
    render(){
        const {navigate} = this.props;
        // const name = navigate.getParam('name','name');
        // const major = navigate.getParam('major','major');
        // const description = navigate.getParam('description','description');
        return(
            <SafeAreaView style={{flex: 1, alignItems: 'center'}}>
                <Image
                style={{width: 100, height: 100, borderRadius: 100/2}}
                source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
                />
                <Text style={{fontSize: 18}}>{this.state.name}</Text>
                <Text style={{fontSize: 18}}>{this.state.major}</Text>
                <Text style={{fontSize: 18}}></Text>
                <Text>{this.state.description}</Text>
                {/* <View>
                <ListView dataSource={this.state.dataSource}
                renderRow={(rowData) => <Text style={{color: 'red'}}>{rowData}</Text>}
                renderSeparator={(sectionID, rowID)=> <View key={rowID} style={styles.separator}/> }/>
                </View> */}
                <View style={{width: '100%'}}>
            <ListView 
                dataSource={this.state.dataSource}
                renderRow={(rowData, sectionID, rowID, highlightRow) => 
                    <Ripple style={styles.listrow} onPress={()=> 
                {
                    // if(rowID == 0) {
                    //     this.props.navigation.navigate('UpdateProfile', {})
                    // }
                    // if (rowID == 1){
                    //   this.props.navigation.navigate('UpdateLogin', {})
                    // }
                }
                }>
                    <View style={{padding: 20}}>
                    <Text style={{fontSize: 20, marginLeft: 8, color: '#0C6CD4'}}>Soya Diaoune</Text>
                    <Text style={{fontSize: 12, marginLeft: 8}}>4.3/5 stars</Text>
                    <Text style={{fontSize: 16, marginLeft: 8, color: '#444444'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                    </View>
                    </Ripple>
                    
                    }
                renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator}
                />}
                />
            </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    separator: {
        flex: 1,
        height: StyleSheet.hairlineWidth,
        backgroundColor: '#8E8E8E',
    }
})