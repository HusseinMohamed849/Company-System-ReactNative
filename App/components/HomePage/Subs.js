import React from 'react';
import { StyleSheet, Text, View,StatusBar, TouchableWithoutFeedback, Pressable } from 'react-native';

const Subs =({title, value, name}) =>{
    return(
        <>
        <View style={styles.body}>
         <View style={styles.container}>
            <Text style={styles.text}>{title} حول الي {name} </Text>
            <Text style={styles.value}>{value}</Text>
        </View>   
        </View>
        
        </>
        
    )
}

const styles = StyleSheet.create({
    container:{
        width:320,
        height:90,
        backgroundColor:'rgba(0,0,0,.2)',
        position:'absolute',
        top:-360,
        left:-170,
        borderRadius:20
    },text:{
        color:"white",
        // marginRight:42,
        fontSize:22,
        fontWeight:"bold",
        marginRight:10,
        marginTop:10,
    },body:{
         padding:45,
        marginTop:20,
    }, value:{
        color:"green",
        // marginRight:42,
        fontSize:25,
        fontWeight:"bold",
        marginLeft:20,
    },text1:{
        color:"white",
        fontSize:20,
        marginRight:20,
    }
})

export default Subs