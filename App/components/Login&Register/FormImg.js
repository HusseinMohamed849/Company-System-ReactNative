import React from 'react';
import { StyleSheet, Image, ImageBackground , View } from 'react-native';
// import Logo from '../../../assets/Logo.png'
import Logo from '../../../assets/Logo.png'

const FormImg = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.img} source={Logo} />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    img:{
        width:150,
        height:150,
        position:'absolute',
        top:-90,
        left:140,
        right:0,
        bottom:0
    }
})

export default FormImg