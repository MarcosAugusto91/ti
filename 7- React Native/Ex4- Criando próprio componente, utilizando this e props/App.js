import React, {Component} from 'react';
import { View, Text, Image } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

class App extends Component{
  render(){

    let nome = 'Steve Jobs';


    return(
      <View>
        <Text style={{marginTop:35}}>
        </Text>

        <Jobs largura={420} altura={200} nome='Steve Jobs'/>

      </View>
    );
  }
}

{/* Nome de classes sempre com letra maiúscula no início! */}
class Jobs extends Component{ 
  render(){
    let imagem = 'https://sujeitoprogramador.com/steve.png';

    return(
     <View>
        <Text style={{color: 'red', fontSize: 20, textAlign:'center', marginBottom: 10}}>
            {this.props.nome}
        </Text>
        <Image 
        source={{uri: imagem}}
        style={{width: this.props.largura, height:this.props.altura}}
        />

      </View>

    );
  }
}

export default App;