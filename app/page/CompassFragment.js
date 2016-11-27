import React, { Component } from 'react';
import { Text, View, StyleSheet, Platform } from 'react-native';

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
    marginTop: (Platform.OS === 'ios') ? 20 : 0
  }
});
