import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Button
} from 'react-native';
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
        { key: 0, coords: { latitude: -22.951916, longitude: -43.282585 }, title: 'Cristo Redentor', description: 'Estátua de Jesus Cristo com 30 metros de altura.' },
        { key: 1, coords: { latitude: -13.1631988, longitude: -72.5452621 }, title: 'Machu Picchu', description: 'Antiga cidade inca nos Andes peruanos, altitude: 2400m.' },
        { key: 2, coords: { latitude: 20.68302305, longitude: -88.56869732 }, title: 'Chichén Itzá', description: 'Antiga cidade maia localizada na Península de Yucatán.' },
        { key: 3, coords: { latitude: 41.89022444, longitude: 12.49230047 }, title: 'Coliseu', description: 'Anfiteatro romano situado no centro de Roma, na Itália.' },
        { key: 4, coords: { latitude: 30.3206623, longitude: 35.4625554 }, title: 'Petra', description: 'Cidade arqueológica em rochas rosadas no deserto.' },
        { key: 5, coords: { latitude: 27.1751616, longitude: 78.04214274 }, title: 'Taj Mahal', description: 'Mausoléu de mármore branco construído em Agra.' },
        { key: 6, coords: { latitude: 40.4319118, longitude: 116.5678 }, title: 'Muralhas da China', description: 'Fortificação milenar com mais de 20.000km de extensão.' },       
        { key: 7, coords: { latitude: 29.9752297, longitude: 31.1310329 }, title: 'Pirâmides do Egito', description:'Sítio arqueológico com as Grandes Pirâmides, a Grande Esfinge.' }
      ],
      modalVisible: false,
      novoTitulo: '',
      novaDescricao: '',
      coordenadaTemp: null
    };

    this.mudouMapa = this.mudouMapa.bind(this);
    this.trocarCidade = this.trocarCidade.bind(this);
    this.latitudeClicada = this.latitudeClicada.bind(this);
    this.adicionarMarcador = this.adicionarMarcador.bind(this);
    this.mapRef = null; // Referência para o MapView
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
    const coordenada = e.nativeEvent.coordinate;
    this.setState({
      coordenadaTemp: coordenada,
      modalVisible: true
    });
  }

  adicionarMarcador() {
    const { markers, coordenadaTemp, novoTitulo, novaDescricao } = this.state;

    const novoMarcador = {
      key: markers.length,
      coords: coordenadaTemp,
      title: novoTitulo || 'Sem título',
      description: novaDescricao || 'Sem descrição'
    };

    this.setState({
      markers: [...markers, novoMarcador],
      modalVisible: false,
      novoTitulo: '',
      novaDescricao: '',
      coordenadaTemp: null
    });
  }

  mudouMapa(region) {
    this.setState({
      lat: region.latitude,
      long: region.longitude
    });
  }

  trocarCidade(latitude, longitude) {
    let novaRegiao = {
      latitude: latitude,
      longitude: longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421
    };

    // Usando animateToRegion para animar a transição
    this.mapRef.animateToRegion(novaRegiao, 2000); // Tempo de animação em milissegundos (1000ms = 1 segundo)
  }

  render() {
    const { region, lat, long, markers } = this.state;

    const bandeiras = {
      Brasil: require('./img/brasil.jpg'),
      Peru: require('./img/peru.png'),
      México: require('./img/mexico.png'),
      Italia: require('./img/italia.png'),
      Jordânia: require('./img/jordania.png'),
      Índia: require('./img/india.png'),
      China: require('./img/china.png'),
      Egito: require('./img/egito.png'),
    }

    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>As 7 maravilhas do mundo moderno +1</Text>

        <MapView
          ref={(ref) => { this.mapRef = ref; }} // Definindo a referência do MapView
          style={styles.mapa}
          region={region}
          showsUserLocation
          loadingEnabled
          mapType='hybrid'
          showsTraffic={true}
          onRegionChange={this.mudouMapa}
          onPress={this.latitudeClicada}
        >
          {markers.map((marker) => (
            <Marker
              key={marker.key}
              coordinate={marker.coords}
              title={marker.title}
              description={marker.description}
            />
          ))}
        </MapView>

        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={styles.botao} onPress={() => { this.trocarCidade(markers[0].coords.latitude, markers[0].coords.longitude) }}>
            <Image style={styles.bandeira} source={bandeiras.Brasil} />
            <Text style={styles.textoBotao}>Cristo Redentor</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao} onPress={() => { this.trocarCidade(markers[1].coords.latitude, markers[1].coords.longitude) }}>
            <Image style={styles.bandeira} source={bandeiras.Peru} />
            <Text style={styles.textoBotao}>Machu Picchu</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={styles.botao} onPress={() => { this.trocarCidade(markers[2].coords.latitude, markers[2].coords.longitude) }}>
            <Image style={styles.bandeira} source={bandeiras.México} />
            <Text style={styles.textoBotao}>Chichén Itzá</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao} onPress={() => { this.trocarCidade(markers[3].coords.latitude, markers[3].coords.longitude) }}>
            <Image style={styles.bandeira} source={bandeiras.Italia} />
            <Text style={styles.textoBotao}>Coliseu</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={styles.botao} onPress={() => { this.trocarCidade(markers[4].coords.latitude, markers[4].coords.longitude) }}>
            <Image style={styles.bandeira} source={bandeiras.Jordânia} />
            <Text style={styles.textoBotao}>Petra</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao} onPress={() => { this.trocarCidade(markers[5].coords.latitude, markers[5].coords.longitude) }}>
            <Image style={styles.bandeira} source={bandeiras.Índia} />
            <Text style={styles.textoBotao}>Taj Mahal</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={styles.botao} onPress={() => { this.trocarCidade(markers[6].coords.latitude, markers[6].coords.longitude) }}>
            <Image style={styles.bandeira} source={bandeiras.China} />
            <Text style={styles.textoBotao}>Muralhas da China</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao} onPress={() => { this.trocarCidade(markers[7].coords.latitude, markers[7].coords.longitude) }}>
            <Image style={styles.bandeira} source={bandeiras.Egito} />
            <Text style={styles.textoBotao}>Pirâmides do Egito</Text>
          </TouchableOpacity>

        </View>

        {/* MODAL DE ADIÇÃO DE MARCADOR */}
        {this.state.modalVisible && (
          <View style={styles.modalView}>
            <Text style={{ fontWeight: 'bold', fontSize: 16, marginBottom: 10 }}>Novo Marcador</Text>
            <TextInput
              placeholder="Título"
              value={this.state.novoTitulo}
              onChangeText={(text) => this.setState({ novoTitulo: text })}
              style={styles.input}
            />
            <TextInput
              placeholder="Descrição"
              value={this.state.novaDescricao}
              onChangeText={(text) => this.setState({ novaDescricao: text })}
              style={styles.input}
            />
            <Button title="Adicionar Marcador" onPress={this.adicionarMarcador} />
          </View>
        )}

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
    fontSize: 18,
    width:'95%',
    textAlign:'center',
    backgroundColor:'black',
    color:'white',
    marginBottom:0
  },
  mapa: {
    width: '95%',
    height: 400
  },
  botao: {
    margin: 10,
    padding: 8,
    backgroundColor: 'silver',
    width: 170,
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
  },
  modalView: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 10
  },
  input: {
    borderBottomWidth: 1,
    marginBottom: 10,
    height: 40
  }
});
