import React, {Component} from 'react';
import { View, Text, Button } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      nome: ''
    };

    this.entrar = this.entrar.bind(this);
  }

  entrar(nome){
    this.setState({
      nome: nome
    })
  }

  render(){
    return(
      <View style={{marginTop:40,}}>
        <Text style={{fontSize:23, textAlign:'center'}}>
          {this.state.nome}
        </Text>
        <Button title='entrar' onPress={() => this.entrar('Marcos Augusto')}></Button>
      </View>
    );
  }
}

export default App;