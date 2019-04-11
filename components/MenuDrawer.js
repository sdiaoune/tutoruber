import React from 'react';
import { Platform, Dimensions, StyleSheet, View, Text, TouchableOpacity } from 'react-native';

//Defines Drawer Navigator Panel

export default class MenuDrawer extends React.Component {
    //Defines each navigation button
    navLink(nav, text) {
        return(
            <TouchableOpacity style={{height:70}} onPress={() => {this.props.navigation.navigate(nav)}}>
                <Text style={styles.naviLink}>{text}</Text>
            </TouchableOpacity>
        );
    }
    render() {
        return (
            <View style={styles.container}>                
                <View style={styles.topLink}>
                    {/* List of components that will link to other pages.
                        Left parameter is the page link, right is the text that will appear */}
                    {this.navLink('HomeMap', 'Home')}
                    {this.navLink('Profile', 'My Profile')}
                    {this.navLink('Settings', 'Settings')}
                </View>

                {/* Footer */}
                <View style={styles.bottomBar}>
                    <Text style={styles.navText}>TutorUber ©2019 - v0.1</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#CAE4F9',
    },
    naviLink: {
        flex: 1,
        paddingLeft: 14,
        fontSize: 20,
        color: '#2C2C2C',
        padding: 6,
        margin: 5,
    },
    topLink: {
        flex: 1,
        paddingTop: 30,
        paddingBottom: 450,
    },
    bottomBar: {
        flexDirection: 'row',
        height: 45,
        backgroundColor: '#617895',
        borderTopWidth: 2,
        borderTopColor: '#373737',
    },
    navText: {
        color: '#CACACA',
        fontSize: 12,
        paddingLeft: 20,
        paddingTop: 12,
    },
});