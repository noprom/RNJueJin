'use strict';
import React, { Component } from 'react';
import { Text, View, StyleSheet, Platform } from 'react-native';
import px2dp from '../util/px2dp';
import theme from '../config/theme';

export default class NotifyFragment extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>NotificationFragment</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: (Platform.OS === 'ios') ? px2dp(20) : 0,
    backgroundColor: theme.pageBackgroundColor
  }
});
