import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import screen1Styles from "./Styles/screen1Styles";
export default class Screen1Component extends Component {



    render() {
        return (
            <View style={screen1Styles.container}>
                <View style = {screen1Styles.imageView}>
                    <Image 
                        style = {screen1Styles.image}
                        source={require('../images/carvLogo.png')}
                    />
                </View>

                <TouchableOpacity style={screen1Styles.getStartedBtn} onPress={() => this.props.changeState("screen2")}>
                    <Text style={screen1Styles.getStartedText}>{"Get started"}</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.props.changeState("screen2")} style={screen1Styles.loginView}>
                    <Text style={screen1Styles.aleadyUsingItText}>{"Already using Carv? "}</Text>
                    <Text style={screen1Styles.loginText}>{"Log in"}</Text>
                </TouchableOpacity >

                <TouchableOpacity 
                onPress = {()=> this.props.changeState("screen2")}
                style={screen1Styles.fittingInstructionView}>
                    <Text style={screen1Styles.fittingInstructionText}>{"Fitting instructions"}</Text>
                </TouchableOpacity>
            </View>

        )

    }
}