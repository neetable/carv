import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';
import ActivityComponent from '../ActivityComponent/ActivityComponent'
import Screen3Component from '../Screen3Component/Screen3Component'
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation';

export default createBottomTabNavigator(
    {
        Activity: { screen: ActivityComponent },
        Leaderboard: { screen: Screen3Component },
        Record: { screen: Screen3Component },
        Profile: { screen: Screen3Component },
        More: { screen: Screen3Component },
    },
    {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'Activity') {
                    if (focused)
                        return <Image style={{ width: 29, height: 29 }} source={require('../../images/tabBarActivityActive.png')} />;
                    else
                        return <Image style={{ width: 29, height: 29 }} source={require('../../images/tabBarActivityInactive.png')} />;
                } else if (routeName === 'Leaderboard') {
                    if (focused)
                        return <Image style={{ width: 29, height: 29 }} source={require('../../images/tabBarLeaderboardActive.png')} />;
                    else
                        return <Image style={{ width: 29, height: 29 }} source={require('../../images/tabBarLeaderboardInactive.png')} />;
                } else if (routeName === 'Record') {
                    if (focused)
                        return <Image style={{ width: 29, height: 29 }} source={require('../../images/tabBarRecordActive.png')} />;
                    else
                        return <Image style={{ width: 29, height: 29 }} source={require('../../images/tabBarRecordInactive.png')} />;
                } else if (routeName === 'Profile') {
                    if (focused)
                        return <Image style={{ width: 29, height: 29 }} source={require('../../images/tabBarProfileActive.png')} />;
                    else
                        return <Image style={{ width: 29, height: 29 }} source={require('../../images/tabBarProfileInactive.png')} />;
                } else if (routeName === 'More') {
                    if (focused)
                        return <Image style={{ width: 29, height: 29 }} source={require('../../images/tabBarMoreActive.png')} />;
                    else
                        return <Image style={{ width: 29, height: 29 }} source={require('../../images/tabBarMoreInactive.png')} />;
                }
            },
        }),
        tabBarComponent: BottomTabBar,
        tabBarPosition: 'bottom',
        tabBarOptions: {
            activeTintColor: 'rgb(32,139,209)',
            inactiveTintColor: 'rgb(161, 174, 182)',
        },
        animationEnabled: false,
        swipeEnabled: false,
    }
);