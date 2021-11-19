import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';

const profile =() =>{
        return(
        <View style={styles.container}>
            <Text>
                Profile
            </Text>
        </View>
        )
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }})

export default profile
