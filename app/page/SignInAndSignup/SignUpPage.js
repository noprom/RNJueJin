'use strict';
import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Platform,
  TouchableOpacity,
  Image,
  TextInput, BackAndroid
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from '../../component/Button';
import px2dp from '../../util/px2dp';
import ImageButton from '../../component/ImageButtonWithText';

export default class SignUpPage extends Component {

  constructor(props) {
      super(props);
      this.handleBack = this._handleBack.bind(this);
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

  _signupCallback() {

  }

  render() {
    return(
      <View style={styles.view}>
        <View style={styles.actionBar}>
          <ImageButton
            onPress={this._handleBack.bind(this)}
            icon="md-arrow-back"
            color="white"
            imgSize={px2dp(18)}
            btnStyle={{width: 55, height: 60}}/>
        </View>
        <View style={styles.logo}>
          <Image source={require('../../image/ic_launcher.png')} />
        </View>
        <View style={styles.editGroup}>
          <View style={styles.editView}>
            <TextInput
              style={styles.edit}
              underlineColorAndroid="transparent"
              placeholder="手机号/邮箱"
              placeholderTextColor="#c4c4c4"/>
          </View>
          <View style={{height: 1, backgroundColor:'#c4c4c4'}}/>
          <View style={styles.editView}>
            <TextInput
              style={styles.edit}
              underlineColorAndroid="transparent"
              placeholder="用户名"
              placeholderTextColor="#c4c4c4"/>
          </View>
          <View style={styles.editView}>
            <TextInput
              style={styles.edit}
              underlineColorAndroid="transparent"
              placeholder="密码"
              placeholderTextColor="#c4c4c4"/>
          </View>
          <View style={{marginTop: px2dp(15)}}>
            <Button text="注册" onPress={this._signupCallback.bind(this)}/>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    marginTop: (Platform.OS === 'ios') ? px2dp(20) : 0,
    backgroundColor: 'rgb(22, 131, 251)'
  },
  actionBar: {
    padding: px2dp(20)
  },
  logo: {
    alignItems: 'center'
  },
  editGroup: {
    margin: px2dp(20)
  },
  editView: {
    height: px2dp(65),
    backgroundColor: 'white',
    justifyContent: 'center',
    borderTopLeftRadius: px2dp(3),
    borderTopRightRadius: px2dp(3),
  },
  edit: {
    height: px2dp(35),
    fontSize: px2dp(13),
    backgroundColor: '#fff',
    paddingLeft: px2dp(15),
    paddingRight: px2dp(15),
    marginBottom: px2dp(13)
  }
});
