import React from 'react';
import { StyleSheet, Text, View,Dimensions, TextInput } from 'react-native';
import FormBtn from './FormBtn';
import FormContainer from './FormContainer';
import FormInput from './FormInput';

const FormLogin =()=>{
    return (
        <FormContainer>
            <FormInput title="Email" placeholder="example@yahoo.com"/>
            <FormInput title="Password" placeholder="Enter Your Password"/>
            <FormBtn title="Login" />
        </FormContainer>   
    )
}

const styles = StyleSheet.create({
})

export default FormLogin