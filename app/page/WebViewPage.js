import React, { Component, PropTypes } from 'react';
import ReactNative, { Text, View, StyleSheet, Platform, PixelRatio, WebView, ToastAndroid } from 'react-native';
import px2dp from '../util/px2dp';
import theme from '../config/theme';
import NavigationBar from '../component/WebViewNavigationBar';

export default class WebViewPage extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
    this.handleBack = this._handleBack.bind(this);
  }

  render() {
      return(
          <View style={styles.container}>
            <NavigationBar userInfo={this.props.user} onPress={this._handleBack.bind(this)}/>
            <WebView
                source={{uri: this.props.url}}
                style={styles.webView}
                renderLoading={this._renderLoading.bind(this)}
                onLoad={this._showTips.bind(this, 'load')}
                onError={this._showTips.bind(this, 'error')}
            />
          </View>
      );
  }

  _showTips(msg) {
      ToastAndroid.show(msg, ToastAndroid.SHORT);
  }

  _renderLoading() {
      return(
          <Text style={{fontSize: 30}}>Loading</Text>
      );
  }

  componentDidMount() {
      BackAndroid.addEventListener('hardwareBackPress', this.handleBack);
  }

  componentWillUnmount() {
      BackAndroid.removeEventListener('hardwareBackPress', this.handleBack);
  }

  _handleBack() {
      const navigator = this.props.navigator;
      if (navigator && navigator.getCurrentRoutes().length > 1) {
          navigator.pop();
          return true;
      }
      return false;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: (Platform.OS === 'ios') ? px2dp(20) : 0,
    backgroundColor: theme.pageBackgroundColor
  },
  webView: {
      padding: 15,
      borderWidth: 2,
      borderColor: '#000',
      flex: 1
  }
});
