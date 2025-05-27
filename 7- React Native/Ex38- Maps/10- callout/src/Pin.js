import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';

export default class Pin extends Component {
  render() {
    return(
        <View style={[pinStyle.viewMarker, {backgroundColor:this.props.corFundo}]}>
            <Text style={pinStyle.textoMarker}>{this.props.aviso}</Text>
        </View>        
    );
  }
}

const pinStyle = StyleSheet.create({
    viewMarker:{
        height:30,
        padding:5,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:5
      },
      textoMarker:{
        color:'#FFF'
      }
});
