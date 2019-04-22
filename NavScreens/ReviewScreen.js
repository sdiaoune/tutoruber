import React, {Fragment} from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Ripple from 'react-native-material-ripple';

export default class ReviewScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            fname: this.props.navigation.state.params.row_data.user_firstname,
            lname: this.props.navigation.state.params.row_data.user_lastname,
            rating: this.props.navigation.state.params.row_data.userratingtutor,
            comment: this.props.navigation.state.params.row_data.user_comment
        }
    }

    static navigationOptions = {
        title: 'ReviewScreen'
    };

    render(){
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
                    <View style={styles.body}>
                        <ImageBackground source={require('../assets/splashLogin.png')} style={{width: '100%', height: '100%'}}>
                            <View style={styles.bodyCont}>
                                <Text style={{fontSize: 26, marginLeft: 8, marginTop: 8, color: '#0C6CD4'}}>{this.state.fname + ' ' + this.state.lname}</Text>
                                <Text style={{fontSize: 14, marginLeft: 16}}>{this.state.rating}/5 stars</Text>
                                <Text style={{fontSize: 18, marginLeft: 14, marginBottom: 8, color: '#444444'}}>{this.state.comment}</Text>
                            </View>
                        </ImageBackground>
                    </View>
                </SafeAreaView>
            </Fragment>
        )
    }
}

/* STYLE SHEETS */
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#a2caff'
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
    //Main Body container
    body: {
      flex:1, //Fills remaining space
      backgroundColor: '#000',
    },
    bodyCont: {
      flex: 1,
      marginTop: 20,
      marginBottom: 20,
      marginLeft: 20,
      marginRight: 20,
      backgroundColor: 'rgba(0,121,137,0.12)'
    }
  });