import React, { Component } from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

class Lista extends Component{

  constructor(props){
    super(props);
    this.state = { 
      feed: this.props.data
    };

    this.carregaIcone = this.carregaIcone.bind(this);
    this.mostraLikes = this.mostraLikes.bind(this);
    this.like = this.like.bind(this);
  }

  carregaIcone(likeada){
    return likeada ? require('../img/likeada.png') : 
          require('../img/like.png')
  }

  like(){
    let feed = this.state.feed;

    if(feed.likeada === true){
      this.setState({
        feed:{
          ...feed,
          likeada:false,
          likers: feed.likers - 1
        }
      });
    }else{
      this.setState({
        feed:{
          ...feed,
          likeada:true,
          likers: feed.likers + 1
        }
      });   
    }

  }

  mostraLikes(likers){
    let feed = this.state.feed;

    if(feed.likers <= 0){
      return;
    }

    return(
      <Text style={styles.likes}>
        {feed.likers} {feed.likers > 1  ? 'curtidas' : 'curtida'}
      </Text>
    );
  }

  render(){
    return(
      <View style={styles.areaFeed}>
        
        {/* View contém a foto miniatura e nome do usuário*/}
        <View style={styles.viewPerfil}>
          {/* Trás a miniatura */}
          <Image
          source={{uri: this.state.feed.imgperfil}}
          style={styles.fotoPerfil}
          />
          
          {/* Trás nome do usuário */}
          <Text style={styles.nomeUsuario}> {this.state.feed.nome} </Text>
        </View>


        {/* Trás a foto publicada */}
        <Image
        resizeMode="cover"
        style={styles.fotoPublicacao}
        source={{uri: this.state.feed.imgPublicacao}}
        />

        {/* View contém o botão de like e o de compartilhamento */}
        <View style={styles.areaBtn}>
          {/* Botão de like */}
      	  <TouchableOpacity onPress={this.like}>
            <Image
            source={this.carregaIcone(this.state.feed.likeada)}
            style={styles.iconelike}
            />
          </TouchableOpacity>

          {/* Trás de compartilhar */}
          <TouchableOpacity style={styles.btnSend}>
            <Image
            source={require('../img/send.png')}
            style={styles.iconelike}
            />
          </TouchableOpacity>
        </View>

        {/* Mostrando quantos likes a postagem possui */}
        {this.mostraLikes(this.state.feed.likers)}

        {/* View trás o nome do usuário e a descrição da foto */}
        <View style={styles.viewRodape}>
          {/* Nome do usuário */}
          <Text style={styles.nomeRodape}>
            {this.state.feed.nome}
          </Text>

          {/* Descrição da foto */}
          <Text style={styles.descRodape}>
            {this.state.feed.descricao}
          </Text>
        </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  areaFeed:{

  },
  nomeUsuario:{
    fontSize: 22,
    textAlign: 'left',
    color: '#000000',
  },
  fotoPerfil:{
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  fotoPublicacao:{
    flex:1,
    height: 400,
    alignItems: 'center'
  },
  viewPerfil:{
    flexDirection: 'row',
    flex:1,
    alignItems: 'center',
    padding: 8,
  },
  areaBtn:{
    flexDirection: 'row',
    padding: 5
  },
  iconelike:{
    width: 33,
    height: 33,
  },
  btnSend:{
    paddingLeft: 5,
  },
  viewRodape:{
    flexDirection: 'row',
    alignItems: 'center'
  },
  descRodape:{
    paddingLeft: 5,
    fontSize: 15,
    color: '#000'
  },
  nomeRodape:{
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    paddingLeft: 5
  },
  likes:{
    fontWeight: 'bold',
    marginLeft: 5,
  }
});

export default Lista;