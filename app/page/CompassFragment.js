'use strict';
import React, { Component } from 'react';
import { Text, View, StyleSheet, Platform, RefreshControl, ScrollView, ToastAndroid, Image, Dimensions, PixelRatio } from 'react-native';
import px2dp from '../util/px2dp';
import theme from '../config/theme';
import SearchBar from '../component/SearchBar';
import Swiper from 'react-native-swiper';
import ImageButton from '../component/ImageButtonWithText';

const bannerImages = [
  require('../image/banner1.jpg'),
  require('../image/rank.png'),
  require('../image/hot.png')
];

const imgBtnImages = [
  require('../image/tend.png'),
  require('../image/rank.png'),
  require('../image/hot.png')
];

export default class CompassFragment extends Component {

  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
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
                  {/*<Image style={styles.image} source={BANNER_IMAGES[1]}/>*/}
                  <View style={{backgroundColor:'yellow', height: px2dp(130)}}></View>
              </View>
              <View style={styles.slide}>
                  {/*<Image style={styles.image} source={BANNER_IMAGES[2]}/>*/}
                  <View style={{backgroundColor:'green', height: px2dp(130)}}></View>
              </View>
          </Swiper>
          <View style={styles.imageBtnLine}>
            {this.state.btnName.map((item, index) => {
              return (
                <ImageButton
                    key={index}
                    image={imgBtnImages[index]}
                    imgSize={35}
                    text="沸点"
                    color="#000"
                    btnStyle={styles.imgBtn}
                    onPress={this._imageButtonCallback.bind(this, index)}/>
              )
            })}
          </View>
        </ScrollView>
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
