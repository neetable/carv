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
import Launch from "./App/Containers/Launch";
import Home from "./App/Containers/Home";

type Props = {};
export default class App extends Component<Props> {

  constructor(props) {
    super(props);
    console.disableYellowBox = true;
    this.state = {
      screen: 'Launch'
    }
    this.changeState = this.changeState.bind(this);
  }

  changeState(stateVal) {
    this.setState({
      screen: stateVal
    })
  }
  render() {
    if (this.state.screen === 'Launch') {
      return (
        <Launch changeState={this.changeState} />
      )

    } else {
      return (
        <Home changeState={this.changeState} />
        // <TabComponent changeState={this.changeState}/>
      )

    }

  }
}

