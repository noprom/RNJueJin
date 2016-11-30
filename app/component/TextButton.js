'use strict';
import React, { Component, PropTypes } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Platform,
  TouchableOpacity
} from 'react-native';
import px2dp from '../util/px2dp';

export default class TextButton extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    onPress: PropTypes.func,
    color: PropTypes.string
  };

  static defaultTypes = {
    color: 'white'
  }

  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
      >
        <View style={styles.button}>
          <Text style={{fontSize: px2dp(12), color: this.props.color}}>{this.props.text}</Text>
        </View>
      </TouchableOpacity>
    );
  };
}

const styles = StyleSheet.create({
  button: {
    height: px2dp(16)
  }
});
