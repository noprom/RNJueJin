'use strict';
import React, { Component } from 'react';
import { Text, View, StyleSheet, PixelRatio, Platform, TouchableOpacity, Image, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from '../../component/Button';
import TextButton from '../../component/TextButton';
import SignUpPage from './SignUpPage';
import MainPage from '../MainPage';
import ImageButton from '../../component/ImageButtonWithText';
import TextDivider from '../../component/TextDivider';
import px2dp from '../../util/px2dp';

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
          <ImageButton onPress={this._backCallback.bind(this)} icon="md-arrow-back" color="white" imgSize={px2dp(18)} btnStyle={{width: 50, height: 60}}/>
        </View>
        <View style={styles.logo}>
          <Image style={{width:45, height:45}} source={require('../../image/ic_login_logo.png')} />
        </View>
        <View style={styles.editGroup}>
          <View style={styles.editView}>
            <TextInput
              style={styles.edit}
              underlineColorAndroid="transparent"
              placeholder="手机号/邮箱"
              placeholderTextColor="#c4c4c4"/>
          </View>
          <View style={{height: 1 / PixelRatio.get(), backgroundColor:'#c4c4c4'}}/>
          {/*<View style={{height: 1, backgroundColor:'#c4c4c4'}}/>*/}
          <View style={styles.editView}>
            <TextInput
              style={styles.edit}
              underlineColorAndroid="transparent"
              placeholder="密码"
              placeholderTextColor="#c4c4c4"/>
          </View>
          <View style={{marginTop: px2dp(10)}}>
            <Button text="登录" onPress={this._signInCallback.bind(this)}/>
          </View>
          <View style={styles.textButtonLine}>
            <TextButton text="忘记密码?" onPress={this._forgetPassword.bind(this)} color="rgba(255,255,255,0.5)"/>
            <TextButton text="注册账号" onPress={this._signUpCallback.bind(this)} color="rgba(255,255,255,0.5)"/>
          </View>
          <View>
            <View style={{flex: 1, justifyContent: 'flex-end', margin: px2dp(5)}}>
              <TextDivider text="使用其他账号登陆"/>
            </View>
            <View style={styles.thirdPartyView}>
              <ImageButton text="微博" image={require('../../image/weibo_login.png')} color="rgba(255,255,255,0.7)"/>
              <ImageButton text="微信" image={require('../../image/wechat_login.png')} color="rgba(255,255,255,0.7)"/>
              <ImageButton text="Github" image={require('../../image/github_login.png')} color="rgba(255,255,255,0.7)"/>
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
    marginTop: (Platform.OS === 'ios') ? px2dp(20) : 0,
    backgroundColor: 'rgb(22, 131, 251)'
  },
  actionBar: {
    padding: px2dp(20)
  },
  logo: {
    alignItems: 'center',
    marginTop: px2dp(40)
  },
  editGroup: {
    margin: px2dp(20)
  },
  editView: {
    height: px2dp(45),
    marginBottom: px2dp(3),
    backgroundColor: 'white',
    justifyContent: 'flex-end',
    borderRadius: px2dp(3)
  },
  edit: {
    height: px2dp(38),
    fontSize: px2dp(13),
    backgroundColor: '#fff',
    paddingLeft: px2dp(15),
    paddingRight: px2dp(15),
    marginBottom: px2dp(13),
    borderRadius: px2dp(3)
  },
  textButtonLine: {
    marginTop: px2dp(25),
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  thirdPartyView: {
    alignItems: 'flex-start',
    marginTop: px2dp(25),
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});
