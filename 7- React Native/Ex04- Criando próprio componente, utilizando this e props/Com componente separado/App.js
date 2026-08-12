import React, {Component} from 'react';
import { View, Text } from 'react-native';
import Jobs from './components/Jobs';

class App extends Component{
  render(){

    return(
      <View>
        <Text style={{marginTop:35}}>
        </Text>
        <Jobs largura={420} altura={200} nome='Steve Jobs'/>
      </View>
    );
  }
}

export default App;