import React, { Component } from 'react';
import { View, StyleSheet, Text} from 'react-native';

import slider from '@react-native-community/slider';
import Slider from '@react-native-community/slider';
//ANTES DE IMPORTAR PRECISA FAZER A INSTALAÇÃO: npm install @react-native-community/slider --save

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      valor: 0
    };
  };

 render(){
  return (
    <View style={styles.container}>
      <Slider
        minimumValue={0}
        maximumValue={100}
        onValueChange={(valorSelecionado) => this.setState({valor: valorSelecionado})}
        value={50}
        minimumTrackTintColor='green'
        maximumTrackTintColor='green'
      />
      <Text style={{fontSize:30,textAlign:'center'}}>{this.state.valor.toFixed(0)}</Text>
    </View>    
   );
 }
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop: 50,
  },
});