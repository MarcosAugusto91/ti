import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList
  } from 'react-native';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      feed:[
        {id:'1', nome: 'Marcos', idade: 33, email: 'marcos@marcos.com'},
        {id:'2', nome: 'Matheus', idade: 50, email: 'matheus@matheus.com'},
        {id:'3', nome: 'Joao', idade: 22, email: 'joao@joao.com'},
        {id:'4', nome: 'Henrique', idade: 39, email: 'henrique@henrique.com'},
        {id:'5', nome: 'Paulo', idade: 15, email: 'paulo@paulo.com'},
        {id:'6', nome: 'JOSE', idade: 12, email: 'jose@jose.com'},
      ]
    };
  }

  render(){
    return(
      <View style={styles.container}> 

      <FlatList
      data={this.state.feed}
      keyExtractor={(item) => item.id}
      renderItem={ ({item}) => <Pessoa data={item} /> }
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
  areaPessoa:{
    backgroundColor: '#222',
    height: 200,
    marginBottom: 15
  },
  textoPessoa:{
    color: '#FFF',
    fontSize: 20,
  }
});

export default App;


class Pessoa extends Component{
  render(){
    return(
      <View style={styles.areaPessoa}>
        <Text style={styles.textoPessoa}>Nome: {this.props.data.nome} </Text>
        <Text style={styles.textoPessoa}>Idade: {this.props.data.idade} </Text>
        <Text style={styles.textoPessoa}>Email: {this.props.data.email} </Text>
      </View>
    );
  }
}


