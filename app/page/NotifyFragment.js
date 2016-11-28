'use strict';
import React, { Component } from 'react';
import { Text, View, StyleSheet, Platform } from 'react-native';

export default class NotifyFragment extends Component {
  render() {
    return (
      <View style={styles.view}>
        <Text>NotificationFragment</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    marginTop: (Platform.OS === 'ios') ? 20 : 0
  }
});
