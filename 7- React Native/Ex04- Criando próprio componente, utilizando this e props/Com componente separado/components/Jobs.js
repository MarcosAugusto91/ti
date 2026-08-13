import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

class Jobs extends Component {
  render() {
    let imagem = 'https://reactnative.dev/img/tiny_logo.png';

    return (
      <View>
        <Text style={{color: 'red', fontSize: 20, textAlign: 'center', marginBottom: 10}}>
          {this.props.nome}
        </Text>
        <Image 
          source={{uri: imagem}}
          style={{width: this.props.largura, height: this.props.altura}}
        />
      </View>
    );
  }
}

export default Jobs;
