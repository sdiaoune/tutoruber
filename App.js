import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer, createDrawerNavigator } from 'react-navigation';

//Created Imports/Our Imports
import SettingsScreen from './NavScreens/SettingsScreen';
import RegisterScreen from './NavScreens/RegisterScreen';
import MenuDrawer from './components/MenuDrawer';
import ProfileScreen from './NavScreens/ProfileScreen';
import UpdateLogin from './NavScreens/UpdateLogin';
import UpdateProfile from './NavScreens/UpdateProfile';
import HomeMapScreen from './NavScreens/HomeMapScreen';
import HomeLoginScreen from './NavScreens/HomeLoginScreen';
import ProfileReviewScreen from './NavScreens/ProfileReviewScreen';

const WIDTH = Dimensions.get('window').width;
const DrawerConfig = {
  drawerWidth: WIDTH*0.83,
  drawerPosition: 'right',
  contentComponent: ({navigation})=>{
    return(<MenuDrawer navigation={navigation}/>)
  }
}

const drawerNavi = createDrawerNavigator({
  HomeMap: {
    screen: HomeMapScreen,
  },
  Settings: {
    screen: SettingsScreen,
  },
  Profile: {
    screen: ProfileScreen,
  }
},
  DrawerConfig
);

const stackNavi = createStackNavigator({
  HomeLogin: {
    screen: HomeLoginScreen,
  },
  HomeMap: { //Drawer Navigator should display after login page
    screen: drawerNavi,
  },
  Register: {
    screen: RegisterScreen,
  },
  UpdateProfile: {
    screen: UpdateProfile
  },
  UpdateLogin: {
    screen: UpdateLogin
  },
  ProfileReview: {
    screen: ProfileReviewScreen
  },
},
{
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false
  }
}
);

export default createAppContainer(stackNavi);