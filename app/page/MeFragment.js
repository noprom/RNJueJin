'use strict';
import React, { Component } from 'react';
import { Text, View, StyleSheet, Platform } from 'react-native';
import px2dp from '../util/px2dp';
import theme from '../config/theme';
import Avatar from '../component/Avatar';
import TextButton from '../component/TextButton';

export default class MeFragment extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.intro]}>
          <Avatar text="N"/>
          <View>
             <Text>noprom</Text>
             <TextButton text="添加职位 @添加公司"/>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: (Platform.OS === 'ios') ? px2dp(20) : 0,
    backgroundColor: theme.pageBackgroundColor
  },
  intro: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: px2dp(20),
    borderBottomWidth: 1,
    borderBottomColor: '#d4d4d4'
  }
});
