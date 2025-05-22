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
  ScrollView,
} from 'react-native';
import MapView, { Marker } from 'react-native-maps'; //Importando componente para usar o MAPVIEW
import * as Location from 'expo-location'; //Importando componente para acessar localização do gps
import MapViewDirections from 'react-native-maps-directions'; //Importando componente para construção das rotas

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      region: null,
      destLocation: null,
      lat: '',
      long: '',

      //Objeto que contém todos meus marcadores e onde será adicionado os novos
      markers: [
        { key: 0, coords: { latitude: -22.951916, longitude: -43.282585 }, title: 'Cristo Redentor', description: 'Estátua de Jesus Cristo com 30 metros de altura.' },
        { key: 1, coords: { latitude: -13.1631988, longitude: -72.5452621 }, title: 'Machu Picchu', description: 'Antiga cidade inca nos Andes peruanos, altitude: 2400m.' },
        { key: 2, coords: { latitude: 20.68302305, longitude: -88.56869732 }, title: 'Chichén Itzá', description: 'Antiga cidade maia localizada na Península de Yucatán.' },
        { key: 3, coords: { latitude: 41.89022444, longitude: 12.49230047 }, title: 'Coliseu', description: 'Anfiteatro romano situado no centro de Roma, na Itália.' },
        { key: 4, coords: { latitude: 30.3206623, longitude: 35.4625554 }, title: 'Petra', description: 'Cidade arqueológica em rochas rosadas no deserto.' },
        { key: 5, coords: { latitude: 27.1751616, longitude: 78.04214274 }, title: 'Taj Mahal', description: 'Mausoléu de mármore branco construído em Agra.' },
        { key: 6, coords: { latitude: 40.4319118, longitude: 116.5678 }, title: 'Muralhas da China', description: 'Fortificação milenar com mais de 20.000km de extensão.' },
        { key: 7, coords: { latitude: 29.9752297, longitude: 31.1310329 }, title: 'Pirâmides do Egito', description: 'Sítio arqueológico com as Grandes Pirâmides, a Grande Esfinge.' }
      ],

      //Marcador da Rota
      markerRota: [],
      modalVisible: false,
      novoTitulo: '',
      novaDescricao: '',
      coordenadaTemp: null,
      distancia: null,
      duracao: null,
    };

    this.mudouMapa = this.mudouMapa.bind(this);
    this.trocarCidade = this.trocarCidade.bind(this);
    this.latitudeClicada = this.latitudeClicada.bind(this);
    this.adicionarMarcador = this.adicionarMarcador.bind(this);
    this.adicionarMarcadorDaRota = this.adicionarMarcadorDaRota.bind(this);
    this.mapRef = null; // Referência para o MapView
  }

  //FUNÇÕES---------------------------------------------------------------------------

  //Função executada na construção da tela que pede permissão para uso do gps e aplica nossa localização atual na variável REGION
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

  //FUNÇÃO PEGA A LATITUDE E LONGITUDE CLICADA, ARMAZENA EM COORDENADA TEMP E MOSTRA O MODAL PARA INSERÇÃO DO MARKER NOVO
  latitudeClicada(e) {
    const coordenada = e.nativeEvent.coordinate;
    this.setState({
      coordenadaTemp: coordenada,
      modalVisible: true
    });
  }

  //AO PREENCHERMOS A INFORMAÇÃO NO MODAL E CLICARMOS NO BOTÃO CHAMAMOS ESTA FUNÇÃO QUE CRIAR O NOVO MARCADOR COM SEUS ATRIBUTOS KEY, COORDS, TITLE E DESCRIPTION, POSTERIORMENTE O MARKERS.MAP SE ENCARREGA DE APLICA-LO NA TELA
  adicionarMarcador() {
    const { markers, coordenadaTemp, novoTitulo, novaDescricao } = this.state;

    const novoMarcador = {
      key: markers.length,
      coords: coordenadaTemp,
      title: novoTitulo || 'Sem título',
      description: novaDescricao || 'Lat: ' + coordenadaTemp.latitude + ' Long: ' + coordenadaTemp.longitude
    };

    this.setState({
      markers: [...markers, novoMarcador],  //AQUI ELE INSERE O NOVO MARCADOR NOS MARKERS
      modalVisible: false,                  //OCULTA O MODAL
      novoTitulo: '',                       //E LIMPA AS DEMAIS INFORMAÇÕES
      novaDescricao: '',
      coordenadaTemp: null
    });
  }

  adicionarMarcadorDaRota() {
    const { destLocation } = this.state;
  
    if (!destLocation) return;
  
    const novoMarcador = {
      key: 0, // Sempre 0, pois só existe 1 marcador de rota
      coords: destLocation,
      title: 'Destino Selecionado',
      description: 'Boa viagem!'
    };
  
    this.setState({
      markerRota: [novoMarcador] // Substitui qualquer marcador anterior
    });
  }

  //FUNÇÃO ARMAZENA LATITUDE E LONGITUDE TODA VEZ QUE MUDAMOS A POSIÇÃO NO MAPA
  mudouMapa(region) {
    this.setState({
      lat: region.latitude,
      long: region.longitude
    });
  }

  //FUNÇÃO QUE MUDA O LOCAL PARA MARAVILHA SELECIONADA
  trocarCidade(latitude, longitude) {
    let novaRegiao = {
      latitude: latitude,
      longitude: longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421
    };

    // Usando animateToRegion para animar a transição
    this.mapRef.animateToRegion(novaRegiao, 1500); // Tempo de animação em milissegundos (1000ms = 1 segundo)
  }

  render() {
    //REFERENCIANDO TODAS MINHAS PROPRIEDADES PARA RESUMIR O CÓDIGO
    const { region, lat, long, markers, destLocation, markerRota } = this.state;

    //VARIÁVEIS CONSTANDO OS CAMINHOS DAS IMAGENS
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
      PinCustomizado: require('./img/pin3.png'),
    }

    return (
      //ESTRUTURA----------------------------------------------------------------------
      <View style={styles.container}>

        {/* BARRA SUPERIOR COM LOGO E NOME DO APP -----------------------------------*/}
        <View style={styles.barraSuperior}>
          <Image style={styles.Logo} source={bandeiras.Logo} />
          <Text style={styles.titulo}>Maravilhas do mundo!</Text>
        </View>

        {/* MAPA DO APLICATIVO COM SUAS CONFIGURAÇÕES--------------------------------*/}
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

          {/* RODANDO TODOS MEUS MARCADORES E APLICANDO NA TELA ----------------*/}
          {markers.map((marker) => (
            <Marker
              key={marker.key}
              coordinate={marker.coords}
              title={marker.title}
              description={marker.description}
            />
          ))}

          {/* RODANDO O MARCADOR DA ROTA SELECIONADA----------------------------*/}
          {markerRota.map((markerRota) => (
            <Marker
              key={markerRota.key}
              coordinate={markerRota.coords}
              title={markerRota.title}
              description={markerRota.description}
              image={bandeiras.PinCustomizado}
            />
          ))}

          {/* CONFIGURAÇÕES PARA APLICAÇÃO DAS ROTAS TRAÇADAS ------------------*/}
          {this.state.destLocation &&
            <MapViewDirections
              origin={this.state.region} //Origem da rota
              destination={this.state.destLocation} //Destino da rota
              apikey='AIzaSyBj5M9TPhBuQSQbohgB1uDZCAkf1UKriYo' //Utilizar esta chave no máximo 1000 consultas por mês
              strokeWidth={4} //Grossura do traço da rota
              strokeColor='#7ED63F' //Cor do traço da rota
              onReady={result => {
                
                const distancia = result.distance.toFixed(2); // Ex: "10.45"
                const duracao = Math.ceil(result.duration);   // Ex: "12"
              
                // Atualiza o estado com a distância e duração
                this.setState({
                  distancia: result.distance,
                  duracao: result.duration,
                  markerRota: [{
                    key: 0,
                    coords: this.state.destLocation,
                    title: `Distância: ${distancia} km`,
                    description: `Duração: ${duracao} min`
                  }]
                });

                this.mapRef.fitToCoordinates(result.coordinates, {
                  edgePadding: {
                    right: 85,
                    left: 85,
                    top: 85,
                    bottom: 85
                  }
                })
              }}
            />

          }
        </MapView>

        {/*------------ SCROLLVIEW COM AS CIDADES DA BAIXADA PARA TRAÇAR ROTAS -----------*/}
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.box}>

          {/* SANTOS */}
          <View style={styles.localView}>
            <TouchableOpacity
              style={styles.localBtn}
              onPress={() => {
                this.setState({
                  destLocation: {
                    latitude: -23.959261,
                    longitude: -46.3319156,
                  },
                }, () => {
                  // Callback é executado depois que o estado é atualizado
                  this.adicionarMarcadorDaRota();
                });
              }}
            >
              <Text style={styles.localText}>Santos</Text>
            </TouchableOpacity>
          </View>

          {/* GUARUJÁ */}
          <View style={styles.localView}>
            <TouchableOpacity style={styles.localBtn} 
            onPress={() => {
              this.setState({
                destLocation: {
                  latitude: -23.9947943,
                  longitude: -46.2570896
                },
              }, () => {
                // Callback é executado depois que o estado é atualizado
                this.adicionarMarcadorDaRota();
              }
            );
            }}>
              <Text style={styles.localText}>Guarujá</Text>
            </TouchableOpacity>
          </View>

          {/* SÃO VICENTE */}
          <View style={styles.localView}>
            <TouchableOpacity style={styles.localBtn} onPress={() => {
              this.setState({
                destLocation: {
                  latitude: -23.9603404,
                  longitude: -46.3970159
                },
              }, () => {
                // Callback é executado depois que o estado é atualizado
                this.adicionarMarcadorDaRota();
              });
            }}>
              <Text style={styles.localText}>S. Vicente</Text>
            </TouchableOpacity>
          </View>

          {/* PRAIA GRANDE */}
          <View style={styles.localView}>
            <TouchableOpacity style={styles.localBtn} onPress={() => {
              this.setState({
                destLocation: {
                  latitude: -24.0031566,
                  longitude: -46.4179811
                }
              }, () => {
                // Callback é executado depois que o estado é atualizado
                this.adicionarMarcadorDaRota();
              }
            )
            }}>
              <Text style={styles.localText}>P. Grande</Text>
            </TouchableOpacity>
          </View>

          {/* CUBATÃO */}
          <View style={styles.localView}>
            <TouchableOpacity style={styles.localBtn} onPress={() => {
              this.setState({
                destLocation: {
                  latitude: -23.891885,
                  longitude: -46.4249356
                }
              }, () => {
                // Callback é executado depois que o estado é atualizado
                this.adicionarMarcadorDaRota();
              }
            )
            }}>
              <Text style={styles.localText}>Cubatão</Text>
            </TouchableOpacity>
          </View>

          {/* SÃO PAULO */}
          <View style={styles.localView}>
            <TouchableOpacity style={styles.localBtn} onPress={() => {
              this.setState({
                destLocation: {
                  latitude: -23.5557844,
                  longitude: -46.6396832
                }
              }, () => {
                // Callback é executado depois que o estado é atualizado
                this.adicionarMarcadorDaRota();
              }
            )
            }}>
              <Text style={styles.localText}>São Paulo</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>


        {/*------------ VIEWS COM BOTÕES DAS MARAVILHAS DO MUNDO ------------*/}
        <View style={styles.container2}>
          <TouchableOpacity style={styles.botao} onPress={() => { this.trocarCidade(markers[0].coords.latitude, markers[0].coords.longitude) }}>
            <Image style={styles.bandeira} source={bandeiras.Brasil} />
            <Text style={styles.textoBotao}>Cristo Redentor</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao} onPress={() => { this.trocarCidade(markers[1].coords.latitude, markers[1].coords.longitude) }}>
            <Image style={styles.bandeira} source={bandeiras.Peru} />
            <Text style={styles.textoBotao}>Machu Picchu</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.container2}>
          <TouchableOpacity style={styles.botao} onPress={() => { this.trocarCidade(markers[2].coords.latitude, markers[2].coords.longitude) }}>
            <Image style={styles.bandeira} source={bandeiras.México} />
            <Text style={styles.textoBotao}>Chichén Itzá</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao} onPress={() => { this.trocarCidade(markers[3].coords.latitude, markers[3].coords.longitude) }}>
            <Image style={styles.bandeira} source={bandeiras.Italia} />
            <Text style={styles.textoBotao}>Coliseu</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.container2}>
          <TouchableOpacity style={styles.botao} onPress={() => { this.trocarCidade(markers[4].coords.latitude, markers[4].coords.longitude) }}>
            <Image style={styles.bandeira} source={bandeiras.Jordânia} />
            <Text style={styles.textoBotao}>Petra</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao} onPress={() => { this.trocarCidade(markers[5].coords.latitude, markers[5].coords.longitude) }}>
            <Image style={styles.bandeira} source={bandeiras.Índia} />
            <Text style={styles.textoBotao}>Taj Mahal</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.container2}>
          <TouchableOpacity style={styles.botao} onPress={() => { this.trocarCidade(markers[6].coords.latitude, markers[6].coords.longitude) }}>
            <Image style={styles.bandeira} source={bandeiras.China} />
            <Text style={styles.textoBotao}>Muralhas da China</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao} onPress={() => { this.trocarCidade(markers[7].coords.latitude, markers[7].coords.longitude) }}>
            <Image style={styles.bandeira} source={bandeiras.Egito} />
            <Text style={styles.textoBotao}>Pirâmides do Egito</Text>
          </TouchableOpacity>
        </View>


        {/*------------ MODAL DE ADIÇÃO DE MARCADOR ------------*/}
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


        {/*------------ RODAPÉ ------------*/}

        <View style={styles.rodape}>
          <Text style={{ color: 'white' }}>Latitude: {lat} </Text>
          <Text style={{ color: 'white' }}>Longitude: {long} </Text>
        </View>

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
    marginTop: -10,
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
