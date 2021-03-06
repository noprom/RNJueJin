'use strict';
import React, {Component, PropTypes} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Platform,
  TouchableHighlight,
  TouchableNativeFeedback
} from 'react-native';
import px2dp from '../util/px2dp';
import theme from '../config/theme';

export default class Button extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    onPress: PropTypes.func
  };

  _renderContent() {
    return(
      <View style={styles.button}>
        <Text style={styles.text}>{this.props.text}</Text>
      </View>
    );
  }

  render() {
    if (Platform.OS === 'android') {
      return (
        <TouchableNativeFeedback
          onPress={this.props.onPress}>
          {this._renderContent()}
        </TouchableNativeFeedback>
      );
    } else if (Platform.OS === 'ios') {
      return (
        <TouchableHighlight
          onPress={this.props.onPress}
          activeOpacity={theme.btnActiveOpacity}>
          {this._renderContent()}
        </TouchableHighlight>
      );
    }
  }
}

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: px2dp(13)
  },
  button: {
    height: px2dp(45),
    backgroundColor: '#046ada',
    alignItems:'center',
    justifyContent:'center',
    borderRadius: px2dp(2)
  }
});
