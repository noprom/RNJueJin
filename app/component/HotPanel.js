'use strict';

import React, { Component, PropTypes } from 'react';
import { StyleSheet, View, Text, Image, Dimensions, TouchableOpacity, PixelRatio, Platform, TouchableNativeFeedback } from 'react-native';
import px2dp from '../util/px2dp';
import Icon from 'react-native-vector-icons/Octicons';
import theme from '../config/theme';

export default class HotPanel extends Component {

    constructor(props) {
      super(props);
      this.state = {
        isHotPanelShow: true
      }
    }

    static propTypes = {
        title: PropTypes.string.isRequired,
        contents: PropTypes.array
    };

    _closeBtCallback() {
      this.setState({isHotPanelShow: false});
    }

    _refreshBtnCallback() {

    }

    _hotPanelCallback() {

    }

    render() {
        const {title, contents} = this.props;

        if(this.state.isHotPanelShow) {
           return (
               <View style={styles.container}>
                   <View style={styles.title}>
                       <View style={styles.cell}>
                           <Icon name="flame" color={theme.themeColor} size={px2dp(16)}/>
                           <Text style={{
                               color: theme.themeColor,
                               fontSize: theme.scrollView.fontSize,
                               marginLeft: px2dp(5)
                           }}>{title}</Text>
                       </View>
                       <View style={styles.cell}>
                           <TouchableOpacity
                               style={{marginRight: px2dp(15)}}
                               onPress={this._refreshBtnCallback.bind(this)}>
                               <Icon name="sync" color="#c4c4c4" size={px2dp(20)}/>
                           </TouchableOpacity>
                           <TouchableOpacity
                               onPress={this._closeBtCallback.bind(this)}>
                               <Icon name="x" color="#c4c4c4" size={px2dp(20)}/>
                           </TouchableOpacity>
                       </View>
                   </View>
                   <View style={{height: 1 / PixelRatio.get(), backgroundColor: '#f1f1f1'}}></View>
                   <View style={styles.list}>
                      {
                        contents.map((item, index) => {
                          if(Platform.OS === 'ios') {
                           return(
                               <TouchableOpacity
                                   key={index}
                                   onPress={this._hotPanelCallback.bind(this, item.url)}>
                                   <View>
                                       <View style={styles.listItem}>
                                           <View style={{flex: 75, marginTop: px2dp(15)}}>
                                               <Text style={styles.content}>{item.title}</Text>
                                               <View style={styles.infoBar}>
                                                   <Icon name="heart" size={px2dp(13)} color={theme.grayColor}/>
                                                   <Text style={styles.infoBarText}>{item.star}</Text>
                                                   <Icon name="person" size={px2dp(12)} color={theme.grayColor}/>
                                                   <Text style={styles.infoBarText}>{item.author}</Text>
                                                   <Icon name="clock" size={px2dp(13)} color={theme.grayColor}/>
                                                   <Text style={styles.infoBarText}>{item.time}</Text>
                                               </View>
                                           </View>
                                           <View style={{flex: 25, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center'}}>
                                               <Image style={styles.image} source={require('../image/logo_og.png')} resizeMode="stretch"/>
                                           </View>
                                       </View>
                                       <View style={{height: 1/PixelRatio.get(), backgroundColor: '#f1f1f1'}}></View>
                                 </View>
                               </TouchableOpacity>
                           )
                         }else if(Platform.OS === 'android'){
                          return(
                             <TouchableNativeFeedback
                                 key={index}
                                 onPress={this._hotPanelCallback.bind(this, item.url)}>
                                 <View>
                                     <View style={styles.listItem}>
                                         <View style={{flex: 75, marginTop: px2dp(15)}}>
                                             <Text style={styles.content}>{item.title}</Text>
                                             <View style={styles.infoBar}>
                                                 <Icon name="heart" size={px2dp(13)} color={theme.grayColor}/>
                                                 <Text style={styles.infoBarText}>{item.star}</Text>
                                                 <Icon name="person" size={px2dp(12)} color={theme.grayColor}/>
                                                 <Text style={styles.infoBarText}>{item.author}</Text>
                                                 <Icon name="clock" size={px2dp(13)} color={theme.grayColor}/>
                                                 <Text style={styles.infoBarText}>{item.time}</Text>
                                             </View>
                                         </View>
                                         <View style={{flex: 25, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center'}}>
                                             <Image style={styles.image} source={require('../image/logo_og.png')} resizeMode="stretch"/>
                                         </View>
                                     </View>
                                     <View style={{height: 1/PixelRatio.get(), backgroundColor: '#f1f1f1'}}></View>
                                 </View>
                             </TouchableNativeFeedback>
                         )}})
                      }
                   </View>
               </View>
          )
        } else {
          return null;
        }
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        marginTop: 12
    },
    cell: {
      flexDirection: 'row',
      alignItems: 'center'
    },
    title: {
        flexDirection: 'row',
        width: theme.screenWidth,
        justifyContent: 'space-between',
        paddingLeft: px2dp(15),
        paddingRight: px2dp(15)
    },
    list: {
      width: theme.screenWidth,
    },
    listItem: {
        height: px2dp(90),
        flexDirection: 'row',
        paddingLeft: px2dp(20),
        paddingRight: px2dp(15),
        alignItems: 'center'
    },
    content: {
        color: '#000',
        fontSize: px2dp(15),
    },
    image: {
        height: px2dp(60),
        width: px2dp(60)
    },
    infoBar: {
        flexDirection: 'row',
        marginTop: px2dp(8)
    },
    infoBarText: {
        fontSize: px2dp(10),
        marginRight: px2dp(12),
        color: theme.grayColor
    }
});
