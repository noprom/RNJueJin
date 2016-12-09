'use strict';
import React, { Component } from 'react';
import { Text, View, BackAndroid, ToastAndroid } from 'react-native';
import TabBar from '../component/TabBar';
import WebViewPage from './WebViewPage';
import IndividualPage from './IndividualPage';
import SettingPage from './SettingPage';
import SignInPage from './SignInAndSignup/SignInPage';

export default class MainScene extends Component {

  constructor(props) {
      super(props);
      MainScene.switchToWebViewPage = MainScene.switchToWebViewPage.bind(this);
      MainScene.switchToIndividualPage = MainScene.switchToIndividualPage.bind(this);
      MainScene.switchToSettingPage = MainScene.switchToSettingPage.bind(this);
      MainScene.switchToSignInPage = MainScene.switchToSignInPage.bind(this);
  }

  static switchToWebViewPage(rowData) {
      this.props.navigator.push({
          component: WebViewPage,
          args: {rowData: rowData}
      });
  }

  static switchToIndividualPage(userInfo) {
      this.props.navigator.push({
          component: IndividualPage,
          args: {user: userInfo}
      });
  }

  static switchToSettingPage() {
      this.props.navigator.push({
        component: SettingPage
      });
  }

  static switchToSignInPage() {
      this.props.navigator.push({
        component: SignInPage
      });
  }

  componentDidMount() {
    BackAndroid.addEventListener('hardwareBackPress', function () {
        BackAndroid.exitApp(0);
        return true;
    });
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <TabBar />
      </View>
    );
  }
}
