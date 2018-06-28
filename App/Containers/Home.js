import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Home from '../Components/HomeComponent/HomeComponent';
export default class HomeContainer extends Component{
    render(){
        return(
            <Home {...this.props}/>
        )
        
    }
}