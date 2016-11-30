'use strict';
import React, { Component } from 'react';
import { Text, View, StyleSheet, Platform, Image, Dimensions, PixelRatio } from 'react-native';
import px2dp from '../util/px2dp';
import theme from '../config/theme';
import SearchBar from '../component/SearchBar';
import Swiper from 'react-native-swiper';
import ImageButton from '../component/ImageButtonWithText';

const bannerImages = [
  require('../image/banner1.jpg')
];

export default class CompassFragment extends Component {

  _searchButtonCallback() {

  }

  _imageButtonCallback(position) {
    if (position === 1) {

    }
  }

  render() {
    return (
      <View style={styles.container}>
        <SearchBar onPress={this._searchButtonCallback.bind(this)}/>
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
          <ImageButton
              image={require('../image/tend.png')}
              imgSize={35}
              text="沸点"
              color="#000"
              btnStyle={styles.imgBtn}
              onPress={this._imageButtonCallback.bind(this, 0)}/>
          <ImageButton
              image={require('../image/rank.png')}
              imgSize={35}
              text="贡献榜"
              color="#000"
              btnStyle={styles.imgBtn}
              onPress={this._imageButtonCallback.bind(this, 1)}/>
          <ImageButton
              image={require('../image/hot.png')}
              imgSize={35}
              text="本周最热"
              color="#000"
              btnStyle={styles.imgBtn}
              onPress={this._imageButtonCallback.bind(this, 2)}/>
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
