import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Activity from '../Components/ActivityComponent/ActivityComponent';
export default class ActivityComponent extends Component{
    render(){
        return(
            <Activity {...this.props}/>
        )
        
    }
}