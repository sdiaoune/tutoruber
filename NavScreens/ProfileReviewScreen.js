import React, {Fragment} from 'react';
import { StyleSheet, Text, View, ScrollView, Image, ListView, SafeAreaView } from 'react-native';
import Ripple from 'react-native-material-ripple';
import Icon from 'react-native-vector-icons/Ionicons';
const axios = require('axios');

const IP_ADDRESS = '10.108.47.73'; //USE THIS TO CHANGE IP ADDRESS FOR ALL URLs
var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class ProfileReviewScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: this.props.navigation.state.params.name,
            major: this.props.navigation.state.params.major,
            description: this.props.navigation.state.params.description,
            reviewList: []
        }
    }

    static navigationOptions = {
        title: 'ProfileReview'
      };

    componentDidMount() {
        console.log('\nChecking Reviews\n')
        axios({
            method: "post",
            url: "http://" + IP_ADDRESS + ":3000/api/getreviews",
            data: {
                tutor_id: 1
            }
        })
        .then((res) => {
            this.setState({reviewList: res.data})
            console.log(res.data)
        })
        .catch((res)=>{})
    }
    
    render(){
        const {navigate} = this.props.navigation;
        return(
            <Fragment>
                <SafeAreaView style={{flex: 0, backgroundColor: '#0066BF'}} />
                <SafeAreaView style={styles.container}>
                    <View style={styles.navBar}>
                        <Ripple onPress={() => this.props.navigation.goBack()}>
                            <View style={styles.navLeft}>
                               <Icon name="ios-arrow-back" size={40} />
                               <Image source={require('../assets/TutorUberLogo.png')} style={{width: 40, height: 40}}  />
                            </View>
                        </Ripple>
                        <Image source={require('../assets/TutorUberTitle.png')} style={{width: 80, height: 40}}  />
                        <View style={styles.rightNav}>
                        </View>
                    </View>
                    <View style={{ alignItems: 'center', flex: 1 }}>
                        <Image
                            style={{width: 100, height: 100, borderRadius: 100/2, marginTop: 15}}
                            source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
                        />
                        <Text style={{fontSize: 18}}>{this.state.name}</Text>
                        <Text style={{fontSize: 18}}>{this.state.major}</Text>
                        <Text style={{fontSize: 18}}></Text>
                        <Text>{this.state.description}</Text>
                        <ScrollView style={{width: '100%'}}>
                            <ListView 
                                enableEmptySections={true}
                                dataSource={ds.cloneWithRows(this.state.reviewList)}
                                renderRow={(rowData, sectionID, rowID, highlightRow) => 
                                <Ripple style={styles.listrow} onPress={()=> 
                                    {
                                         this.props.navigation.navigate('Review', {row_data: rowData})
                                    }
                                }>
                                    <View style={{padding: 20}}>
                                        <Text style={{fontSize: 20, marginLeft: 8, color: '#0C6CD4'}}>{rowData.user_firstname + ' ' + rowData.user_lastname}</Text>
                                        <Text style={{fontSize: 12, marginLeft: 8}}>{rowData.userratingtutor}/5 Stars</Text>
                                        <Text style={{fontSize: 16, marginLeft: 8, color: '#444444'}}>{rowData.user_comment}</Text>
                                    </View>
                                </Ripple>
                                }
                                renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator}/>}
                            />
                        </ScrollView>
                    </View>
                </SafeAreaView>
            </Fragment>
        )
    }
}

const styles = StyleSheet.create({
    separator: {
        flex: 1,
        height: StyleSheet.hairlineWidth,
        backgroundColor: '#8E8E8E',
    },
    container: {
        flex: 1,
        backgroundColor: '#a2caff',
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
    navLeft: {
        flexDirection: 'row',
    },
    //Used to force Menu Icon to right
    rightNav: {
        flexDirection: 'row', //Makes everything organize in rows rather than columns
        width: 40,
    },
})