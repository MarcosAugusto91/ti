import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity
  } from 'react-native';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      numero: 0,
      botao: 'VAI',
      ultimo: null
    };

    //Variavel do timer do relogio.
    this.timer = null;

    this.vai = this.vai.bind(this);
    this.limpar = this.limpar.bind(this);
  }

  vai(){

    if(this.timer != null){
      //Aqui vai parar o timer
      clearInterval(this.timer);
      this.timer = null;

      this.setState({botao: 'VAI'});
    }else{

      //Comeca girar o timer
      this.timer = setInterval( ()=> {
        this.setState({numero: this.state.numero + 0.1})
      }, 100);

      this.setState({botao: 'PARAR'});
    }

  }

  limpar(){
    if(this.timer != null){
      //Aqui vai parar o timer
      clearInterval(this.timer);
      this.timer = null;
    }
    this.setState({
      ultimo: this.state.numero,
      numero: 0,
      botao: 'VAI'
    })
  }

  render(){
    return(
      <View style={styles.container}>  

      <Image
      source={require('./src/cronometro.png')}
      style={styles.cronometro}
      />

      <Text style={styles.timer}> {this.state.numero.toFixed(1)} </Text>

      <View style={styles.btnArea}>

        <TouchableOpacity style={styles.btn} onPress={this.vai}>
          <Text style={styles.btnTexto}> {this.state.botao} </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={this.limpar}>
          <Text style={styles.btnTexto}>LIMPAR</Text>
        </TouchableOpacity>

      </View>

      <View style={styles.areaUltima}>
          <Text style={styles.textoCorrida}>
            {this.state.ultimo > 0 ? 'Ultimo tempo: ' + this.state.ultimo.toFixed(2) + 's' : ''}
          </Text>
      </View>


      </View>    
    );
  }

}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor: '#00aeef'
  },
  timer:{
    marginTop:-160,
    color: '#FFF',
    fontSize: 65,
    fontWeight: 'bold'
  },
  btnArea:{
    flexDirection: 'row',
    marginTop: 70,
    height: 40
  },
  btn:{
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    height: 40,
    margin: 17,
    borderRadius: 9
  },
  btnTexto:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00aeef'
  },
  areaUltima:{
    marginTop: 40,
  },
  textoCorrida:{
    fontSize:25,
    fontStyle:'italic',
    color: '#FFF'
  }
});

export default App;