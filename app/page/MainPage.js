'use strict';
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import TabBar from '../component/TabBar';

export default class MainPage extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <TabBar />
      </View>
    );
  }
}
