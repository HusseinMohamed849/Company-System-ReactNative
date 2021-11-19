import React from 'react';
import { StyleSheet, Text, View,StatusBar, TouchableWithoutFeedback, Pressable } from 'react-native';
import Add from './Add'
import Setting from './Setting'

import {createStackNavigator} from 'react-navigation'

const RootStack = createStackNavigator({
    Setting:Setting,
    Add:Add,
})

export default class MainPage extends React.Component{
    render(){
        return <RootStack />
    }
}

const styles = StyleSheet.create({
    container:{

    }
})