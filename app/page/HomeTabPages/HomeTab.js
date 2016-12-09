'use strict';

import React, { Component } from 'react';
import { Text, StyleSheet, View, ScrollView, RefreshControl } from 'react-native';
import HotPanel from '../../component/HotPanel';
import ListViewForHomeTab from '../../component/ListViewForHome';
import ListViewForOtherTab from '../../component/SimpleListView';

export default class HomeTab extends Component {

  constructor(props) {
    super(props);
    this.state = {
      refreshing: true,
      dataBlob: [],
    }
  }

  componentDidMount() {
    this._fetchData();
  }

  updataRefresherState(refreshing) {
    this.setState({refreshing: refreshing});
  }

  _onRefresh() {
    this.setState({refreshing: true});
    setTimeout(() => this.setState({refreshing: false}), 3000);
  }

  _renderContents() {
      var {tabTag} = this.props;
      if(tabTag === '首页')
          tabTag = '热门推荐';
      else
          tabTag = '热门';

      if(!this.state.refreshing) {
          return(
              <View>
                  <HotPanel title={tabTag} contents={this.state.dataBlob}/>
                  { tabTag === '热门推荐' ?
                      <ListViewForHomeTab contents={this.state.dataBlob}/>
                      :
                      <ListViewForOtherTab contents={this.state.dataBlob}/>
                  }
              </View>
          );
      }
  }

  _fetchData() {
      fetch('http://gold.xitu.io/api/v1/timeline/57fa525a0e3dd90057c1e04d/2016-11-13T05:04:10.044Z')
          .then((response) => response.json())
          .then((responseData) => {
              let data = responseData.data;
              var dataBlob = [];

              for(let i in data) {
                  let info = {
                      tags: data[i].tagsTitleArray,
                      category: data[i].category,
                      content: data[i].content,
                      collectionCount: data[i].collectionCount,
                      title: data[i].title,
                      user: data[i].user,
                      url: data[i].url,
                      time: this._computeTime(data[i].createdAtString),
                      screenshot: null
                  }
                  dataBlob.push(info);
              }

              this.setState({
                  dataBlob: dataBlob,
                  refreshing: false
              });
          }).done();
  }

  _computeTime(time) {
      return '3小时';
  }

  render() {
    return (
      <ScrollView
        style={{}}
        refreshControl={
          <RefreshControl refreshing={this.state.refreshing} onRefresh={this._onRefresh.bind(this)}/>
        }>
        { this._renderContents() }
      </ScrollView>
    );
  }
}
