import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Launch from '../Components/LaunchComponent/LaunchComponent';
export default class LaunchComponent extends Component{

    render(){
        return(
            <Launch {...this.props}/>
        )
    }
}