import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Screen2Component from '../Components/Screen2Component/Screen2Component';
export default class Screen2 extends Component{

    render(){
        return(
            <Screen2Component {...this.props}/>
        )
        
    }
}