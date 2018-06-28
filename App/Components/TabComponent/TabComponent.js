import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';
import Screen2Component from '../Screen2Component/Screen2Component';
import FooterComponent from '../Screen2Component/FooterComponent/FooterComponent';
import TabStyles from './TabStyles';
import Screen3Component from '../Screen3Component/Screen3Component'
export default class TabComponent extends Component {

    constructor(props){
        super(props)
        this.state = {
            currentTab: "activity"
        }
        this.changeTab = this.changeTab.bind(this)
    }

    changeTab(val){
        this.setState({
            currentTab: val
        })
    }
    render() {
        return (
            <View style = {TabStyles.tabContainer}>
            
                <View style = {TabStyles.MainView}>

                {
                this.state.currentTab === "activity"
                
                ?
                <Screen2Component />
                :
                <Screen3Component/>
            }
                   
                </View>
                <View style={TabStyles.footerContainer}>
                    <FooterComponent changeTab = {this.changeTab}/>
                </View>
            </View>
        )
    }
}