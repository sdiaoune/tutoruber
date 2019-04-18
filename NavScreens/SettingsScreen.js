import React, {Fragment} from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, SafeAreaView, ListView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

//Have to install first
import Ripple from 'react-native-material-ripple';

//DataSource
var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class SettingsScreen extends React.Component {
  constructor(props){
    super(props)
    this.state = {
        dataSource: ds.cloneWithRows(['Update Profile', 'Change Login Credentials', 'Payment Methods']) //List of items to appear in list
    }
  }
  static navigationOptions = {
    title: 'Settings',
  };
  render() {
    return (
      <Fragment>
      <SafeAreaView style={{flex: 0, backgroundColor: '#0066BF'}} />
      <SafeAreaView style={styles.container}>
        {/* Navigation Bar. No need to change. All style changes in style sheets */}
        <View style={styles.navBar}>
          <Image source={require('../assets/TutorUberLogo.png')} style={{width: 40, height: 40}}  />
          <Image source={require('../assets/TutorUberTitle.png')} style={{width: 80, height: 40}}  />
          <View style={styles.rightNav}>
            <Ripple onPress={() => this.props.navigation.toggleDrawer()}>
              <Icon name="menu" size={40} />
            </Ripple>
          </View>
        </View>

        {/* Beginning of Body */}
        <View style={styles.body}>
          <ImageBackground source={require('../assets/splashLogin.png')} style={{width: '100%', height: '100%'}}>
          <View>
            <ListView
                dataSource={this.state.dataSource}
                renderRow={(rowData, sectionID, rowID, highlightRow) => <Ripple style={styles.listrow} onPress={()=> 
                {
                    if(rowID == 0) {
                        this.props.navigation.navigate('UpdateProfile', {})
                    }
                    if (rowID == 1){
                      this.props.navigation.navigate('UpdateLogin', {})
                    }                }
                }>
                    <Text style={{fontSize: 20, marginLeft: 8}}>{rowData}</Text>
                    </Ripple>}
                renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator}
                />}
                />
            </View>
          </ImageBackground>
        </View>
      </SafeAreaView>
      </Fragment>
    );
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
  //Used to force Menu Icon to right
  rightNav: {
    flexDirection: 'row', //Makes everything organize in rows rather than columns
  },
  //Main Body container
  body: {
    flex:1, //Fills remaining space
    backgroundColor: '#000',
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
});