import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  FlatList
  } from 'react-native';

import Pessoas from './src/Pessoas';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      lista: [
        {id: '1', nome:'Matheus', idade:50, email:'matheus@matheus.com'},
        {id: '2', nome:'Thiago', idade:33, email:'thiago@thiago.com'},
        {id: '3', nome:'Lucas', idade:20, email:'lucas@lucas.com'},
        {id: '4', nome:'Henrique', idade:50, email:'Henrique@Henrique.com'},
        {id: '5', nome:'Thiago', idade:33, email:'thiago@thiago.com'},
        {id: '6', nome:'Lucas', idade:20, email:'lucas@lucas.com'},
        {id: '7', nome:'JOSE', idade:33, email:'thiago@thiago.com'},
        {id: '8', nome:'HENRIQUE', idade:20, email:'lucas@lucas.com'},

      ]
    };
  }

  render(){
    return(
      <View style={styles.container}> 

      <FlatList
      data={this.state.lista} //Recebe os dados que serão inseridos no FlatList
      keyExtractor={(item)=> item.id} //Aponta qual o campo Key, para melhorar o desempenho
      renderItem={ ({item}) => <Pessoas data={item} /> } //Envia cada item para a classe Pessoas renderizar os valores da lista;
      />

      </View>    
    );
  }

}
const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:40
  },
});

export default App;