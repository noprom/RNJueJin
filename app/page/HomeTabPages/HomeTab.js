'use strict';

import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import HotPanel from '../../component/HotPanel';

export default class HomeTab extends Component {
  render() {
    return (
      <View style={{flex: 1, flexDirection:'column'}}>
        <HotPanel title="热门推荐" />
      </View>
    );
  }
}
