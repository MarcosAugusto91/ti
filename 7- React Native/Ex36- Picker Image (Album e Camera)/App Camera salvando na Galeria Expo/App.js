import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as MediaLibrary from 'expo-media-library';

export default function App() {
  const [photo, setPhoto] = useState(null);

  async function openCamera() {
    const permisionResult = await ImagePicker.requestCameraPermissionsAsync();
    if (!permisionResult.granted) {
      alert('Permissão para acessar a câmera foi negada!');
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      quality: 1,
      allowsEditing: false,
    });

    if (!result.canceled) {
      const uri = result.assets[0].uri;
      setPhoto(uri);

      // Solicita permissões para salvar na galeria
      const mediaPerm = await MediaLibrary.requestPermissionsAsync();
      if (!mediaPerm.granted) {
        alert('Permissão para salvar na galeria foi negada!');
        return;
      }

      // Salva a foto na galeria
      try {
        await MediaLibrary.createAssetAsync(uri);
        Alert.alert('Sucesso', 'Foto salva na galeria!');
      } catch (error) {
        Alert.alert('Erro', 'Não foi possível salvar a foto.');
        console.error(error);
      }
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.botoes}>
        <TouchableOpacity style={styles.botao} onPress={openCamera}>
          <Text style={{ color: '#FFF', fontSize: 17 }}>Abrir câmera</Text>
        </TouchableOpacity>
      </View>

      {photo && <Image source={{ uri: photo }} style={styles.imagem} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  botoes: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 10,
  },
  botao: {
    width: 170,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#292929',
  },
  imagem: {
    width: 350,
    height: 350,
    margin: 20,
  },
});