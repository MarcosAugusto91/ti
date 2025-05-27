import { useState } from 'react'
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { launchImageLibrary, launchCamera } from 'react-native-image-picker'


export default function App() {

  const [photo, setPhoto] = useState(null);


  function openAlbum(){

    const options = {
      mediaType: "photo",
      quality: 1,
      selectionLimit: 1,
    }
    
    launchImageLibrary(options, (response) => {

      if(response.didCancel){
        console.log("IMAGE PICKER CANCELADO")
        return;
      }else if(response.error){
        console.log("GEROU ERRO ", response.errorMessage)
        return;
      }

      console.log(response.assets)
      setPhoto(response.assets[0].uri)

    })

  }


  async function openCamera(){

    const options = {
      mediaType: "photo",
      quality: 1,
      saveToPhotos: true,
    }

    const response = await launchCamera(options)

    setPhoto(response.assets[0].uri)

  }

 return (
   <SafeAreaView style={styles.container}>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button} onPress={openAlbum}>
          <Text style={styles.text}>Abrir album</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={openCamera}>
          <Text style={styles.text}>Abrir camera</Text>
        </TouchableOpacity>
      </View>


      {photo !== null && (
      <Image
        source={{ uri: photo}}
        style={styles.image}
      />
      )}
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center',
  },
  buttons:{
    marginTop: 44,
    flexDirection: 'row',
    gap: 14,
    marginBottom: 24,
  },
  button:{
    backgroundColor: "#121212",
    padding: 4,
    paddingLeft: 16,
    paddingRight: 16,
    borderRadius: 4,
  },
  text:{
    color: "#FFF"
  },
  image:{
    width: '90%',
    height: 300,
    objectFit: "cover"
  }
})