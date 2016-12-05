'use strict';
import React, { Component } from 'react';
import { Text, View, StyleSheet, Platform, RefreshControl, ScrollView, ToastAndroid, Image, Dimensions, PixelRatio } from 'react-native';
import px2dp from '../util/px2dp';
import theme from '../config/theme';
import SearchBar from '../component/SearchBar';
import Swiper from 'react-native-swiper';
import ImageButton from '../component/ImageButtonWithText';
import ListView from '../component/SimpleListView';

const bannerImages = [
  require('../image/banner1.jpg'),
  require('../image/banner2.png')
];

const imgBtnImages = [
  require('../image/trend.png'),
  require('../image/rank.png'),
  require('../image/hot.png')
];

export default class CompassFragment extends Component {

  constructor(props) {
    super(props);
    this.state = {
      refreshing: true,
      dataBlob: [],
      btnName: ['沸点', '贡献榜', '本周最热']
    }
  }

  _searchButtonCallback() {

  }

  _imageButtonCallback(position) {
    ToastAndroid.show('' + position, ToastAndroid.SHORT);
    if (position === 1) {

    }
  }

  _onRefresh() {
    this.setState(
      {refreshing: true}
    );
    setTimeout(() => this.setState({refreshing: false}), 3000);
  }

  _renderListView() {
       if(!this.state.refreshing)
           return(
               <ListView isRenderHeader={true} contents={this.state.dataBlob}/>
           );
   }

   _fetchData() {
       fetch('http://gold.xitu.io/api/v1/hot/57fa525a0e3dd90057c1e04d/android')
           .then((response) => response.json())
           .then((responseData) => {
               let data = responseData.data;
               let entry = data.entry;
               var dataBlob = [];

               for(let i in entry) {
                   let itemInfo = {
                       title: entry[i].title,
                       collectionCount: entry[i].collectionCount,
                       user: entry[i].user,
                       time: this._computeTime(entry[i].createdAtString),
                       url: entry[i].url
                   }
                   dataBlob.push(itemInfo);
               }

               this.setState({
                   dataBlob: dataBlob,
                   refreshing: false
               });
           }).done();
   }

   _computeTime(time) {
       return '1天前';
   }

   componentDidMount() {
       this._fetchData();
   }

  render() {
    return (
      <View style={styles.container}>
        <SearchBar onPress={this._searchButtonCallback.bind(this)}/>
        <ScrollView
            refreshControl={
                <RefreshControl refreshing={this.state.refreshing} onRefresh={this._onRefresh.bind(this)}/>
            }>
          <Swiper
              height={px2dp(130)}
              autoplay={true}
              bounces={true}>
              <View style={styles.slide}>
                  <Image style={styles.image} source={bannerImages[0]} resizeMode="stretch"/>
              </View>
              <View style={styles.slide}>
                  <Image style={styles.image} source={bannerImages[1]} resizeMode="stretch"/>
              </View>
          </Swiper>
          <View style={styles.imageBtnLine}>
            {this.state.btnName.map((item, index) => {
              return (
                <ImageButton
                    key={index}
                    image={imgBtnImages[index]}
                    imgSize={px2dp(35)}
                    text="沸点"
                    color="#000"
                    btnStyle={styles.imgBtn}
                    onPress={this._imageButtonCallback.bind(this, index)}/>
              )
            })}
          </View>
          { this._renderListView() }
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.pageBackgroundColor
  },
  slide: {

  },
  image: {
    height: px2dp(130),
    width: Dimensions.get('window').width
  },
  imageBtnLine: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    borderBottomWidth: 1 / PixelRatio.get(),
    borderBottomColor: '#c4c4c4'
  },
  imgBtn: {
    height: px2dp(80),
    width: Dimensions.get('window').width / 3,
  }
});
