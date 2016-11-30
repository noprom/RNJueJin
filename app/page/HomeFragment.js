'use strict';
import React, { Component } from 'react';
import { Text, View, StyleSheet, Platform } from 'react-native';
import theme from '../config/theme';
import px2dp from '../util/px2dp';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import CustomTabBar from '../component/CustomTabBar';
import HomeTab from './HomeTabPages/HomeTab';

export default class HomeFragment extends Component {
  render() {
    return (
      <View style={styles.view}>
        <Text style={styles.text}>HomeFragment</Text>
        <ScrollableTabView
           style={styles.scrollView}
           renderTabBar={() => <CustomTabBar />}
           tabBarBackgroundColor="rgb(22,131,251)"
           tabBarActiveTextColor="white"
           tabBarInactiveTextColor="rgba(255,255,255,0.5)"
           tabBarTextStyle={theme.scrollView.fontSize}
           tabBarUnderlineStyle={theme.scrollView.underlineStyle}>
           <HomeTab tabLabel="Home"/>
           <Text tabLabel="iOS">favorite</Text>
           <Text tabLabel="Product">project</Text>
           <Text tabLabel="Sddd">My</Text>
           <Text tabLabel="iOsS">favorite</Text>
           <Text tabLabel="Proddduct">project</Text>
       </ScrollableTabView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    marginTop: (Platform.OS === 'ios') ? px2dp(20) : 0
  },
  text: {
    color: theme.text.color,
    fontSize: theme.text.fontSize
  },
  scrollView: {
    alignItems: 'center',
    justifyContent: 'center'
   }
});
