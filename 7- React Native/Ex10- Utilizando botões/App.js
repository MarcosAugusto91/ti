import React, {Component} from 'react';
import { View, Text, StyleSheet, TextInput, Button, Image } from 'react-native';

class App extends Component{

  constructor(props){
    super(props);
    this.state ={
      nome:'',
      input:'',
      imagem:'',
    };

    this.entrar = this.entrar.bind(this);
  }

  entrar(){
    if(this.state.input === ''){
      alert('Digite seu nome!');
      return;
    }
    else{
      this.setState({nome: 'Bem vindo ' + this.state.input + '!'}),
      this.setState({imagem: 'https://sujeitoprogramador.com/steve.png'});
    }
  }

  render(){
    return(
      <View style={style.container}>

        <TextInput 
        style={style.input}
        placeholder='Digite seu nome:'
        underlineColorAndroid='transparent'
        onChangeText={(texto) => this.setState({input: texto})}
        ></TextInput>

        <Button title='Entrar' onPress={this.entrar}/>

        <View style={style.area2}>
          <Image
          source={{uri: this.state.imagem}}
          style={style.imagem}
          ></Image>

          <Text style={style.texto}>{this.state.nome}</Text>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
container:{
  flex:1,
  flexDirection:'collumn'
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
  textAlign:'center',
  marginTop:5,
  fontSize:18
},

imagem: {
  width:250, 
  height:200
},

area2:{
  marginTop:200,
  justifyContent:'center', 
  alignItems:'center'
}
})

export default App;