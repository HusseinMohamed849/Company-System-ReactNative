import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity,ScrollView, Button } from 'react-native';
import FormInputHome from './FormInputHome';

export default class Add extends React.Component{
    render() {
        return(
            <>
            <View style={styles.frame2}>
                <View style={styles.container}>
                    <FormInputHome title="محوله الي" placeholder="ادخال الاسم" />
                    <FormInputHome title="القيمه" placeholder="ادخال المبلغ" />
                    <FormInputHome title="اليوم" placeholder="ادخال اليوم" /> 
                    <FormInputHome title="التاريخ" placeholder="ادخال التاريخ" />
                    <FormInputHome title="تفاصيل" placeholder="ادخال التفاصيل" />  
                    <FormInputHome title="نوع التحويل" placeholder="ادخال نوع التحويل" /> 
                    <FormInputHome title=" الرقم التسلسلي" placeholder="ادخال الرقم التسلسلي" /> 
                </View>
            </View> 
            <TouchableOpacity style={styles.frame}>
                <Text style={{color:"white", fontSize:17}}>اضافه ✔</Text>
            </TouchableOpacity>
            </>
            
        )
    }

}

const styles = StyleSheet.create({
    text:{
        fontSize:30,
        fontWeight:"bold"
    },style:{
        flex: 1,
        justifyContent:"center",
        alignItems:"center"
    },container:{
        height:550,
        width:Dimensions.get('window').width,
        marginTop:10,
        marginLeft:40,
    },frame2:{
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"rgba(0,0,0,0.1)",
        borderRadius:20,
        height:600,
        width:360,
        position:"absolute",
        top:20,
        left:9,
    }, frame:{
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"rgba(0,0,220,0.8)",
        borderRadius:20,
        height:50,
        width:200,
        position:"absolute",
        top:640,
        left:80,
    }
})


