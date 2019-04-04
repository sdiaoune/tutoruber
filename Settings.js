import React from 'react'
import { AppRegistry, FlatList, StyleSheet, Text, View, ListView, TouchableHighlight } from 'react-native';

//DataSource
var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class Settings extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            dataSource: ds.cloneWithRows(['Update Profile', 'Change Login Credentials', 'Payment Methods'])
        }
    }

    static navigationOptions = {
        title: 'Settings'
    };

    render(){
        const {navigate} = this.props.navigation;
        return(
            <View style={styles.container}>
                <ListView
                dataSource={this.state.dataSource}
                renderRow={(rowData, sectionID, rowID, highlightRow) => <TouchableHighlight style={styles.listrow} onPress={()=> 
                {
                    if(rowID = 1) {
                        navigate('UpdateProfile', {})
                    }
                    if (rowID = 2){
                        navigate('UpdateLogin', {})
                    }

                    // switch(rowID){
                    //     case 1:
                    //     navigate('UpdateProfile', {})
                    //     break;
                    //     case 2:
                    //     navigate('UpdateLogin', {})
                    //     break;
                    // }
                    
                }
                }>
                    <Text style={{fontSize: 20, marginLeft: 8}}>{rowData}</Text>
                    {/* <TouchableOpacity style={styles.btn} onPress={() => {}}>
                        <Text style={{textAlign: 'center', }}>Book</Text>
                    </TouchableOpacity> */}
                    </TouchableHighlight>}
                renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator}
                />}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    separator: {
        flex: 1,
        height: StyleSheet.hairlineWidth,
        backgroundColor: '#8E8E8E',
    },
    btn: {
        height: 40,
        width: '40%',
        backgroundColor: '#DCDCDC',
        margin: 16,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    listrow: {
        marginTop: 8,
        marginBottom: 8
    },
})