import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Button,
  ScrollView
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import MapViewDirections from 'react-native-maps-directions';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      region: null,
      destLocation: null,
      lat: '',
      long: '',
      enderecoDigitado: '',

      markerRota: [],
      modalVisible: false,
      novoTitulo: '',
      novaDescricao: '',
      coordenadaTemp: null,
      distancia: null,
      duracao: null
    };

    this.adicionarMarcadorDaRota = this.adicionarMarcadorDaRota.bind(this);
    this.tracarRotaParaEndereco = this.tracarRotaParaEndereco.bind(this);
    this.mapRef = null;
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

  adicionarMarcadorDaRota() {
    const { destLocation } = this.state;
    if (!destLocation) return;

    const novoMarcador = {
      key: 0,
      coords: destLocation,
      title: 'Destino Selecionado',
      description: 'Boa viagem!'
    };

    this.setState({
      markerRota: [novoMarcador]
    });
  }

  async tracarRotaParaEndereco() {
    const { enderecoDigitado } = this.state;

    if (!enderecoDigitado.trim()) {
      alert('Digite um endereço válido.');
      return;
    }

    try {
      const geocodedLocation = await Location.geocodeAsync(enderecoDigitado);

      if (geocodedLocation.length === 0) {
        alert('Endereço não encontrado.');
        return;
      }

      const { latitude, longitude } = geocodedLocation[0];

      this.setState(
        {
          destLocation: { latitude, longitude }
        },
        () => {
          this.adicionarMarcadorDaRota();
        }
      );
    } catch (error) {
      console.error(error);
      alert('Erro ao buscar localização. Verifique o endereço e tente novamente.');
    }
  }

  render() {
    const { region, lat, long, markers, destLocation, markerRota, enderecoDigitado } = this.state;

    const bandeiras = {
      Brasil: require('./img/brasil.jpg'),
      Peru: require('./img/peru.png'),
      México: require('./img/mexico.png'),
      Italia: require('./img/italia.png'),
      Jordânia: require('./img/jordania.png'),
      Índia: require('./img/india.png'),
      China: require('./img/china.png'),
      Egito: require('./img/egito.png'),
      Logo: require('./img/monumento.png'),
      PinCustomizado: require('./img/pin3.png')
    };

    return (
      <View style={styles.container}>
        <View style={styles.barraSuperior}>
          <Image style={styles.Logo} source={bandeiras.Logo} />
          <Text style={styles.titulo}>Maravilhas do mundo!</Text>
        </View>

        <MapView
          ref={(ref) => { this.mapRef = ref; }}
          style={styles.mapa}
          region={region}
          showsUserLocation
          loadingEnabled
          mapType='hybrid'
          showsTraffic={true}
          onRegionChange={this.mudouMapa}
          onPress={this.latitudeClicada}
        >
          {markerRota.map((markerRota) => (
            <Marker
              key={markerRota.key}
              coordinate={markerRota.coords}
              title={markerRota.title}
              description={markerRota.description}
              image={bandeiras.PinCustomizado}
            />
          ))}

          {destLocation && (
            <MapViewDirections
              origin={region}
              destination={destLocation}
              apikey='AIzaSyBj5M9TPhBuQSQbohgB1uDZCAkf1UKriYo'
              strokeWidth={4}
              strokeColor='#7ED63F'
              onReady={result => {
                const distancia = result.distance.toFixed(2);
                const duracao = Math.ceil(result.duration);
                this.setState({
                  distancia: result.distance,
                  duracao: result.duration,
                  markerRota: [{
                    key: 0,
                    coords: destLocation,
                    title: `Distância: ${distancia} km`,
                    description: `Duração: ${duracao} min`
                  }]
                });

                this.mapRef.fitToCoordinates(result.coordinates, {
                  edgePadding: {
                    right: 85, left: 85, top: 85, bottom: 85
                  }
                });
              }}
            />
          )}
        </MapView>

        {/* CAMPO DE DIGITAÇÃO DE ENDEREÇO */}
        <View style={{ padding: 10, width: '100%', backgroundColor: '#f2f2f2' }}>
          <TextInput
            placeholder="Digite o endereço de destino"
            value={enderecoDigitado}
            onChangeText={(text) => this.setState({ enderecoDigitado: text })}
            style={{ backgroundColor: 'white', padding: 10, borderRadius: 5, marginBottom: 5 }}
          />
          <Button title="Traçar rota" onPress={this.tracarRotaParaEndereco} />
        </View>

        {/* Você pode manter o restante da UI conforme já estava implementado, inclusive os botões das cidades, rodapé, e modal */}
        
        <StatusBar style="auto" />
      </View>
    );
  }
}

{/* ---------------------------------------------------------------------------------------------------------- */ }

//Criação dos estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: '#1D2935',
  },
  barraSuperior: {
    display: 'flex',
    flexDirection: 'row',
    padding: 5,
    gap: 10,
    width: '100%',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1D2935',
    marginTop: -150,
    height: 70
  },
  Logo: {
    width: 50,
    height: 50,
  },
  titulo: {
    fontWeight: '900',
    fontSize: 23,
    color: 'white',
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
  },
  mapa: {
    width: '100%',
    height: 400
  },
  botao: {
    margin: 10,
    padding: 8,
    backgroundColor: 'white',
    width: 170,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderRadius: 3,
    gap: 3
  },
  textoBotao: {
    color: '#gray',
    textAlign: 'center',
  },
  bandeira: {
    width: 30,
    height: 20,
  },
  modalView: {
    position: 'absolute',
    bottom: 110,
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
  },
  rodape: {
    paddingTop: 5,
    paddingBottom: 5,
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'black',
  },
  box: {
    position: 'absolute',
    top: 465,
  },
  localView: {
    height: 40,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5
  },
  localBtn: {
    backgroundColor: '#7ED63F',
    height: 40,
    padding: 7,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4
  },
  localText: {
    color: 'white',
    width: 75,
    textAlign: 'center',
    fontSize:16
    
  }
});