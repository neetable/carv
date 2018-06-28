import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Screen1Component from '../Components/Screen1Component';
export default class Screen1 extends Component{

    render(){
        return(
            <Screen1Component {...this.props}/>

        )
    }
}