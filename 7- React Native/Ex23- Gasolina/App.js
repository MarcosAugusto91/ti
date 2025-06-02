import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Modal,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

//importando o componente que criamos
import Entrar from './src/entrar.js';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      alcool: '',
      gasolina: '',
      modalVisible: false,
    };

    this.entrar = this.entrar.bind(this);
    this.sair = this.sair.bind(this);
    this.salvarValores = this.salvarValores.bind(this);
    this.carregarValores = this.carregarValores.bind(this);
  }

  //Carregando os valores que estão salvos no AsyncStorage ao Montar o App
  async componentDidMount() {
    await this.carregarValores();
  }

  //Gravando os valores no AsyncStorage
  async salvarValores() {
    try {
      await AsyncStorage.setItem('alcool', this.state.alcool);
      await AsyncStorage.setItem('gasolina', this.state.gasolina);
    } catch (error) {
      console.log('Erro ao salvar valores:', error);
    }
  }

  //Carregando os valores que estão salvos no AsyncStorage
  async carregarValores() {
    try {
      const alcool = await AsyncStorage.getItem('alcool');
      const gasolina = await AsyncStorage.getItem('gasolina');
      if (alcool !== null && gasolina !== null) {
        this.setState({ alcool, gasolina });
      }
    } catch (error) {
      console.log('Erro ao carregar valores:', error);
    }
  }

  //Exibindo o modal
  entrar() {
    this.setState({ modalVisible: true });
  }

  //Ocultando o modal
  sair(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.cabecalho}>
          <Image source={require('./src/img/logo.png')} />
          <Text style={styles.titulo}>Álcool ou Gasolina?</Text>
        </View>

        <View style={styles.valores}>
          <View style={styles.alcool}>
            <Text style={styles.textoAlcool}>Álcool</Text>
            <Text style={styles.textoAlcool2}>(Preço por litro):</Text>
          </View>
          <TextInput
            style={styles.inputAlcool}
            keyboardType="numeric"
            value={this.state.alcool}
            onChangeText={(texto) => {
              this.setState({ alcool: texto }, this.salvarValores);
            }}
          />

          <View style={styles.gasolina}>
            <Text style={styles.textoGasolina}>Gasolina</Text>
            <Text style={styles.textoGasolina2}>(Preço por litro):</Text>
          </View>
          <TextInput
            style={styles.inputGasolina}
            keyboardType="numeric"
            value={this.state.gasolina}
            onChangeText={(texto) => {
              this.setState({ gasolina: texto }, this.salvarValores);
            }}
          />

          {/* Botão Calcular que exibe o Modal*/}
          <TouchableOpacity style={styles.calcular} onPress={this.entrar}>
            <Text style={styles.textoCalcular}>Calcular</Text>
          </TouchableOpacity>
        </View>

        <Modal transparent={true} animationType="slide" visible={this.state.modalVisible}>
          <View style={{ margin: 15, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            
            {/* Ao chamarmos o componente Entrar, passamos junto os valores para o componente Filho */}
            <Entrar
              fechar={() => this.sair(false)}
              alcool={this.state.alcool}
              gasolina={this.state.gasolina}
            />
          </View>
        </Modal>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2B373D',
    paddingTop: 60,
  },
  cabecalho: {
    alignItems: 'center',
  },
  titulo: {
    marginTop: 10,
    fontWeight: '700',
    fontSize: 25,
    color: '#FFF',
  },
  alcool: {
    flexDirection: 'row',
    marginBottom: 2,
  },
  gasolina: {
    flexDirection: 'row',
    marginBottom: 2,
  },
  valores: {
    margin: 25,
    marginTop: 40,
  },
  textoAlcool: {
    color: '#EF4130',
    marginRight: 5,
    fontSize: 14,
    fontWeight: '500',
  },
  textoGasolina: {
    color: '#EF4130',
    marginRight: 5,
    fontSize: 14,
    fontWeight: '500',
  },
  textoAlcool2: {
    color: '#FFF',
    marginRight: 5,
    fontSize: 14,
    fontWeight: '500',
  },
  textoGasolina2: {
    color: '#FFF',
    marginRight: 5,
    fontSize: 14,
    fontWeight: '500',
  },
  inputAlcool: {
    backgroundColor: '#FFF',
    width: 350,
    borderRadius: 3,
    marginBottom: 10,
    padding: 8,
  },
  inputGasolina: {
    backgroundColor: '#FFF',
    width: 350,
    borderRadius: 3,
    marginBottom: 10,
    padding: 8,
  },
  calcular: {
    backgroundColor: '#EF4130',
    height: 40,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    width: 350,
    marginTop: 10,
  },
  textoCalcular: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '500',
  },
});

export default App;
