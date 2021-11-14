import React from 'react';
import { StyleSheet, Text, View,Dimensions, TextInput, TouchableOpacity } from 'react-native';

const FormBtn = ({title}) => {
    return(
        <TouchableOpacity style={styles.container}>
            <Text style={{fontSize:20, fontWeight:"bold", color:"white"}}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
  container:{
    marginTop:20,
    backgroundColor:"#1b1b33",
    height:45,
    borderRadius:9,
    justifyContent:"center",
    alignItems:"center",
  }
})

export default FormBtn