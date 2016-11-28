import React, {Component, PropTypes} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Platform,
  TouchableOpacity,
  TouchableNativeFeedback
} from 'react-native';

export default class Button extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    onPress: PropTypes.func
  };

  render() {
    if (Platform.OS === 'android') {
      return (
        <TouchableNativeFeedback
          onPress={this.props.onPress}>
          <View style={{flex: 1, height: 65, backgroundColor: '#046ada', alignItems:'center', justifyContent:'center'}}>
            <Text style={styles.text}>{this.props.text}</Text>
          </View>
        </TouchableNativeFeedback>
      );
    } else if (Platform.OS === 'ios') {
      return (
        <View style={{height: 65, backgroundColor: '#046ada', alignItems:'center', justifyContent:'center'}}>
          <Text style={styles.text}>{this.props.text}</Text>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 20
  }
});
