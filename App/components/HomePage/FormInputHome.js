import React from 'react';
import { StyleSheet, Text, View,Dimensions, TextInput } from 'react-native';

const FormInputHome =({placeholder, title}) => {
    return (
    <>
        <Text style={styles.text}>{title}</Text>
        <TextInput placeholder={placeholder} style={styles.style}/>
    </>
    )
    
}

const styles = StyleSheet.create({
    text:{
        // fontWeight:"bold",
        color:"black",
        marginRight:42,
        fontSize:20
    },style:{
        color:"rgba(0,0,0,0.9)",
        borderWidth:2,
        width:"90%",
        borderColor:'#1b1b33',
        height:35,
        borderRadius:20,
        fontSize:16,
        paddingLeft:12,
        paddingRight:12,
        marginBottom:10,
    }
})

export default FormInputHome