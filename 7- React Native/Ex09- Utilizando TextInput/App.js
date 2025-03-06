import React, {Component} from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

class App extends Component{

  constructor(props){
    super(props);
    this.state ={
      nome:''
    };

    this.pegaNome = this.pegaNome.bind(this);
  }

  pegaNome(texto){
    if(texto.length > 0){
      this.setState({
        nome:'Bem vindo ' + texto +'!'}
    )} else{
      this.setState({nome:''})
    }
  }

  render(){
    return(
      <View style={style.container}>

        <TextInput 
        style={style.input}
        placeholder='Digite seu nome:'
        underlineColorAndroid='transparent'
        onChangeText={this.pegaNome}
        ></TextInput>
        <Text style={style.texto}>{this.state.nome}</Text>

      </View>
    );
  }
}

const style = StyleSheet.create({
container:{
  flex:1,
},

input:{
  marginTop:50,
  height:45,
  borderWidth:1,
  borderColor:'#222',
  margin:10,
  padding:10
},

texto:{
  textAlign:'center'
}
})

export default App;