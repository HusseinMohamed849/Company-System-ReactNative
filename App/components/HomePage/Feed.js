import React from 'react';
import { StyleSheet, Text, View,StatusBar, TouchableWithoutFeedback, Pressable } from 'react-native';
import Icon from 'react-native-ico-material-design';
import Icon1 from 'react-native-ico';


const iconHeight = 26
const iconWidth = 26

export default class Feed extends React.Component{
  state = {
    screenText:"Welcome"
  }
  changeText = (text) =>{
    console.log(text + " has been pressed!")
    this.setState({
      screenText: text
    })
  }
  render() {
    return(
      <View style={styles.container}>
        <View>
          <Text style={{fontSize:30,fontWeight:"bold",color:"red"}}>{this.state.screenText}</Text>
          <StatusBar style="light" />
      </View>

      <View style={styles.NavContainer}>
        <View style={styles.NavBar}>
          <Pressable onPress={()=> this.changeText('Home')} style={styles.IconBehav}
            android_ripple={{borderless:true, radius:50}}>
            <Icon1 name="group-profile-users" group="font-awesome" height={iconHeight} width={iconWidth} color="#1b1b33"/>
          </Pressable>
          <Pressable onPress={()=> this.changeText('search')} style={styles.IconBehav}
            android_ripple={{borderless:true, radius:50}}>
            <Icon1 name="search" group="miscellaneous"height={iconHeight} width={iconWidth} color="#1b1b33"/>
          </Pressable>
          <Pressable onPress={()=> this.changeText('Add')} style={styles.IconBehav}
            android_ripple={{borderless:true, radius:50}}>
            <Icon1 name="add-1" group="essential"height={iconHeight} width={iconWidth}color="#1b1b33"/>
          </Pressable>
          <Pressable onPress={()=> this.changeText('profile')} style={styles.IconBehav}
            android_ripple={{borderless:true, radius:50}}>
            <Icon1 name="profile" group="basic" height={iconHeight} width={iconWidth} color="#1b1b33"/>
          </Pressable>
          <Pressable onPress={()=> this.changeText('setting')} style={styles.IconBehav}
            android_ripple={{borderless:true, radius:50}}>
            <Icon1 name="settings" group="miscellaneous" height={iconHeight} width={iconWidth} color="#1b1b33"/>
          </Pressable>
        </View>
      </View>
    </View>
  )
  }
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

