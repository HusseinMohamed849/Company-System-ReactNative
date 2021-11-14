import React from 'react';
import { StyleSheet, Text, View,Dimensions, TextInput } from 'react-native';

const FormInput =({placeholder, title}) => {
    return (
    <>
        <Text style={styles.text}>{title}</Text>
        <TextInput placeholder={placeholder} style={styles.style}/>
    </>
    )
    
}

const styles = StyleSheet.create({
    text:{
        fontWeight:"bold",
        color:"white",
    },style:{
        color:"rgba(255,255,255,0.9)",
        borderWidth:2,
        borderColor:'#1b1b33',
        height:35,
        borderRadius:8,
        fontSize:16,
        paddingLeft:10,
        marginBottom:10,
    }
})

export default FormInput