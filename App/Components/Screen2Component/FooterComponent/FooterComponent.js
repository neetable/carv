import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';

import FooterStyle from './FooterStyle';
export default class FooterComponent extends Component {
    render() {
        return (
            <View style={FooterStyle.container}>
                <TouchableOpacity 
                onPress = {()=>this.props.changeTab("activity")}
                style={FooterStyle.imageView}>
                    <Image
                        style={FooterStyle.image}
                        source={require('../../../images/tabBarSessionsActive.png')}
                    />
                    <Text style = {FooterStyle.selectedTabText}>{"Activity"}</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                onPress = {()=>this.props.changeTab("activity")}
                style={FooterStyle.imageView}>
                    <Image
                        style={FooterStyle.image}
                        source={require('../../../images/tabBarLeaderboardInactive.png')}
                    />
                    <Text style = {FooterStyle.unselectedTabText}>{"Leaderboard"}</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress = {()=>this.props.changeTab("nextTab")}
                style={FooterStyle.imageView}>
                    <Image
                        style={FooterStyle.image}
                        source={require('../../../images/tabBarRecordInactive.png')}
                    />
                    <Text style = {FooterStyle.unselectedTabText}>{"Record"}</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress = {()=>this.props.changeTab("nextTab")}
                style={FooterStyle.imageView}>
                    <Image
                        style={FooterStyle.image}
                        source={require('../../../images/tabBarProfileInactive.png')}
                    />
                    <Text style = {FooterStyle.unselectedTabText}>{"Profile"}</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress = {()=>this.props.changeTab("nextTab")}
                style={FooterStyle.imageView}>
                    <Image
                        style={FooterStyle.image}
                        source={require('../../../images/tabBarMoreInactive.png')}
                    />
                    <Text style = {FooterStyle.unselectedTabText}>{"More"}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}