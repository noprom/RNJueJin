'use strict';
import React, { Component } from 'react';
import { Text, View, StyleSheet, Platform } from 'react-native';
import px2dp from '../util/px2dp';

export default class MeFragment extends Component {
  render() {
    return (
      <View style={styles.view}>
        <Text>MeFragment</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    marginTop: (Platform.OS === 'ios') ? px2dp(20) : 0
  }
});
