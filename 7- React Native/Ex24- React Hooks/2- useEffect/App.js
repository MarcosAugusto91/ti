
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App(){
  
  const [nome, setNome] = useState();
  const [input, setInput] = useState('');

  //Primeira função com useEffect que aplica o valor NOME no AsyncStorage / ComponentDidUpdate
  useEffect(()=> {
    async function saveStorage(){
      await AsyncStorage.setItem('nomes', nome);
    }
      
    saveStorage();
  }, [nome])

  //Segunda função com useEffect que busca o valor NOME no AsyncStorage / ComponentDidMount
  useEffect(() => {
    async function getStorage(){
      const nomeStorage = await AsyncStorage.getItem('nomes');
      if(nomeStorage != null){
        setNome(nomeStorage);
      }
    }

    getStorage();
  }, [])

  function alteraNome(){
    setNome(input);
    setInput('')
  }

  function alteraInput(value){
    setInput(value);
  }
  
  return(
    <View style={styles.container}>
      <Text style={styles.texto}> {nome} </Text>
      
      <TextInput style={styles.caixaTexto} 
      value={input} 
      onChangeText={alteraInput}
      ></TextInput>

      <TouchableOpacity style={styles.btn} onPress={alteraNome}>
        <Text style={styles.textoBtn}>Altera Nome</Text>
      </TouchableOpacity>
    </View>

  );
}

const styles = StyleSheet.create({
   container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'gray',
   },
   texto:{
    fontSize:30,
   },
   btn:{
    marginTop:10,
    width:150,
    padding:10,
    backgroundColor:'orange',
    borderRadius:5,
   },
   textoBtn:{
    textAlign:'center',
    fontSize:17,
    color:'#FFF'
   },
   caixaTexto:{
    marginTop:20,
    width:150,
    backgroundColor:'#FFF',
    borderRadius:5,
    color:'gray',
    textAlign:'center',
    fontSize:15,
   },
})