import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import headerStyle from './HeaderStyle'
export default class HeaderComponent extends Component {
    render() {
        return (
            <View style = {headerStyle.imageView}>
            <Image
                style={headerStyle.image}
                source={require('../../../images/group11.png')}
            />
            </View>
        )
    }
}