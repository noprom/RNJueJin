'use strict';
import React, { Component } from 'react';
import { Text, View, StyleSheet, Platform } from 'react-native';
import theme from '../config/theme';
import px2dp from '../util/px2dp';

export default class HomeFragment extends Component {
  render() {
    return (
      <View style={styles.view}>
        <Text style={styles.text}>HomeFragment</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    marginTop: (Platform.OS === 'ios') ? px2dp(20) : 0
  },
  text: {
    color: theme.text.color,
    fontSize: theme.text.fontSize
  }
});
