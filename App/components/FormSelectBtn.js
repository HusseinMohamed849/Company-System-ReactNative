
import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';

const FormSelectBtn = ({title, style , backgroundColor, onPress}) =>{
    return (
    <TouchableWithoutFeedback onPress={onPress}>
    <View style={[styles.container, style, {backgroundColor}]}>
      <Text style={styles.buttonText}>{title}</Text>
    </View>
    </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 45, width:'50%',
        backgroundColor:'#1b1b33',
        justifyContent:"center",
        alignItems:'center' 
    },buttonText:{
        color:'#fff',
        fontWeight:"bold",
    }
})

export default FormSelectBtn