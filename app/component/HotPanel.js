'use strict';

import React, { Component, PropTypes } from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity, PixelRatio } from 'react-native';
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
        contents: PropTypes.object
    };

    _closeBtCallback() {
      this.setState({isHotPanelShow: false});
    }

    _refreshBtnCallback() {

    }

    render() {
        const {title, contents} = this.props;

        if(this.state.isHotPanelShow) {
           return (
               <View style={styles.container}>
                   <View style={styles.title}>
                       <View style={styles.cell}>
                           <Icon name="flame" color={theme.themeColor} size={16}/>
                           <Text style={{
                               color: theme.themeColor,
                               fontSize: theme.scrollView.fontSize,
                               marginLeft: 5
                           }}>{title}</Text>
                       </View>
                       <View style={styles.cell}>
                           <TouchableOpacity
                               style={{marginRight: 15}}
                               onPress={this._refreshBtnCallback.bind(this)}>
                               <Icon name="sync" color="#c4c4c4" size={20}/>
                           </TouchableOpacity>
                           <TouchableOpacity
                               onPress={this._closeBtCallback.bind(this)}>
                               <Icon name="x" color="#c4c4c4" size={20}/>
                           </TouchableOpacity>
                       </View>
                   </View>
                   <View style={{height: 1 / PixelRatio.get(), backgroundColor: '#f1f1f1'}}></View>
                   <View style={styles.list}>

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
        width: Dimensions.get('window').width,
        justifyContent: 'space-between',
        paddingLeft: px2dp(15),
        paddingRight: px2dp(15)
    },
    list: {
      height: px2dp(30)
    }
});
