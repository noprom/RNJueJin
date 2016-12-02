/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Navigation from './app/config/entry';

export default class RNJueJin extends Component {
  render() {
    return (
      <Navigation />
    );
  }
}

AppRegistry.registerComponent('RNJueJin', () => RNJueJin);
