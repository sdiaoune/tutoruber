import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Modal } from 'react-native';

import { black } from 'ansi-colors';

import { createStackNavigator, createAppContainer } from "react-navigation";

import Login from './Login';
import Signup from './Signup';
import Home from './Home';
import Search from './Search';

const AppNavigator = createStackNavigator({
  
  Home: {
    screen: Home
  },
  Login: {
    screen: Login
  },
  Signup: {
    screen: Signup
  },
  Search: {
    screen: Search
  }
  
});

const App = createAppContainer(AppNavigator);

export default App;



