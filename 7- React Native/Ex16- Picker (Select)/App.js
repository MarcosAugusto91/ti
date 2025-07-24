import React, { Component } from 'react';
import { View, StyleSheet, Text} from 'react-native';

import {Picker} from '@react-native-picker/picker';
//ANTES DE IMPORTAR PRECISA FAZER A INSTALAÇÃO: npm install @react-native-picker/picker --save
//Se continuar sem funcionar execute pelo Yarn: yarn add @react-native-picker/picker
//E segundo as novas recomendações temos que ejetar primeiro: npx expo prebuild





export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      pizza: 0, //Variável responsável por receber o valor selecionado pela propriedade onValueChange
      pizzas: [
        {key: 1, nome: 'Strogonoff', valor: 35.90},
        {key: 2, nome: 'Calabresa', valor: 59},
        {key: 3, nome: 'Quatro queijos', valor: 37},
        {key: 4, nome: 'Brigadeiro', valor: 25.70},
        {key: 5, nome: 'Portuguesa', valor: 70},
      ]
    };
  };

 render(){

  let pizzasItem = this.state.pizzas.map( (value, key) => { //Renderizando Dinâmicamente: 
  // Função MAP roda por todos os itens do nosso Array Pizzas para criar um Picker.Item para cada um deles, a Key é a posição do array que tem que ser colocada no key e value. E o Value trás todas as informações contidas no array que possamos utilizar.
    return <Picker.Item key={key} value={key} label={value.nome} /> 
  } )

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Menu Pizza</Text>

      <Picker
      selectedValue={this.state.pizza}
      onValueChange={ (itemValue, itemIndex) =>  this.setState({pizza: itemValue}) } //Essa propriedade que serve para trocar o dado no Picker(Select). No exemplo acima ele pega o itemValue e aplica na nossa state pizza para trocar o valor do picker.item
      >
       {pizzasItem}
      </Picker>

      <Text style={styles.pizzas}>Voce escolheu: {this.state.pizzas[this.state.pizza].nome}</Text>
      {/* Aqui estamos exibindo no Text a pizza selecionado que veio do onValueChange */}
      <Text style={styles.pizzas}>R$: {this.state.pizzas[this.state.pizza].valor.toFixed(2)}</Text>
      {/* Aqui estamos exibindo no Text o valor da pizza selecionada que veio do onValueChange */}
    </View>
   );
 }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop: 20,
  },
  logo:{
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold'
  },
  pizzas:{
    marginTop: 15,
    fontSize: 25,
    textAlign: 'center'
  }
});