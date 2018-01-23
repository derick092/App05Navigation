import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableHighlight,
  StyleSheet
} from 'react-native';

const voltar = require('../imgs/btn_voltar.png');

export default class BarraNavegacao extends Component {
  render() {
    if(this.props.voltar){
      return (
        <View style={[styles.barraTitulo, { backgroundColor: this.props.corFundo }]}>
        <TouchableHighlight
          underlayColor={this.props.corFundo}
          activeOpacity={0.5}
          onPress={() => {
            this.props.navigator.pop();
        }}>
          <Image source={voltar} />
          </TouchableHighlight>
          <Text style={styles.textoTiulo}>ATM Consultoria</Text>
        </View>
      );
    }
    return (
      <View style={styles.barraTitulo}>
        <Text style={styles.textoTiulo}>ATM Consultoria</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  barraTitulo: {
    backgroundColor:'#CCC',
    padding: 10,
    height: 60,
    flexDirection: 'row'
  },
  textoTiulo: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    color: '#000'
  }
});
