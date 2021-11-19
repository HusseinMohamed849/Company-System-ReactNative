import React,{useRef} from 'react';
import { ScrollView, StyleSheet, Text, TouchableWithoutFeedback, View , Dimensions, ImageBackground} from 'react-native';
import FormHeader from './FormHeader';
import FormSelectBtn from './FormSelectBtn';
import FormRegister from './FormRegister';
import FormLogin from './FormLogin';
import FormImg from './FormImg';
import BG from '../../../assets/BG.jpeg';



const Login_register = () => {
    return(
    <ImageBackground source={BG} style={{flex:1, paddingTop:200}}>
      <FormImg />
      <View style={{height: 130}}>
        <FormHeader 
        subHeading="All World"
        />
      </View>
      <View style={styles.bar}>
        <FormSelectBtn style={styles.borderleft} backgroundColor="rgba(27,27,51,1)" title="Sign up"  />
        <FormSelectBtn style={styles.borderright} backgroundColor="rgba(27,27,51,0.5)" title="Login ➡" />
      </View>
      <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false}>
        <FormRegister />
        <ScrollView>
          <FormLogin />
        </ScrollView>
        </ScrollView>
    </ImageBackground>
    )
}

const styles  = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },style:{
        fontSize:40,
         color:'#1b1b33', 
         textAlign:"center", 
         fontFamily:"Bangers_400Regular",
      }, bar:{
            flexDirection:'row',
            paddingHorizontal:20,
            marginBottom:20
      },borderleft:{
        borderTopLeftRadius:9,
        borderBottomLeftRadius:9
      },borderright:{
        borderTopRightRadius:9,
        borderBottomRightRadius:9
      }
})

export default Login_register