import React, { Component, PropTypes } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Platform,
  TouchableOpacity
} from 'react-native';

export default class TextButton extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    onPress: PropTypes.func
  };

  static defaultTypes = {
    opacity: 255
  }

  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
      >
        <View style={styles.button}>
          <Text style={styles.text}>{this.props.text}</Text>
        </View>
      </TouchableOpacity>
    );
  };
}

const styles = StyleSheet.create({
  button: {
    height: 25
  },
  text: {
    fontSize: 20,
    color: 'white'
  }
});
