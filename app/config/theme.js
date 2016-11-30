'use strict';
import { PixelRatio } from 'react-native';
import px2dp from '../util/px2dp';

const globalTextColor = '#000';

module.exports = {
  pageBackgroundColor: '#f4f4f4',
  text: {
    color: globalTextColor,
    fontSize: px2dp(15)
  },
  scrollView: {
    fontSize: 13,
    underlineStyle: {
      backgroundColor: 'white'
    }
  }
};
