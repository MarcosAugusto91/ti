import React, {Component} from 'react';
import { View, Text } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

class App extends Component{
  render(){
    return(
      <View style={{flex:1, 
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center', 
        gap:5}}>  

        {/*
          Utilizando FlexDirecion: Row:
          Horizontal: justifyContent: flex-start, flex-end, center, space-between, space-around;
          Vertical:   alignItems: mesmas configurações;
          Se o flexDirection for Column inverte;
        */}

        <View style={{width:50, height:50, backgroundColor:'green'}}></View>
        <View style={{width:50, height:50, backgroundColor:'blue'}}></View>
        <View style={{width:50, height:50, backgroundColor:'black'}}></View>
      </View>
    );
  }
}

export default App;