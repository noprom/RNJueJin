import React, { Component } from 'react';
import { Text, View, StyleSheet, Platform, TouchableOpacity, Image, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from './Button';
import TextButton from './TextButton';
import SignUpPage from './SignUpPage';

export default class SignInPage extends Component {

  _backCallback() {

  }

  _signInCallback() {

  }

  _signUpCallback() {
    this.props.navigator.push({
      component: SignUpPage
    });
  }

  _forgetPassword() {

  }

  render() {
    return (
      <View style={styles.view}>
        <View style={styles.actionBar}>
          <TouchableOpacity onPress={this._backCallback.bind(this)}>
            <Icon name="md-arrow-back" size={30} color="white"/>
          </TouchableOpacity>
        </View>
        <View style={styles.logo}>
          <Image source={require('../../image/ic_launcher.png')} />
        </View>
        <View style={styles.editGroup}>
          <View style={styles.editView}>
            <TextInput
              style={styles.edit}
              underlineColorAndroid="transparent"
              placeholder="手机号/邮箱"
              placeholderTextColor="#c4c4c4"/>
          </View>
          <View style={{height: 1, backgroundColor:'#c4c4c4'}}/>
          <View style={styles.editView}>
            <TextInput
              style={styles.edit}
              underlineColorAndroid="transparent"
              placeholder="密码"
              placeholderTextColor="#c4c4c4"/>
          </View>
          <View style={{marginTop: 20}}>
            <Button text="登录" onPress={this._signInCallback.bind(this)}/>
          </View>
          <View style={styles.textButtonLine}>
            <TextButton text="忘记密码?" onPress={this._forgetPassword.bind(this)} color="rgba(255,255,255,0.5)"/>
            <TextButton text="注册账号" onPress={this._signUpCallback.bind(this)}/>
          </View>
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
    margin: 25
  },
  logo: {
    alignItems: 'center'
  },
  editGroup: {
    margin: 20
  },
  editView: {
    height: 65,
    backgroundColor: 'white',
    justifyContent: 'flex-end',
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3
  },
  edit: {
    height: 45,
    fontSize: 20,
    backgroundColor: '#fff',
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 7
  },
  textButtonLine: {
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
