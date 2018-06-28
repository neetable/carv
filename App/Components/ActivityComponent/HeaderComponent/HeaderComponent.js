import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import style from './HeaderStyle'
export default class HeaderComponent extends Component {
    render() {
        return (
            <View style={style.container}>
                <Text style={style.headerText}>Activity</Text>
            </View>
        )
    }
}