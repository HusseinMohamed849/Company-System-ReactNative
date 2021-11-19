import React from 'react';
import { StyleSheet, Text, View,Dimensions, TextInput } from 'react-native';
import FormBtn from './FormBtn';
import FormContainer from './FormContainer';
import FormInput from './FormInput';




const FormLogin =({navigation})=>{
    return (
        <FormContainer>
            <FormInput title="Email" placeholder="example@yahoo.com"/>
            <FormInput title="Password" placeholder="Enter Your Password"/>
            <FormBtn  title="Login"/>
            <Text style={styles.forget}>Forget your Password?</Text>
        </FormContainer>   
    )
}


const styles = StyleSheet.create({
    forget:{
        color:"rgba(0,0,200,1)",
        fontSize:14,
        fontWeight:"bold",
        position: 'absolute',
        left:     115,
        top:      200,
    }
})

export default FormLogin