import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, Modal} from 'react-native';

import Detalhes from '../Detalhes';

export default function Filmes({ data }){

    const [visibleModal, setVisibleModal] = useState(false);

    return(
        <View>
            
            <View style={styles.card}>
                <Text style={styles.titulo}>{data.nome}</Text>
                <Image
                source={{uri: data.foto}}
                style={styles.capa}
                />
                <View style={styles.areaBotao}>
                    <TouchableOpacity style={styles.botao} onPress={ () => setVisibleModal(true) }>
                        <Text style={styles.botaoTexto}>Leia Mais</Text>
                    </TouchableOpacity>
                </View>
            </View>
            
            <Modal transparent={true} animationType='slide' visible={visibleModal}>
                <Detalhes filme={data} voltar={() => setVisibleModal(false) }/>
            </Modal>

        </View>
    );
}

const styles = StyleSheet.create({
    card:{
        backgroundColor:'#FFF',
        margin:15,
        elevation:2,
        paddingBottom:15,
        paddingLeft:5,
        paddingRight:5,
        borderTopLeftRadius:20,
    },
    titulo:{
        padding:15,
        fontSize:18
    },
    capa:{
        height:250,
        zIndex:2
    },
    areaBotao:{
        alignItems:'flex-end',
        marginTop:-45,
        zIndex:9,
    },
    botao:{
        width:80,
        backgroundColor:'#000',
        opacity:1,
        padding:8,
        borderTopLeftRadius:10,
        borderBottomLeftRadius:3
    },
    botaoTexto:{
        color:'#FFF',
        textAlign:'center'
    }
});