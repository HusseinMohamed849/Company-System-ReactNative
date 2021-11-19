import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';

export default class Add extends React.Component{
    render() {
        return(
        <View style={styles.container}>
            <Text>
                hello!
            </Text>
        </View>
        )
    }

}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }})


