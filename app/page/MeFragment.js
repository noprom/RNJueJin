import React, { Component } from 'react';
import { Text, View, StyleSheet, Platform } from 'react-native';

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
    marginTop: (Platform.OS === 'ios') ? 20 : 0
  }
});
