import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import MapView from 'react-native-maps'; 

/* 
  Guarujá: latitude: -23.9904196,
           longitude:-46.2886498,

  Machu Picchu: latitude:  -13.1631988
                longitude: -72.5452621
*/


export default class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      region:{
        latitude: -23.9904196,
        longitude:-46.2886498,
        latitudeDelta:0.0922,
        longitudeDelta:0.0421    
      }
    };

    this.trocarCidade = this.trocarCidade.bind(this);
  }

  trocarCidade(latitude, longitude){
    let state = this.state;
    let region = {
        latitude: latitude,
        longitude: longitude,
        latitudeDelta:0.0922,
        longitudeDelta:0.0421    
      }

    state.region = region;
    this.setState(state);
  }

  render(){
    //Desconstruindo a state region
    const{region} = this.state;

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>As 7 maravilhas do mundo moderno</Text>
      
      <View style={{flexDirection:'row'}}>
        <TouchableOpacity style={styles.botao} title='Cristo Redentor'      onPress={() => {this.trocarCidade(-22.951916,-43.282585)}}> 
          <Text style={styles.textoBotao}>Cristo Redentor</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.botao} title='Machu Picchu' onPress={() => {this.trocarCidade(-13.1631988, -72.5452621)}}>
          <Text style={styles.textoBotao}>Machu Picchu</Text>
        </TouchableOpacity> 

        <TouchableOpacity style={styles.botao} title='Chichén Itzá' onPress={() => {this.trocarCidade(20.6842899,-88.5703575,17)}}>
          <Text style={styles.textoBotao}>Chichén Itzá</Text>
        </TouchableOpacity>        
      </View>

      <View style={{flexDirection:'row'}}>
        <TouchableOpacity style={styles.botao} title='Coliseu' onPress={() => {this.trocarCidade(41.8902142,12.489656,17)}}>
          <Text style={styles.textoBotao}>Coliseu</Text>
        </TouchableOpacity> 

        <TouchableOpacity style={styles.botao} title='Petra' onPress={() => {this.trocarCidade(30.3206623,35.4625554,14)}}>
          <Text style={styles.textoBotao}>Petra</Text>
        </TouchableOpacity>     

        <TouchableOpacity style={styles.botao} title='Taj Mahal' onPress={() => {this.trocarCidade(27.1751495,78.0395673,17)}}>
          <Text style={styles.textoBotao}>Taj Mahal</Text>
        </TouchableOpacity>   

        <TouchableOpacity style={styles.botao} title='Muralhas da China' onPress={() => {this.trocarCidade(40.4319118,116.5678,17)}}>
          <Text style={styles.textoBotao}>Muralhas da China</Text>
        </TouchableOpacity>  
      </View>
      
      <MapView
        style={styles.mapa}
        region={region}
      />

            <Text>{region.latitude} | {region.longitude} </Text>

      <StatusBar style="auto" />
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo:{
    marginBottom: 10,
    fontWeight:'900',
    fontSize:18
  },
  mapa:{
    width:'100%',
    height:550
  },
  botao:{
    margin:10,
    padding:10,
    backgroundColor:'gray',
    borderRadius:3
  },
  textoBotao:{
    color: 'white'
  }
});
