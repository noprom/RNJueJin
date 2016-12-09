import React, { Component, PropTypes } from 'react';
import ReactNative, { Text, View, StyleSheet, Platform, TouchableOpacity, ListView, Image, PixelRatio } from 'react-native';
import px2dp from '../util/px2dp';
import theme from '../config/theme';
import NavigationBar from '../component/SimpleNavigationBar';

export default class IndividualPage extends Component {

    _backCallback() {
        this.props.navigator.pop();
    }

    render() {
        return(
            <View style={{flex: 1}}>
              <NavigationBar title="个人主页" backOnPress={this._backCallback.bind(this)} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    
});
