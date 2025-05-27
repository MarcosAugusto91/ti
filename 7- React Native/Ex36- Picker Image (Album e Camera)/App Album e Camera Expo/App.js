import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

// Album e Camera
export default function App() {
  const[photo, setPhoto] = useState(null);

  // Função de abrir o album
  async function openAlbum() {

    //VERIFICA SE FOI DADA PERMISSÃO
    const permisionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if(!permisionResult.granted) {
      alert('Permisão para acessar a galeria foi negado!');
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All, //Pode limitar somente Vídeo ou Foto
      quality: 1, //Qualidade de 0.1 à 1 (Maior qualidade)
      allowsEditing: false,
      selectionLimit: 1, //Limita quantas fotos podem ser carregadas
    });

    if(!result.canceled) { //Se a seleção NÃO for cancelada ele seta a foto
      setPhoto(result.assets[0].uri);
    }
  }

  // Função de abrir a camera
  async function openCamera() {

    //VERIFICA SE FOI DADA PERMISSÃO
    const permisionResult = await ImagePicker.requestCameraPermissionsAsync();
    if(!permisionResult.granted) {
      alert('Permissão para acessar a câmera foi negado!');
      return;
    }
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All, //Pode limitar somente Vídeo ou Foto
      quality: 1, //Qualidade de 0.1 à 1 (Maior qualidade)
      allowsEditing: false,
      selectionLimit: 1, //Limita quantas fotos podem ser carregadas
    });
    if(!result.canceled) { //Se a seleção NÃO for cancelada ele seta a foto
      setPhoto(result.assets[0].uri);
    }
  }

  return (
    <View style={styles.container}>
      
      <View style={styles.botoes}>
        <TouchableOpacity style={styles.botao} onPress={openAlbum}>
          <Text style={{ color: "#FFF", fontSize: 17 }}>Abrir album</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={openCamera}>
          <Text style={{ color: "#FFF", fontSize: 17 }}>Abrir camera</Text>
        </TouchableOpacity>
      </View>

      {photo !== null && (
        <Image source={{ uri: photo }} style={styles.imagem}/>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  botoes: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 10
  },
  botao: {
    width: 170,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#292929'
  },
  imagem: {
    width: 350,
    height: 350,
    margin: 20,
  }
});