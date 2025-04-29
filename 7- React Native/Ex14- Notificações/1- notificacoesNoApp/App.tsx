import { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

import notifee, {
  AuthorizationStatus,
  EventType,
  AndroidImportance
} from '@notifee/react-native'

export default function App(){
  const [statusNotification, setStatusNotification] = useState(true);

  useEffect(() => {
    async function getPermission(){
      const settings = await notifee.requestPermission();
      if(settings.authorizationStatus >= AuthorizationStatus.AUTHORIZED){
        console.log("Permission: ", settings.authorizationStatus)
        setStatusNotification(true);
      }else{
        console.log("Usuario negou a permissao!")
        setStatusNotification(false);
      }      
    }

    getPermission();

  }, [])

  useEffect(() => {
    return notifee.onForegroundEvent(({ type, detail }) => {
      switch(type){
        case EventType.DISMISSED:
          console.log("USUARIO DESCARTOU A NOTIFICACAO")
          break;
        case EventType.PRESS:
          console.log("TOCOU: ", detail.notification)
      }
    })
  }, [])



  async function handleNotificate(){
    if(!statusNotification){
      return;
    }

    const channelId = await notifee.createChannel({
      id: 'lembrete',
      name: 'lembrete',
      vibration: true,
      importance: AndroidImportance.HIGH
    })

    await notifee.displayNotification({
      id: 'lembrete',
      title: 'Estudar programaçao!',
      body: 'Lembrete para estudar react-native amanha!',
      android:{
        channelId,
        pressAction: {
          id: 'default'
        }
      }
    })

  }

  return(
    <View style={styles.container}>
      <Text>Notificaçoes App</Text>
      <Button
        title="Enviar notificaçao"
        onPress={handleNotificate}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})