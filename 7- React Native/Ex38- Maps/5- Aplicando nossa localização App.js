import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      region: null,
      lat: '',
      long: '',
      markers: [
        { key: 0, coords: { latitude: -22.951916, longitude: -43.282585 } },
        { key: 1, coords: { latitude: -13.1631988, longitude: -72.5452621 } },
        { key: 2, coords: { latitude: 20.68302305, longitude: -88.56869732 } },
        { key: 3, coords: { latitude: 41.89022444, longitude: 12.49230047 } },
        { key: 4, coords: { latitude: 30.3206623, longitude: 35.4625554 } },
        { key: 5, coords: { latitude: 27.1751616, longitude: 78.04214274 } },
        { key: 6, coords: { latitude: 40.4319118, longitude: 116.5678 } }
      ]
    };

    this.mudouMapa = this.mudouMapa.bind(this);
    this.trocarCidade = this.trocarCidade.bind(this);
    this.latitudeClicada = this.latitudeClicada.bind(this);
  }

  // async componentDidMount(){
  //   await navigator.geolocation.getCurrentPosition(
  //   async ({ coords:{latitude,longitude} }) => {
  //       this.setState({
  //         region:{
  //           latitude,
  //           longitude,
  //           latitudeDelta:0.0922,
  //           longitudeDelta:0.0421
  //         }
  //       });
  //     },
  //     () =>{ }, //ERRO
  //     {
  //       timeout:2000,
  //       maximumAge:1000,
  //     }
  //   )
  // }

  async componentDidMount() {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      alert('Permissão de localização negada');
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    const { latitude, longitude } = location.coords;

    this.setState({
      region: {
        latitude,
        longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }
    });
  }

  adicionarPin(e) {
  }

  latitudeClicada(e) {
    alert('Latitude:  ' + e.nativeEvent.coordinate.latitude + '  Longitude: ' + e.nativeEvent.coordinate.longitude);

    let state = this.state;
    state.markers.push({
      key: state.markers.length,
      coords: {
        latitude: e.nativeEvent.coordinate.latitude,
        longitude: e.nativeEvent.coordinate.longitude
      }
    })
    this.setState(state);
  }

  mudouMapa(region) {
    let state = this.state;
    state.lat = region.latitude;
    state.long = region.longitude;
    this.setState(state);
  }

  trocarCidade(latitude, longitude) {
    let state = this.state;
    let region = {
      latitude: latitude,
      longitude: longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421
    }

    state.region = region;
    this.setState(state);
  }

  render() {
    //Desconstruindo a state region   
    const { region, lat, long, markers } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>As 7 maravilhas do mundo moderno</Text>

        <Text>Latitude: {lat} </Text>
        <Text>Longitude: {long} </Text>

        <MapView
          style={styles.mapa}
          region={region}
          showsUserLocation
          loadingEnabled
          //minZoomLevel={5}
          mapType='hybrid'
          showsTraffic={true}
          //onMapReady={()=>{alert('Bem vindo as 7 Maravilhas do mundo moderno!')}} //Quando termina de carregar o mapa
          onRegionChange={this.mudouMapa} //Quando alteramos a posição no mapa
          //onRegionChangeComplete={this.mudouMapa} //Quando terminamos de mudar a posição no mapa
          onPress={this.latitudeClicada}
        >

          {markers.map((marker) => {
            return (
              <Marker
                key={marker.key}
                coordinate={marker.coords} />
            );
          })}

        </MapView>

        {/* <Text>{region.latitude} | {region.longitude} </Text> */}

        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={styles.botao} title='Cristo Redentor' onPress={() => { this.trocarCidade(-22.951916, -43.282585) }}>
            <Text style={styles.textoBotao}>Cristo Redentor</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao} title='Machu Picchu' onPress={() => { this.trocarCidade(-13.1631988, -72.5452621) }}>
            <Text style={styles.textoBotao}>Machu Picchu</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao} title='Chichén Itzá' onPress={() => { this.trocarCidade(20.68302305, -88.56869732) }}>
            <Text style={styles.textoBotao}>Chichén Itzá</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={styles.botao} title='Coliseu' onPress={() => { this.trocarCidade(41.89022444, 12.49230047) }}>
            <Text style={styles.textoBotao}>Coliseu</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao} title='Petra' onPress={() => { this.trocarCidade(30.3206623, 35.4625554, 14) }}>
            <Text style={styles.textoBotao}>Petra</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao} title='Taj Mahal' onPress={() => { this.trocarCidade(27.1751616, 78.04214274) }}>
            <Text style={styles.textoBotao}>Taj Mahal</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao} title='Muralhas da China' onPress={() => { this.trocarCidade(40.4319118, 116.5678, 17) }}>
            <Text style={styles.textoBotao}>Muralhas da China</Text>
          </TouchableOpacity>
        </View>

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
  titulo: {
    marginBottom: 10,
    fontWeight: '900',
    fontSize: 18
  },
  mapa: {
    width: '100%',
    height: 550
  },
  botao: {
    margin: 10,
    padding: 8,
    backgroundColor: 'gray',
    width: 75,
    justifyContent: 'center',
    borderRadius: 3
  },
  textoBotao: {
    color: 'white',
    textAlign: 'center',
  }
});
