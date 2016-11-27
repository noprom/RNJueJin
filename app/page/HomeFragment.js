import React, { Component } from 'react';
import { Text, View, StyleSheet, Platform } from 'react-native';

export default class HomeFragment extends Component {
  render() {
    return (
      <View style={styles.view}>
        <Text>HomeFragment</Text>
      </View>
    );
  }
}

const styles = StyleSheet.createClass({
  view: {
    marginTop: (Platform.OS === 'ios') ? 20 : 0
  }
});