import React, {Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

class App extends Component{
  render(){
    return(
      <View style={styles.area}>
        <Text style={styles.textoPrincipal}>Eu sou texto 1</Text>
        <Text style={styles.textoPrincipal}>Eu sou texto 2</Text>
        <Text style={[styles.textoPrincipal, styles.texto2]}>Eu sou texto 3</Text>
        <Text style={styles.textoPrincipal}>Eu sou texto 4</Text>
        <Text style={styles.textoPrincipal}>Eu sou texto 5</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  area:{
    marginTop:100,
    backgroundColor:'#333333'
  },

  textoPrincipal:{
    textAlign:'center',
    color: 'white',
    fontSize: 18
  },
  texto2:{
    color: 'orange',
  },

});

export default App;