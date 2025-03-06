import React, {Component} from 'react';
import { View, Text } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

class App extends Component{
  render(){
    return(
      <View style={{flex:1, backgroundColor:'#222' , /*marginTop:50*/}}>
        <View style={{height:80, backgroundColor:'white'}}></View>
        <View style={{flex:1, backgroundColor:'blue'}}></View>
        <View style={{flex:2, backgroundColor:'orange'}}></View>
        <View style={{height:80, backgroundColor:'black'}}></View>
      </View>
    );
  }
}

export default App;