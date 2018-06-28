import React, { Component } from 'react';
import {
    View,
} from 'react-native';
import HeaderComponent from "./HeaderComponent/HeaderComponent";
import MapComponent from "./BodyComponent/BodyComponent";
import style from '../ActivityComponent/ActivityStyles'

export default class ActivityComponent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={style.mainContainer}>
                <HeaderComponent />
                <View style={style.container}>
                    <MapComponent />
                </View>
            </View>
        )
    }
}


