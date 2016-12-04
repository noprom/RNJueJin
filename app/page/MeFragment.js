'use strict';
import React, { Component, PropTypes } from 'react';
import { Text, View, StyleSheet, Platform, PixelRatio, TouchableNativeFeedback, TouchableOpacity, ToastAndroid } from 'react-native';
import px2dp from '../util/px2dp';
import theme from '../config/theme';
import Avatar from '../component/Avatar';
import TextButton from '../component/TextButton';
import Icon from 'react-native-vector-icons/Ionicons';

export default class MeFragment extends Component {
  _onPressCallback(position) {
    // ToastAndroid.show('' + position, ToastAndroid.SHORT);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.actionBar}>
          <Text style={{color: theme.actionBar.fontColor, fontSize: theme.actionBar.fontSize}}>我</Text>
        </View>
        {Platform.OS === 'android' ?
          <TouchableNativeFeedback onPress={this._onPressCallback.bind(this, 0)}>
            <View style={[styles.intro]}>
              <Avatar image={require('../image/logo_og.png')} size={px2dp(55)} textSize={px2dp(20)}/>
              <View style={{marginLeft: px2dp(12)}}>
                <Text style={{color: theme.text.color, fontSize: 20}}>Noprom</Text>
                <TextButton text="添加职位 @添加公司" color="#949494" fontSize={px2dp(13)}/>
              </View>
              <View style={{flex: 1, flexDirection:'row', justifyContent: 'flex-end'}}>
                <Icon name="ios-arrow-forward" color="#ccc" size={px2dp(30)}/>
              </View>
            </View>
          </TouchableNativeFeedback>
          :
          <TouchableOpacity onPress={this._onPressCallback.bind(this, 0)}>
            <View style={[styles.intro]}>
              <Avatar image={require('../image/logo_og.png')} size={px2dp(55)} textSize={px2dp(20)}/>
              <View style={{marginLeft: px2dp(12)}}>
                <Text style={{color: theme.text.color, fontSize: 20}}>Noprom</Text>
                <TextButton text="添加职位 @添加公司" color="#949494" fontSize={px2dp(13)}/>
              </View>
              <View style={{flex: 1, flexDirection:'row', justifyContent: 'flex-end'}}>
                <Icon name="ios-arrow-forward" color="#ccc" size={px2dp(30)}/>
              </View>
            </View>
          </TouchableOpacity>
        }
        <View style={styles.list}>
             <Item icon="md-heart" text="我的收藏" subText="15篇" iconColor="#32cd32" onPress={this._onPressCallback.bind(this, 1)}/>
             <View style={{height: 1 / PixelRatio.get(), backgroundColor: '#c4c4c4'}}/>
             <Item icon="md-eye" text="阅读过的文章" subText="15篇" onPress={this._onPressCallback.bind(this, 2)}/>
             <View style={{height: 1 / PixelRatio.get(), backgroundColor: '#c4c4c4'}}/>
             <Item icon="md-pricetag" text="标签管理" subText="9个" onPress={this._onPressCallback.bind(this, 3)}/>
         </View>
         <View style={{height: 1 / PixelRatio.get(), backgroundColor: '#c4c4c4'}}/>
         <View style={styles.list}>
             <Item icon="md-ribbon" text="掘金排名" iconColor="#ff4500" onPress={this._onPressCallback.bind(this, 4)}/>
             <View style={{height: 1/PixelRatio.get(), backgroundColor: '#c4c4c4'}}/>
             <Item icon="md-settings" text="设置" onPress={this._onPressCallback.bind(this, 5)}/>
         </View>
         <View style={{height: 1 / PixelRatio.get(), backgroundColor: '#c4c4c4'}}/>
      </View>
    );
  }
}

class Item extends Component {
    static propTypes = {
        icon: PropTypes.string.isRequired,
        iconColor: PropTypes.string,
        text: PropTypes.string.isRequired,
        subText: PropTypes.string,
        onPress: PropTypes.func
    }

    static defaultProps = {
        iconColor: 'gray'
    }

    render(){
        const {icon, iconColor, text, subText, onPress} = this.props;

        if(Platform.OS === 'android'){
            return(
                <TouchableNativeFeedback onPress={onPress}>
                    <View style={styles.listItem}>
                        <Icon name={icon} size={px2dp(22)} color={iconColor}/>
                        <Text style={{color: 'black', fontSize: px2dp(15), marginLeft: px2dp(20)}}>{text}</Text>
                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}>
                            <Text style={{color: "#ccc"}}>{subText}</Text>
                        </View>
                    </View>
                </TouchableNativeFeedback>
            );
        } else if(Platform.OS === 'ios'){
            return(
                <TouchableOpacity onPress={onPress} activeOpacity={theme.btnActiveOpacity}>
                    <View style={styles.listItem}>
                        <Icon name={icon} size={px2dp(22)} color={iconColor}/>
                        <Text style={{color: 'black', fontSize: px2dp(15), marginLeft: px2dp(20)}}>{text}</Text>
                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}>
                            <Text style={{color: "#ccc"}}>{subText}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            );
        }
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.pageBackgroundColor
  },
  actionBar: {
    height: theme.actionBar.height,
    backgroundColor: theme.actionBar.backgroundColor,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: (Platform.OS === 'ios') ? px2dp(20) : 0,
  },
  intro: {
    height: px2dp(100),
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: px2dp(20),
    borderTopWidth: 1 / PixelRatio.get(),
    borderBottomWidth: 1 / PixelRatio.get(),
    borderBottomColor: '#c4c4c4',
    borderTopColor: '#e4e4e4',
  },
  list:{
     borderTopWidth: 1.5 / PixelRatio.get(),
     borderTopColor: '#e4e4e4',
     marginTop: px2dp(15)
   },
   listItem: {
       flexGrow: 1,
       height: px2dp(55),
       backgroundColor: 'white',
       flexDirection: 'row',
       alignItems: 'center',
       paddingLeft: px2dp(25),
       paddingRight: px2dp(25)
    }
});
