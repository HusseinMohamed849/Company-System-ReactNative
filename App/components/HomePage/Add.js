import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableWithoutFeedback } from 'react-native';
import FormInputHome from './FormInputHome';

export default class Add extends React.Component{
    render() {
        return(
            <View style={styles.container}>
               <FormInputHome title="Transger to" placeholder="Enter the name" />
                <FormInputHome title="Value" placeholder="Enter the vlaue" />
                <FormInputHome title="Day" placeholder="Enter the day" />
                
            </View>
            
        )
    }

}

const styles = StyleSheet.create({
    container:{
        paddingVertical:30,
        height:300,
        width:Dimensions.get('window').width,
        marginLeft:50
    }})


