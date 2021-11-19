import React from 'react';
import { StyleSheet, Text, View,Dimensions, TextInput, KeyboardAvoidingView } from 'react-native';

const FormContainer =({children}) => {
    return (
        <KeyboardAvoidingView>
            <View style={styles.container}>{children}</View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:20,
        height:300,
        width:Dimensions.get('window').width,
        
    }
})

export default FormContainer