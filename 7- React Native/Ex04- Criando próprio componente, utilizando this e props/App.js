import React, {Component} from 'react';
import { View, Text, Image } from 'react-native';
import Jobs from './components/Jobs';

class App extends Component{

  render(){
    let nome = 'Steve Jobs';
    let imagem = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_kAv6dkeyo8SGLY6qMo5nPOUqfX9MqX7ZBE8npIvQ1OZ4e-BoEfPPrKuKS2gvu46VruTx9HJDbz11v_qJZ-hg5MDycbhfZoplqhJb9eg&s=10';

    return(
      <View style={{flex:1, alignItems:"center", marginTop:20}}>
        <Text style={{marginTop:35}}>Olá
        </Text>

        <Jobs largura={250} altura={100} nome={nome} imagem={imagem}/>
      </View>
    );
  }
}

export default App;