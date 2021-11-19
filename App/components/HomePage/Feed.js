import React from 'react';
import { StyleSheet, Text, View,StatusBar, TouchableWithoutFeedback, Pressable } from 'react-native';
import Icon1 from 'react-native-ico';
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Add from './Add';
import setting from './Setting'
import profile from './Profile';
import allSub from './allSub';
import Search from './Search';

const Stack = createNativeStackNavigator()

const iconHeight = 26
const iconWidth = 26

  const Feed = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen  component={Home} name="Home"/>
                <Stack.Screen  component={Add} name="Add"/>
                <Stack.Screen  component={setting} name="Setting"/>
                <Stack.Screen  component={profile} name="profile"/>
                <Stack.Screen  component={allSub} name="allSub"/>
                <Stack.Screen  component={Search} name="Search"/>
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
        <View>
          <Text style={{fontSize:30,fontWeight:"bold",color:"red"}}>welcome</Text>
          <StatusBar style="light" />
      </View>

      <View style={styles.NavContainer}>
        <View style={styles.NavBar}>
          <Pressable onPress={()=> navigation.navigate('allSub')} style={styles.IconBehav}
            android_ripple={{borderless:true, radius:50}}>
            <Icon1 name="group-profile-users" group="font-awesome" height={iconHeight} width={iconWidth} color="#1b1b33"/>
          </Pressable>
          <Pressable onPress={()=> navigation.navigate('Search')} style={styles.IconBehav}
            android_ripple={{borderless:true, radius:50}}>
            <Icon1 name="search" group="miscellaneous"height={iconHeight} width={iconWidth} color="#1b1b33"/>
          </Pressable>
          <Pressable  onPress={()=> navigation.navigate('Add')} style={styles.IconBehav}
            android_ripple={{borderless:true, radius:50}}>
            <Icon1 name="add-1" group="essential"height={iconHeight} width={iconWidth}color="#1b1b33"/>
          </Pressable>
          <Pressable onPress={()=> navigation.navigate('profile')} style={styles.IconBehav}
            android_ripple={{borderless:true, radius:50}}>
            <Icon1 name="profile" group="basic" height={iconHeight} width={iconWidth} color="#1b1b33"/>
          </Pressable>
          <Pressable onPress={()=> navigation.navigate('Setting')} style={styles.IconBehav}
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
 }
})

export default Feed


