import { StatusBar } from 'expo-status-bar';
import React,{useRef} from 'react';
import { ScrollView, StyleSheet, Text, TouchableWithoutFeedback, View , Dimensions, ImageBackground} from 'react-native';
import MainPage from './App/components/HomePage/MainPage';
import Login_register from './App/components/Login&Register/Login_register';
import Add from './App/components/HomePage/Add'

export default function App() {

 return (
   <Add />
    
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
