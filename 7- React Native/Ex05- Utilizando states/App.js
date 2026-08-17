import React, {Component} from 'react';
import { View, Text, Button } from 'react-native';

// Classe App que herda de Component (Component do React nos dá superpoderes!)
class App extends Component{

  // Constructor é executado PRIMEIRO quando o componente nasce
  // Props é como um "parâmetro" que vem de componentes pai
  constructor(props){
    
    // super(props) = "avô, você que é o React.Component, prepare-se!"
    // Precisa chamar antes de usar this.state e this.props
    super(props);
    
    // STATE = dados DINÂMICOS do componente (podem mudar)
    // Quando state muda, a tela renderiza de novo automaticamente
    this.state = {
      nome: '' // Começa vazio, mas vai receber 'Marcos Augusto' quando clicar
    };

    // BIND = dá permissão para a função entrar() acessar 'this' (o próprio componente)
    // Sem bind, quando a função é chamada, 'this' fica undefined
    // Pense como: "entrar, você tem acesso total a tudo do App!"
    this.entrar = this.entrar.bind(this);
  }

  // Função que muda o STATE
  entrar(nome){
    // setState = "React, muda meu state e renderiza a tela de novo!"
    // Por isso a tela atualiza quando o estado muda
    this.setState({
      nome: nome
    })
  }

  // render = desenha a tela
  render(){
    return(
      <View style={{marginTop:40,}}>
        {/* Mostrando o valor do state.nome na tela */}
        {/* Enquanto não clicar, mostra vazio. Depois de clicar, mostra 'Marcos Augusto' */}
        <Text style={{fontSize:23, textAlign:'center'}}>
          {this.state.nome}
        </Text>
        
        {/* Quando clicar, chama a função entrar() passando 'Marcos Augusto' */}
        {/* A função muda o state, a tela renderiza, e o nome aparece na tela */}
        <Button title='entrar' onPress={() => this.entrar('Marcos Augusto')}></Button>
      </View>
    );
  }
}

export default App;