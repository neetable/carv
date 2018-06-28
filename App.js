/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  Text,
  View
} from 'react-native';
import Screen1 from "./App/Containers/Screen1";
import Screen2 from "./App/Containers/Screen2";
import TabComponent from "./App/Components/TabComponent/TabComponent"

type Props = {};
export default class App extends Component<Props> {

  constructor(props){
    super(props);
    this.state = {
      screen: 'screen1'
    }
    this.changeState = this.changeState.bind(this);
  }

  changeState(stateVal){
    this.setState({
      screen: stateVal
    })
  }
  render() {
    if(this.state.screen === 'screen1'){
      return(
        <Screen1 changeState={this.changeState}/>
      )
      
    }else{
      return(
        // <Screen2 changeState={this.changeState}/>
        <TabComponent changeState={this.changeState}/>

      )
      
    }
    
  }
}

