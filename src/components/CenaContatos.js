import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar
} from 'react-native';
import BarraNavegacao from './BarraNavegacao';

const detalheContato = require('../imgs/detalhe_contato.png');


export default class CenaContatos extends Component {
  render() {
    return (
      <View style={{flex:1, backgroundColor:'#FFF'}}>
        <StatusBar
          backgroundColor= '#61BD8C'
        />
        <BarraNavegacao voltar navigator={this.props.navigator} corFundo='#61BD8C'/>

        <View style={styles.cabecalho}>
          <Image source={detalheContato}/>
          <Text style={styles.txtTitulo}>Contatos</Text>
        </View>

        <View style={styles.detalhesContatos}>
          <Text style={styles.txtContatos}>TEL: (11) 1234-1234</Text>
          <Text style={styles.txtContatos}>CEL: (11) 91234-1234</Text>
          <Text style={styles.txtContatos}>EMAIL: contato@atmconsultaria.com</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cabecalho:{
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 10
  },
  txtTitulo:{
    fontSize: 30,
    color:'#61BD8C',
    marginLeft: 10,
    marginTop: 25,
    fontWeight: 'bold'
  },
  detalhesContatos: {
    marginTop: 20,
    padding: 20
  },
  txtContatos:{
    fontSize: 18
  }
});
