import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { 
    Bangers_400Regular 
  } from '@expo-google-fonts/bangers'
  import {useFonts} from 'expo-font'
  import AppLoading from 'expo-app-loading';

const FormHeader = ({leftHeading, RightHeading, subHeading}) => {
    let[fontsLoaded, error] = useFonts({
        Bangers_400Regular 
      })
      if (!fontsLoaded){
        return <AppLoading />
      }
    return (
        <>
        <View style={styles.header}>
          <Text style={styles.text}>{leftHeading}</Text>
          <Text style={styles.text}>{RightHeading}</Text>
        </View>
        <Text style={styles.style}>{subHeading}</Text>
        </>
        )
}

const styles = StyleSheet.create({
    container: {},
    header:{
        flexDirection:'row',
        justifyContent:"center",
        alignItems:"center"
    },text:{
        fontSize:30,
        fontWeight:"bold",
        color:'#1b1b33'
    },style:{
        fontSize:40,
         color:'#1b1b33', 
         textAlign:"center", 
         fontFamily:"Bangers_400Regular",
        }
})

export default FormHeader;