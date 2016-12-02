'use strict';

import React, { Component } from 'react';
import { Text, StyleSheet, View, ScrollView, RefreshControl } from 'react-native';
import HotPanel from '../../component/HotPanel';
import ListView from '../../component/ListViewForHome';

export default class HomeTab extends Component {

  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      hotData: [
          {title: '仅两步实现 拜拜 汉堡导航栏效果～ 全新底部导航交互', star: 235, author: 'android', time: '一周前', url: 'http://www.google.com.au', image:  ''},
          {title: '双十一特级', star: 653, author: '魔法诗', time: '23小时', url: 'http://www.google.com.au', image:  ''},
          {title: 'Git操作知识，再见一步', star: 115, author: 'sdzdee', time: '3天前', url: 'http://www.google.com.au', image:  ''}
        ]
    }
  }

  _onRefresh() {
    this.setState({refreshing: true});
    setTimeout(() => this.setState({refreshing: false}), 3000);
  }

  render() {
    return (
      <ScrollView
        style={{}}
        refreshControl={
          <RefreshControl refreshing={this.state.refreshing} onRefresh={this._onRefresh.bind(this)}/>
        }>
        <HotPanel title="热门推荐" contents={this.state.hotData} />
        <ListView />
      </ScrollView>
    );
  }
}
