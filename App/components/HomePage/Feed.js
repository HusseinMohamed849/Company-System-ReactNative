import React from 'react';
import { StyleSheet, Text, View,StatusBar, TouchableWithoutFeedback,Dimensions, Pressable } from 'react-native';
import Icon1 from 'react-native-ico';
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Add from './Add';
import setting from './Setting'
import profile from './Profile';
import Subs from './Subs'


const Stack = createNativeStackNavigator()

const iconHeight = 26
const iconWidth = 26

  const Feed = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen  component={Home} name="الصفحه الرئيسيه"/>
                <Stack.Screen  component={Add} name="أضافه مصاريف"/>
                <Stack.Screen  component={setting} name="الاعدادات"/>
                <Stack.Screen  component={profile} name="الصفحه الشخصيه"/>
            </Stack.Navigator>
        </NavigationContainer>
      )
        
  }

  const Home =({navigation}) =>{
  // state = {
  //   screenText:"Welcome"
  // }
  // changeText = (text) =>{
  //   console.log(text + " has been pressed!")
  //   this.setState({
  //     screenText: text
  //   })
  // }
    return(
      <View style={styles.container}>
        <View style={styles.home}>
          <Subs title="حسين" value="5000" name="احمد"/>
          <Subs title="سيد" value="2000" name="مصطفي"/>
          <Subs title="فتحي" value="2000" name="يسس"/>
          
          <StatusBar style="light" />
        </View>

      <View style={styles.NavContainer}>
        <View style={styles.NavBar}>
          
          <Pressable onPress={()=> navigation.navigate('الصفحه الشخصيه')} style={styles.IconBehav}
            android_ripple={{borderless:true, radius:50}}>
            <Icon1 name="profile" group="basic" height={iconHeight} width={iconWidth} color="#1b1b33"/>
          </Pressable>
          <Pressable  onPress={()=> navigation.navigate('أضافه مصاريف')} style={styles.IconBehav}
            android_ripple={{borderless:true, radius:50}}>
            <Icon1 name="add-1" group="essential"height={iconHeight} width={iconWidth}color="red"/>
          </Pressable>
          <Pressable onPress={()=> navigation.navigate('الاعدادات')} style={styles.IconBehav}
            android_ripple={{borderless:true, radius:50}}>
            <Icon1 name="settings" group="miscellaneous" height={iconHeight} width={iconWidth} color="#1b1b33"/>
          </Pressable>
        </View>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
container:{
    flex: 1,
    backgroundColor:"rgba(255,255,255,1)",
    justifyContent:'center',
    alignItems:'center',
 }, NavContainer:{
  position:"absolute",
  alignItems:'center',
  bottom:30
 }, NavBar:{
   flexDirection:"row",
   backgroundColor:"rgba(0,0,0,0.1)",
   width:'95%',
   height:60,
   justifyContent:'space-evenly',
   borderRadius:40
 },IconBehav:{
   padding:14
 },home:{
  height:250,
  width:Dimensions.get('window').width,
  marginTop:300,
  marginLeft:400,
 }
})

export default Feed


