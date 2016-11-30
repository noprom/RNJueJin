'use strict';
import React, { Component } from 'react';
import { Text, View, StyleSheet, Platform } from 'react-native';
import px2dp from '../util/px2dp';

export default class CompassFragment extends Component {
  render() {
    return (
      <View style={styles.view}>
        <Text>compass</Text>
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
