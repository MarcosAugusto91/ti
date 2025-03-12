import React, {Component} from 'react';
import { 
  View, 
  Text, 
  StyleSheet,  
  TouchableOpacity, 
  Image 
} from 'react-native';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      numero: 0.0,
      btn1: 'GO',
      btn2: 'CLEAN',
      timer1:'1º: 0.00',
      timer2:'2º: 0.00',
      timer3:'3º: 0.00',
      
      //Variável do times do relógio
      timer:''
    }

    //outa forma de criar a variavel:
    // this.timer = null;
    
    this.go = this.go.bind(this);
    this.clean = this.clean.bind(this);
  }

  go(){
    if (this.timer != null){
      //Aqui vamos parar o timer
      clearInterval(this.timer);
      this.timer = null;
      this.setState({btn1:'GO'})
      this.setState({btn2:'CLEAN'});   
    }else{
        this.timer = setInterval( () => 
        {this.setState({numero: this.state.numero + 0.1})},100);
        this.setState({btn1:'STOP'});    
        this.setState({btn2:'STOP 1'});

        if(this.state.timer1 != '1º: 0.00'){
        this.setState({btn2:'STOP 2'});
        }
        
        if(this.state.timer2 != '2º: 0.00') {
          this.setState({btn2:'STOP 3'});
        }  
        
        if(this.state.timer3 != '3º: 0.00') {
          this.setState({btn2:'CLEAN ALL'});
        }       
      }
  }

  clean(){
    if(this.state.btn1 == 'GO'){
      this.setState({timer1: '1º: 0.00'});
      this.setState({timer2: '2º: 0.00'});
      this.setState({timer3: '3º: 0.00'});
      this.setState({numero:0});
      this.setState({btn2:'CLEAN'});
    } else if(this.state.timer1 == '1º: 0.00'){
      this.setState({timer1: '1º: ' + this.state.numero.toFixed(2)});
      this.setState({numero:0})
      this.setState({btn2:'STOP 2'});
    } else if (this.state.timer2 == '2º: 0.00'){
      this.setState({timer2: '2º: ' + this.state.numero.toFixed(2)});
      this.setState({numero:0});
      this.setState({btn2:'STOP 3'});
    } else if (this.state.timer3 == '3º: 0.00'){
      this.setState({timer3: '3º: ' + this.state.numero.toFixed(2)});
      this.setState({numero:0});
      this.setState({btn2:'CLEAN ALL'});
    } else{
      this.setState({timer1: '1º: 0.00'});
      this.setState({timer2: '2º: 0.00'});
      this.setState({timer3: '3º: 0.00'});
      this.setState({numero:0});
      this.setState({btn2:'STOP 1'});
    }
  }


  render(){
    return(
      <View style={styles.container}>
        <Image
          style={styles.cronometro}
          source={require('./assets/cronometro.png')}
        ></Image>

        <Text
        style={styles.timer}>{this.state.numero.toFixed(1)}</Text>

        <View style={styles.btnArea}>
          <TouchableOpacity style={styles.botao} onPress={this.go}>
            <Text style={styles.btnTexto}>{this.state.btn1}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao} onPress={this.clean}>
            <Text style={styles.btnTexto}>{this.state.btn2}</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.timer1}>{this.state.timer1}</Text>
          <Text style={styles.timer1}>{this.state.timer2}</Text>
          <Text style={styles.timer1}>{this.state.timer3}</Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
container:{
  flex:1,
  backgroundColor:'#00B8FF',
  alignItems: 'center',
  justifyContent:'center'
},

cronometro:{},

timer:{
  marginTop:-160,
  color:'white',
  fontSize:65,
  fontWeight:'bold'
},

btnArea:{
  marginTop:100,
  flexDirection:'row',
  //backgroundColor:'black'
},
botao:{
  flex:1,
  justifyContent:'center',
  alignItems:'center',
  margin:20,
  height:40,
  borderRadius:4,
  backgroundColor:'white'
},
btnTexto:{
  fontSize:20,
  color:'#00B8FF',
  fontWeight:'bold'
},
timer1:{
  color:'white',
  fontSize:20,
  backgroundColor:'#00aeff',
  margin:5,
  padding:5,
  width:420,
  textAlign:'center',
  fontWeight:'bold'
}
})

export default App;