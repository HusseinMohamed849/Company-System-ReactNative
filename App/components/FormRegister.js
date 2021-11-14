import React from 'react';
import { StyleSheet, Text, View, Dimensions,TextInput } from 'react-native';
import FormBtn from './FormBtn';
import FormContainer from './FormContainer';
import client from './Api/client'
import axios from 'axios'

const FormRegister =() =>{

    const signUp = (credentials) => {
        const url = 'http://192.168.1.8:3000/test'
        axios.get(url, credentials).then((response)=>{
            console.log(response)
        }).catch(error => {
            console.log(error.JSON())
        })
    }

    return(
        <FormContainer>
        <Text style={{fontWeight:"bold", color:"rgba(255,255,255,0.9)"}}>Full Name</Text>
        <TextInput placeholder="Enter Your Name" style={styles.style}/>
        <Text style={{fontWeight:"bold", color:"rgba(255,255,255,0.9)"}}>Email</Text>
        <TextInput placeholder="Enter Your Email" style={styles.style}/>
        <Text style={{fontWeight:"bold",color:"rgba(255,255,255,0.9)"}}>Password</Text>
        <TextInput placeholder="Enter Your Password" style={styles.style}/>
        <Text style={{fontWeight:"bold", color:"rgba(255,255,255,0.9)"}}>Phone Number</Text>
        <TextInput keyboardType = 'numeric' placeholder="Enter Your Number" style={styles.style}/>
        <FormBtn title="Register" onSubmit={signUp} />
        </FormContainer>
        
    )
}

const styles = StyleSheet.create({
    style:{
        borderWidth:2,
        borderColor:'#1b1b33',
        height:35,
        color:"rgba(27,27,51,1)",
        borderRadius:8,
        fontSize:16,
        paddingLeft:10,
        marginBottom:10
    }
})

export default FormRegister