import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Detalhes(props){
    return(
        <View style={styles.container}>
            <View style={styles.modalContainer}>

                <TouchableOpacity style={styles.btnVoltar} onPress={props.voltar}>
                    <Text style={{color:'#FFF', fontSize:16, textAlign:'center'}}>Voltar</Text>
                </TouchableOpacity>

                <Text style={styles.titulo}>{props.filme.nome}</Text>
                <Text style={styles.sinopse}>Sinopse:</Text>
                <Text style={styles.descricao}>{props.filme.sinopse}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginLeft:10,
        marginRight:10,
        flex:1,
        alignItems:'center',
        justifyContent:'flex-end',
    },
    modalContainer:{
        width:'98%',
        height:'40%',
        backgroundColor:'#121212',
        borderTopLeftRadius:5,
        borderTopRightRadius:5
    },
    btnVoltar:{
        backgroundColor:'#E52246',
        padding:10,
        borderTopLeftRadius:5,
        borderTopRightRadius:5,
    },
    titulo:{
        color:'#FFF',
        fontSize:35,
        textAlign:'center',
        padding:10,
        fontWeight:'bold'
    },
    sinopse:{
        color:'#FFF',
        fontSize:18,
        marginBottom:8,
        marginLeft:10
    },
    descricao:{
        color:'#FFF',
        marginLeft:10,
        marginRight:10,
        textAlign:'justify'
    }
})