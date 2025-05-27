import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
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
        { key: 0, coords: { latitude: -22.951916, longitude:   -43.282585 }, title:'Cristo Redentor', description:'Estátua de Jesus Cristo com 30 metros de altura.'},
        { key: 1, coords: { latitude: -13.1631988, longitude:  -72.5452621}, title:'Machu Picchu', description:'Antiga cidade inca nos Andes peruanos, altitude: 2400m.'},
        { key: 2, coords: { latitude: 20.68302305, longitude: -88.56869732}, title:'Chichén Itzá', description:'Antiga cidade maia localizada na Península de Yucatán.'},
        { key: 3, coords: { latitude: 41.89022444, longitude: 12.49230047 }, title:'Coliseu' , description:'Anfiteatro romano situado no centro de Roma, na Itália.'},
        { key: 4, coords: { latitude: 30.3206623, longitude:   35.4625554 }, title:'Petra', description:'Cidade arqueológica em rochas rosadas no deserto.' },
        { key: 5, coords: { latitude: 27.1751616, longitude:  78.04214274 }, title:'Taj Mahal', description:'Mausoléu de mármore branco construído em Agra.'},
        { key: 6, coords: { latitude: 40.4319118, longitude:     116.5678 }, title:'Muralhas da China', description:'Fortificação milenar com mais de 20.000km de extensão.'}
      ]
    };

    this.mudouMapa = this.mudouMapa.bind(this);
    this.trocarCidade = this.trocarCidade.bind(this);
    this.latitudeClicada = this.latitudeClicada.bind(this);
  }

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

  latitudeClicada(e) {
    alert('Latitude:  ' + e.nativeEvent.coordinate.latitude + '  Longitude: ' + e.nativeEvent.coordinate.longitude);

    let state = this.state;
    state.markers.push({
      key: state.markers.length,
      coords: {
        latitude: e.nativeEvent.coordinate.latitude,
        longitude: e.nativeEvent.coordinate.longitude
      },
      title: 'Latitude / Longitude',
      description: e.nativeEvent.coordinate.latitude + ' / ' + e.nativeEvent.coordinate.longitude
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

    const bandeiras = {
      Brasil: require('./img/brasil.jpg'),
      Peru: require('./img/peru.png'),
      México: require('./img/mexico.png'),
      Italia: require('./img/italia.png'),
      Jordânia: require('./img/jordania.png'),
      Índia: require('./img/india.png'),
      China: require('./img/china.png'),
    }

    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>As 7 maravilhas do mundo moderno</Text>

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
                coordinate={marker.coords} 
                title={marker.title}
                description={marker.description}
                />
            );
          })}

        </MapView>

        {/* <Text>{region.latitude} | {region.longitude} </Text> */}

        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={styles.botao} title='Cristo Redentor' onPress={() => { this.trocarCidade(markers[0].coords.latitude,markers[0].coords.longitude) }}>
            <Image style={styles.bandeira} source={bandeiras.Brasil} />
            <Text style={styles.textoBotao}>Cristo Redentor</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao} title='Machu Picchu' onPress={() => { this.trocarCidade(markers[1].coords.latitude,markers[1].coords.longitude) }}>
            <Image style={styles.bandeira} source={bandeiras.Peru} />
            <Text style={styles.textoBotao}>Machu Picchu</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={styles.botao} title='Chichén Itzá' onPress={() => { this.trocarCidade(markers[2].coords.latitude,markers[2].coords.longitude) }}>
            <Image style={styles.bandeira} source={bandeiras.México} />
            <Text style={styles.textoBotao}>Chichén Itzá</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao} title='Coliseu' onPress={() => { this.trocarCidade(markers[3].coords.latitude,markers[3].coords.longitude) }}>
            <Image style={styles.bandeira} source={bandeiras.Italia} />
            <Text style={styles.textoBotao}>Coliseu</Text>
          </TouchableOpacity>

        </View>

        <View style={{ flexDirection: 'row' }}>

          <TouchableOpacity style={styles.botao} title='Petra' onPress={() => { this.trocarCidade(markers[4].coords.latitude,markers[4].coords.longitude) }}>
            <Image style={styles.bandeira} source={bandeiras.Jordânia} />
            <Text style={styles.textoBotao}>Petra</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao} title='Taj Mahal' onPress={() => { this.trocarCidade(markers[5].coords.latitude,markers[5].coords.longitude) }}>
            <Image style={styles.bandeira} source={bandeiras.Índia} />
            <Text style={styles.textoBotao}>Taj Mahal</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.botao} title='Muralhas da China' onPress={() => { this.trocarCidade(markers[6].coords.latitude,markers[6].coords.longitude) }}>
          <Image style={styles.bandeira} source={bandeiras.China} />
          <Text style={styles.textoBotao}>Muralhas da China</Text>
        </TouchableOpacity>

        <StatusBar style="auto" />

        <Text>Latitude: {lat} </Text>
        <Text>Longitude: {long} </Text>

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
    marginTop: 10,
    marginBottom: 10,
    fontWeight: '900',
    fontSize: 18
  },
  mapa: {
    width: '95%',
    height: 400
  },
  botao: {
    margin: 10,
    padding: 8,
    backgroundColor: 'silver',
    width: 165,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderRadius: 3,
    gap: 3
  },
  textoBotao: {
    color: 'black',
    textAlign: 'center',
  },
  bandeira: {
    width: 30,
    height: 20,
  }
});
