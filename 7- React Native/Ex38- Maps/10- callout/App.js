
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import Pin from './img/Pin';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      region:null,
      markers:[
        {key: 0, aviso:'Cuidado', coords:{latitude:-20.4695225,longitude:-54.6016767}, pinColor:'red' },
        {key: 1, aviso:'Tranquilo', coords:{latitude:-20.4675225,longitude:-54.6036767}, pinColor:'green' },
        {key: 2, aviso:'Cuidado', coords:{latitude:-20.4665225,longitude:-54.6006767}, pinColor:'red' }
      ],
    };

  }


  async componentDidMount(){
      await navigator.geolocation.getCurrentPosition(
        async ({ coords:{latitude, longitude} })=>{
          this.setState({
            region:{
              latitude,
              longitude,
              latitudeDelta:0.0015,
              longitudeDelta:0.0121
            },
          });
        },
        ()=>{}, //Erro
        {
           timeout: 3000,
           maximumAge: 2000,
        }
      )
  }

  


  render() {
    const {region, markers} = this.state;

    return (
      <View style={styles.container}>

        <MapView
          ref={(map)=>{this.map = map}}
          style={styles.mapa}
          region={region}
          loadingEnabled
          showsUserLocation>
          
          {
             markers.map((marker)=>{
             return(
                <Marker key={marker.key} coordinate={marker.coords} onPress={this.entrar}>
                  <Pin aviso={marker.aviso} corFundo={marker.pinColor}/>
                  <Callout tooltip={true}>
                    <View style={{backgroundColor:'#DDD', width:200, height:200}}>
                      <Text style={{fontSize:18}}>Olá Mundo!</Text>
                    </View>
                  </Callout>
                </Marker>
             );
           })
           } 
          </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  mapa:{
    width:'100%',
    height:550,
    marginTop: 15
  }
});
