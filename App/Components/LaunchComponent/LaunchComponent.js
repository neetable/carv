import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import style from "./LaunchStyles";
export default class LaunchComponent extends Component {
    render() {
        return (
            <View style={style.container}>
                <View style={[style.imageView, style.itemCenterAlign]}>
                    <Image source={require('../../images/carvLogo.png')}
                    />
                </View>

                <TouchableOpacity style={[style.getStartedBtn, style.itemCenterAlign]} onPress={() => this.props.changeState("Activity")}>
                    <Text style={style.getStartedText}>{"Get started"}</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.props.changeState("Activity")} style={[style.loginView, style.itemCenterAlign]}>
                    <Text style={[style.colorWhite, style.fontSizeSmall]}>{"Already using Carv? "}</Text>
                    <Text style={[style.bold, style.colorWhite, style.fontSizeSmall]}>{"Log in"}</Text>
                </TouchableOpacity >

                <TouchableOpacity
                    onPress={() => this.props.changeState("Activity")}
                    style={[style.fittingInstructionView, style.itemCenterAlign]}>
                    <Text style={[style.colorWhite, style.fittingInstructionText]}>{"Fitting instructions"}</Text>
                </TouchableOpacity>
            </View>

        )

    }
}