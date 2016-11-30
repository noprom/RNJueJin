'use strict';
import React, { Component } from 'react';
import { Text, View, StyleSheet, Platform } from 'react-native';
import px2dp from '../util/px2dp';
import theme from '../config/theme';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import SimpleTabBar from '../component/SimpleTabBar';

export default class NotifyFragment extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollableTabView
             renderTabBar={() => <SimpleTabBar />}
             tabBarBackgroundColor="rgb(22,131,251)"
             tabBarActiveTextColor="white"
             tabBarInactiveTextColor="rgba(255,255,255,0.5)"
             tabBarTextStyle={theme.scrollView.fontSize}
             tabBarUnderlineStyle={theme.scrollView.underlineStyle}>
             <View tabLabel="消息" style={styles.content}><Text>currently there are no any messages</Text></View>
             <View tabLabel="动态" style={styles.content}><Text>state function is not available</Text></View>
         </ScrollableTabView>
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
  content: {
     flex: 1,
     alignItems: 'center',
     justifyContent: 'center'
  }
});
