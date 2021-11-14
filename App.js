import { StatusBar } from 'expo-status-bar';
import React,{useRef} from 'react';
import { ScrollView, StyleSheet, Text, TouchableWithoutFeedback, View , Dimensions, ImageBackground} from 'react-native';
import FormHeader from './App/components/FormHeader'
import FormSelectBtn from './App/components/FormSelectBtn';
import FormRegister from './App/components/FormRegister';
import FormLogin from './App/components/FormLogin';
import FormImg from './App/components/FormImg';
import BG from './assets/BG.jpeg';

export default function App() {

  const scrollView = useRef()
 return (
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
      <ScrollView ref={scrollView} horizontal pagingEnabled showsHorizontalScrollIndicator={false}>
        <FormRegister />
        <ScrollView>
          <FormLogin />
        </ScrollView>
        </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
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
  
});
