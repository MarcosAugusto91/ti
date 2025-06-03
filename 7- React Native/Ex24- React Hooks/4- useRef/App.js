
import React, { useState, useEffect, useMemo, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {

  const [nome, setNome] = useState();
  const [input, setInput] = useState('');

  //Dando nome para ser inserido no textInput
  const nomeInput = useRef(null);

  //Primeira função com useEffect que aplica o valor NOME no AsyncStorage / ComponentDidUpdate
  useEffect(() => {
    async function saveStorage() {
      await AsyncStorage.setItem('nomes', nome);
    }

    saveStorage();
  }, [nome])

  //Segunda função com useEffect que busca o valor NOME no AsyncStorage / ComponentDidMount
  useEffect(() => {
    async function getStorage() {
      const nomeStorage = await AsyncStorage.getItem('nomes');
      if (nomeStorage != null) {
        setNome(nomeStorage);
      }
    }

    getStorage();
  }, [])

  function alteraNome() {
    setNome(input);
    setInput('')
  }

  function alteraInput(value) {
    setInput(value);
  }

  //Utilizando a referencia podemos chamar e executar algo sobre;
  //No caso foi colocado focus no TextInput referenciado.
  function abreInput(){
     nomeInput.current.focus();
  }

  //Usando o useMemo para só executar o length quando o NOME for alterado;
  //Otimiza consumo de memória, se não a cada letra digitada o length seria executado;
  //Economizando renderizações
  const letrasNome = useMemo(() => {
    console.log('Mudou');
    return nome ? nome.length : 0;
  }, [nome]);


  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', }}>
        <Text style={styles.texto}> {nome} </Text>
        <Text style={styles.letrasNome}> {letrasNome} </Text>
      </View>

      <TextInput style={styles.caixaTexto}
        value={input}
        onChangeText={alteraInput}

        //Referenciando com o nome criado anteriormente, agora este TextInput pode ser chamado como nomeInput
        ref={nomeInput}
      ></TextInput>

      <TouchableOpacity style={styles.btn} onPress={alteraNome}>
        <Text style={styles.textoBtn}>Altera Nome</Text>
      </TouchableOpacity>      
      
      <TouchableOpacity style={styles.btn2} onPress={abreInput}>
        <Text style={styles.textoBtn}>Abre Input</Text>
      </TouchableOpacity>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
  },
  texto: {
    fontSize: 30,
  },
  btn: {
    marginTop: 10,
    width: 150,
    padding: 10,
    backgroundColor: 'orange',
    borderRadius: 5,
  },
  textoBtn: {
    textAlign: 'center',
    fontSize: 17,
    color: '#FFF'
  },
  caixaTexto: {
    marginTop: 20,
    width: 150,
    backgroundColor: '#FFF',
    borderRadius: 5,
    color: 'gray',
    textAlign: 'center',
    fontSize: 15,
  },
  letrasNome: {
    color: 'orange',
    fontSize: 16,
    fontWeight: 600,
  },
  btn2:{
    marginTop: 10,
    width: 150,
    padding: 10,
    backgroundColor: 'black',
    borderRadius: 5,
  }
})