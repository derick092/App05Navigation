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

const detalheEmpresa = require('../imgs/detalhe_empresa.png');


export default class CenaEmpresa extends Component {
  render() {
    return (
      <View style={{flex:1, backgroundColor:'#FFF'}}>
        <StatusBar
          backgroundColor= '#EC7148'
        />
        <BarraNavegacao voltar navigator={this.props.navigator} corFundo='#EC7148'/>

        <View style={styles.cabecalho}>
          <Image source={detalheEmpresa}/>
          <Text style={styles.txtTitulo}>A Empresa</Text>
        </View>

        <View style={styles.detalheEmpresa}>
          <Text style={styles.txtEmpresa}>
            A ATM Consultoria está no mercado há mais de 20 anos!
          </Text>
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
    color:'#EC7148',
    marginLeft: 10,
    marginTop: 25,
    fontWeight: 'bold'
  },
  detalheEmpresa: {
    marginTop: 20,
    padding: 20
  },
  txtEmpresa:{
    fontSize: 18
  }
});
