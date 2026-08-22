import React, {Component} from 'react';
import { View, Text, Image } from 'react-native';

{/* Nome de classes sempre com letra maiúscula no início! */}
class Jobs extends Component{ 
  render(){

    return(
     <View>
        <Text style={{color: 'red', fontSize: 20, textAlign:'center', marginBottom: 10}}>
            {this.props.nome}
        </Text>
        <Image 
        source={{uri: this.props.imagem}}
        style={{width: this.props.largura, height:this.props.altura}}
        />

      </View>

    );
  }
}

export default Jobs;