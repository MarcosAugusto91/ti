import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default class Entrar extends Component {
  
  //Função calcula qual a melhor opção Álcool ou Gasolina
  calcularMelhorOpcao() {
    const alcool = parseFloat(this.props.alcool);
    const gasolina = parseFloat(this.props.gasolina);

    if (isNaN(alcool) || isNaN(gasolina)) {
      return {
        melhor: 'Valores inválidos!',
        explicacao: '',
      };
    }

    const resultado = alcool / gasolina;

    if (resultado < 0.7) {
      return {
        melhor: 'Álcool',
        explicacao:
          'O álcool é mais vantajoso porque custa menos de 70% do preço da gasolina. Isso significa que, mesmo com menor rendimento, o custo-benefício é melhor.',
      };
    } else {
      return {
        melhor: 'Gasolina',
        explicacao:
          'A gasolina é mais vantajosa porque o álcool custa mais de 70% do preço da gasolina. Nesse caso, a gasolina compensa mais pelo rendimento superior.',
      };
    }
  }

  render() {
    //Recebendo os valores da Props
    const { alcool, gasolina } = this.props;
    const resultado = this.calcularMelhorOpcao();

    return (
      <View style={styles.container}>
        <Image source={require('./img/gas.png')} />

        <View style={styles.valores}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.compensa}>Compensa usar</Text>
            <Text style={styles.compensaResultado}>{resultado.melhor}</Text>
          </View>

          {resultado.explicacao !== '' && (
            <Text style={styles.explicacao}>{resultado.explicacao}</Text>
          )}

          <Text style={styles.tituloPrecos}>Com os preços:</Text>
          <Text style={styles.precos}>Álcool: R$ {parseFloat(alcool).toFixed(2)}</Text>
          <Text style={styles.precos}>Gasolina: R$ {parseFloat(gasolina).toFixed(2)}</Text>
        </View>

        <TouchableOpacity style={styles.calcular} onPress={this.props.fechar}>
          <Text style={styles.textoCalcular}>Calcular Novamente</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2B373D',
    width: '100%',
    height: '100%',
    borderRadius: 15,
    alignItems: 'center',
  },
  calcular: {
    backgroundColor: '#EF4130',
    height: 40,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    width: 350,
    marginTop: 40,
  },
  textoCalcular: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '500',
  },
  valores: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  compensa: {
    marginTop: 30,
    fontSize: 24,
    color: '#FFF',
  },
  compensaResultado: {
    marginLeft: 5,
    marginTop: 30,
    fontSize: 24,
    fontWeight: '600',
    color: '#30EE5A',
    marginBottom: 10,
  },
  explicacao: {
    color: '#FFF',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
  },
  tituloPrecos: {
    fontSize: 20,
    fontWeight: '600',
    color: '#FFF',
  },
  precos: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: '300',
    color: '#FFF',
  },
});
