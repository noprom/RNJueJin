'use strict';
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import TabBar from '../component/TabBar';
import WebViewPage from './WebViewPage';

export default class MainScene extends Component {
  constructor(props){
      super(props);
      MainScene.switchWebViewPage = MainScene.switchWebViewPage.bind(this);
  }

  static switchWebViewPage(url, userInfo) {
      this.props.navigator.push({
          component: WebViewPage,
          args: {url: url, user: userInfo}
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
