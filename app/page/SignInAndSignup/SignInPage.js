'use strict';
import React, { Component } from 'react';
import { Text, View, StyleSheet, Platform, TouchableOpacity, Image, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from './Button';
import TextButton from './TextButton';
import SignUpPage from './SignUpPage';
import MainPage from './MainPage';
import ImageButton from './ImageButton';
import TextDivider from './TextDivider';

export default class SignInPage extends Component {

  _backCallback() {
    this.props.navigator.push({
      component: MainPage
    });
  }

  _signInCallback() {
    this.props.navigator.push({
      component: MainPage
    });
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
          <Image style={{width:60, height:60}} source={require('../../image/ic_login_logo.png')} />
        </View>
        <View style={styles.editGroup}>
          <View style={styles.editView}>
            <TextInput
              style={styles.edit}
              underlineColorAndroid="transparent"
              placeholder="手机号/邮箱"
              placeholderTextColor="#c4c4c4"/>
          </View>
          {/*<View style={{height: 1, backgroundColor:'#c4c4c4'}}/>*/}
          <View style={styles.editView}>
            <TextInput
              style={styles.edit}
              underlineColorAndroid="transparent"
              placeholder="密码"
              placeholderTextColor="#c4c4c4"/>
          </View>
          <View style={{marginTop: 10}}>
            <Button text="登录" onPress={this._signInCallback.bind(this)}/>
          </View>
          <View style={styles.textButtonLine}>
            <TextButton text="忘记密码?" onPress={this._forgetPassword.bind(this)} color="rgba(255,255,255,0.5)"/>
            <TextButton text="注册账号" onPress={this._signUpCallback.bind(this)}/>
          </View>
          <View>
            <View style={{flex: 1, justifyContent: 'flex-end', margin: 5}}>
              <TextDivider text="使用其他账号登陆"/>
            </View>
            <View style={styles.thirdPartyView}>
              <ImageButton text="微博" image={require('../../image/weibo_login.png')}/>
              <ImageButton text="微信" image={require('../../image/wechat_login.png')}/>
              <ImageButton text="Github" image={require('../../image/github_login.png')}/>
            </View>
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
    alignItems: 'center',
    margin: 20
  },
  editGroup: {
    margin: 20
  },
  editView: {
    height: 45,
    marginBottom: 3,
    backgroundColor: 'white',
    justifyContent: 'flex-end',
    borderRadius: 3
  },
  edit: {
    height: 25,
    fontSize: 14,
    backgroundColor: '#fff',
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 7
  },
  textButtonLine: {
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  thirdPartyView: {
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});
