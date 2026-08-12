import React, {Component} from 'react';
import { View, Text, Image } from 'react-native';

class App extends Component{
  render(){

    let nome = 'Steve Jobs';
    let imagem = 'https://reactnative.dev/img/tiny_logo.png';

    return(
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#000'
      }}>

        <Text style={{color: 'blue', fontSize: 20}}>
          {nome} {/* Aplicando o valor da minha variável */}
        </Text>

        <Image 
          source={{uri: imagem }}
          style={{width: 300, height: 200, resizeMode: 'contain'}}
        > 
        </Image>
      </View>
    );
  }
}

export default App;