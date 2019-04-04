import React from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View, ListView, TouchableOpacity } from 'react-native';
const axios = require('axios');

// var ds = new ListView.DataSource({rowHasChanged: this._rowHasChanged.bind(this) });

var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class List extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {
        dataSource: ds.cloneWithRows(['']),
        };
        
    }

    static navigationOptions = {
        title: 'Nearby Tutors'
        // header: null
      };

    componentDidMount(){
        axios.post('http://10.108.47.73:3000/api/tutors')
        .then( (response) => {
            var array = response;
            // this.setState({dataSource: ds.cloneWithRows(JSON.stringify(response.data))})
            this.setState({dataSource: ds.cloneWithRows(response.data)
            })
        })
        .catch(function (error) {
          console.log(error);
        });
    };

    render(){
        const {navigate} = this.props.navigation;
        return(
            <View style={styles.container}>
            {/* <Text style={{fontSize: 20, marginLeft: 8}}>Nearby tutors</Text> */}
            
            <ListView
                dataSource={this.state.dataSource}
                renderRow={(rowData) => <View style={styles.listrow}>
                    <Text style={{fontSize: 20, marginLeft: 8}}>{rowData.firstname} {rowData.lastname}</Text>
                    <Text style={{marginLeft: 8}}>{rowData.name}</Text>
                    <Text style={{marginLeft: 8}}>{rowData.description}</Text>
                    <Text style={{marginLeft: 8}}>Rating: {}</Text>
                    <TouchableOpacity style={styles.btn} onPress={() => {}}>
                        <Text style={{textAlign: 'center', }}>Book</Text>
                    </TouchableOpacity>
                    </View>}
                renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
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
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    separator: {
        flex: 1,
        height: StyleSheet.hairlineWidth,
        backgroundColor: '#8E8E8E',
    },
    listrow: {
        marginTop: 8,
        marginBottom: 8
    },
    btn: {
        height: 40,
        width: '40%',
        backgroundColor: '#DCDCDC',
        margin: 16,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    }
  })