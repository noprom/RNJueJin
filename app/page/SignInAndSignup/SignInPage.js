import React, { Component } from 'react';
import { Text, View, StyleSheet, Platform, TouchableOpacity, Image, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from './Button';

export default class SignInPage extends Component {

  _onPress() {

  }

  render() {
    return (
      <View style={styles.view}>
        <View style={styles.actionBar}>
          <TouchableOpacity onPress={this._onPress.bind(this)}>
            <Icon name="md-arrow-back" size={30} color="white"/>
          </TouchableOpacity>
        </View>
        <View style={styles.logo}>
          <Image source={require('../../image/ic_launcher.png')} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    marginTop: (Platform.OS === 'ios') ? 20 : 0,
    backgroundColor: 'rgb(22, 131, 251)'
  },
  actionBar: {
    margin: 15
  },
  logo: {
    alignItems: 'center'
  }
});
