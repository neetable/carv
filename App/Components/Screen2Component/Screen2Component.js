import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';
import { TabNavigator } from 'react-navigation';
import FooterStyle from './FooterComponent/FooterStyle'
import HeaderComponent from './HeaderComponent/HeaderComponent';
import MapComponent from "./MapComponent/MapComponent";
import FooterComponent from './FooterComponent/FooterComponent';
import screen2Styles from '../Styles/screen2Styles'

import Screen1Component from '../Screen1Component'
export default class Screen2Component extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={screen2Styles.screen2Container}>
                <View style={screen2Styles.headerContainer}>
                    <HeaderComponent />
                </View>
                <View style={screen2Styles.mapContainer}>
                    <MapComponent />
                </View>
            </View>
        )
    }
}


