import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';

class App extends Component {

  render() {
    return (
      <View style={styles.container}>
        <ScrollView 
          showsVerticalScrollIndicator={false}  //Exibe ou oculta a barra vertical lateral
          scrollEnabled={true} //Ativa ou desativa o Scroll
          horizontal={true} //Coloca o scrollView na horizontal
          showsHorizontalScrollIndicator={false} // Exibe ou oculta a barra horizontal
        >
          <View style={styles.box1}></View>
          <View style={styles.box2}></View>
          <View style={styles.box3}></View>
          <View style={styles.box4}></View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:50
  },
  box1: {
    backgroundColor: 'red',
    height: 250,
    width: 150
  },
  box2: {
    backgroundColor: 'green',
    height: 250,
    width: 150
  },
  box3: {
    backgroundColor: 'yellow',
    height: 250,
    width: 150
  },
  box4: {
    backgroundColor: 'blue',
    height: 250,
    width: 150
  }
});

export default App;
