import { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

import notifee, {
  AuthorizationStatus,
  EventType,
  AndroidImportance,
  TriggerType,
  TimestampTrigger
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


  notifee.onBackgroundEvent(async ({ type, detail }) => {
    const { notification, pressAction } = detail;

    if(type === EventType.PRESS){
      console.log("TOCOU NA NOTIFICACAO BACKGROUND: ", pressAction?.id)
      if(notification?.id){
        await notifee.cancelNotification(notification?.id)
      }

    }

    console.log("EVENT BACKGROUND")

  } )


  useEffect(() => {
    return notifee.onForegroundEvent(({ type, detail }) => {
      switch(type){
        case EventType.DISMISSED:
          console.log("USUARIO DESCARTOU A NOTIFICACAO")
          break;
        case EventType.PRESS:
          console.log("TOCOU: ", detail.notification)
          console.log("Title ", detail.notification?.title)
          console.log("Corpo ", detail.notification?.body)
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


  async function handleScheduleNotification(){
    const date = new Date(Date.now());

    date.setMinutes(date.getMinutes() + 1);

    const trigger: TimestampTrigger = {
      type: TriggerType.TIMESTAMP,
      timestamp: date.getTime()
    }

    const notification = await notifee.createTriggerNotification({
      title: "Lembrete Estudo",
      body: "Estudar JavaScript as 15:30",
      android:{
        channelId: 'lembrete',
        importance: AndroidImportance.HIGH,
        pressAction: {
          id: 'default',
        }
      }
    }, trigger)


    console.log("Notification agendada: ",notification)
  }


  function handleListNotifications(){
    notifee.getTriggerNotificationIds()
    .then((ids) => {
      console.log(ids)
    })
  }

  async function handleCancelNotification(){
    await notifee.cancelNotification("0xmUraKUfElFvtLuRTJY")
    console.log("Notificaçao cancelada com sucesso!")
  }


  return(
    <View style={styles.container}>
      <Text>Notificaçoes App</Text>
      <Button
        title="Enviar notificaçao"
        onPress={handleNotificate}
      />

      <Button
        title="Agendar notificaçao"
        onPress={handleScheduleNotification}
      />

      <Button
        title="Listar notificacoes"
        onPress={handleListNotifications}
      />

      <Button
        title="Cancelar Notificaçao"
        onPress={handleCancelNotification}
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