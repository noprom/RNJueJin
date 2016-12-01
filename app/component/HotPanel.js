'use strict';

import React, {Component, PropTypes} from 'react';
import {StyleSheet, View, Text, Dimensions, TouchableOpacity} from 'react-native';
import px2dp from '../util/px2dp';
import Icon from 'react-native-vector-icons/Octicons';
import theme from '../config/theme';

export default class HotPanel extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired
    };

    render() {
        const {title} = this.props;

        return(
            <View style={styles.container}>
                <View style={styles.title}>
                    <View style={styles.cell}>
                        <Icon name="flame" color={theme.themeColor} size={15}/>
                        <Text style={{color: theme.themeColor, fontSize: theme.scrollView.fontSize, marginLeft: 5}}>{title}</Text>
                    </View>
                    <View style={styles.cell}>
                        <TouchableOpacity
                            style={{marginRight: 15}}>
                            <Icon name="sync" color="#c4c4c4" size={20} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Icon name="x" color="#c4c4c4" size={20} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
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
    }
});
