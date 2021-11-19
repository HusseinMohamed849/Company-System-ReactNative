import React from 'react';
import { StyleSheet, Text, View,Button,StatusBar, TouchableWithoutFeedback, Pressable } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Feed from './Feed';


const Stack = createNativeStackNavigator()

function MainPage() {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen  component={Page} name="Feed"/>
                <Stack.Screen  component={Home} name="Home"/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const Home = () =>{
    return(
     <View style={styles.container}>
        <Text>
            da bgd ?
        </Text>
    </View>   
    )
}


const Page = ({navigation}) =>{
    return(
        <Feed />
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }})

export default MainPage