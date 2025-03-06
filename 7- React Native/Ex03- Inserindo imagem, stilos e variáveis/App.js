import React, {Component} from 'react';
import { View, Text, Image } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

class App extends Component{
  render(){

    let nome = 'Steve Jobs';
    let imagem = 'https://sujeitoprogramador.com/steve.png';

    return(
      <View>
        <Text style={{marginTop:35}}>
          Meu primeiro App:
        </Text>

        <Text style={{
          color: 'blue', 
          fontSize: 20}}>
          {nome} {/* Aplicando o valor da minha variável */}
        </Text>

        <Image 
          source={{uri: imagem }}
          style={{width:420, height:200}}> 
        </Image>

      </View>
    );
  }
}

export default App;