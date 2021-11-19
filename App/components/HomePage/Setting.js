import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';

export default class Setting extends React.Component{
    render() {
        return(
        <View style={styles.container}>
            <Text>
                setting!
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
