import React, {Component} from 'react';
import {Navigator} from 'react-native';
import MainScene from '../page/MainPage';

export default class Navigator extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{component: MainScene}}
        renderScene={(route, navigator) => {
          return <route.component navigator={navigator} {...route.args} />
        }}
      />
    );
  }
}
