import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import RNAChart from 'react-native-animate-chart'

export default class AnimateChartDemo extends Component {
  render() {
    return (
      <View>
        <RNAChart
          title="This is a demo project"
          subtitle="Good Job"
          width="320"
          height="300"
          series = { this.getSeries() }
          />
      </View>
    );
  }

  getSeries() {
    return [
      {
        data:12,
        normalFill:`rgb(${this.rnd()},${this.rnd()},${this.rnd()})`,
        activeFill:"#029ff9",
        normalStroke:"#4990E2",
        activeStroke:"#4990E2"
      },{
        data:32,
        normalFill:`rgb(${this.rnd()},${this.rnd()},${this.rnd()})`,
        activeFill:"#029ff9",
        normalStroke:"#4990E2",
        activeStroke:"#4990E2"
      },{
        data:54,
        normalFill:`rgb(${this.rnd()},${this.rnd()},${this.rnd()})`,
        activeFill:"#029ff9",
        normalStroke:"#4990E2",
        activeStroke:"#4990E2"
      },{
        data:12,
        normalFill:`rgb(${this.rnd()},${this.rnd()},${this.rnd()})`,
        activeFill:"#029ff9",
        normalStroke:"#4990E2",
        activeStroke:"#4990E2"
      },{
        data:43,
        normalFill:`rgb(${this.rnd()},${this.rnd()},${this.rnd()})`,
        activeFill:"#029ff9",
        normalStroke:"#4990E2",
        activeStroke:"#4990E2"
      },{
        data:20,
        normalFill:`rgb(${this.rnd()},${this.rnd()},${this.rnd()})`,
        activeFill:"#029ff9",
        normalStroke:"#4990E2",
        activeStroke:"#4990E2"
      },{
        data:18,
        normalFill:`rgb(${this.rnd()},${this.rnd()},${this.rnd()})`,
        activeFill:"#029ff9",
        normalStroke:"#4990E2",
        activeStroke:"#4990E2"
      },{
        data:32,
        normalFill:`rgb(${this.rnd()},${this.rnd()},${this.rnd()})`,
        activeFill:"#029ff9",
        normalStroke:"#4990E2",
        activeStroke:"#4990E2"
      },{
        data:30,
        normalFill:`rgb(${this.rnd()},${this.rnd()},${this.rnd()})`,
        activeFill:"#029ff9",
        normalStroke:"#4990E2",
        activeStroke:"#4990E2"
      },{
        data:17,
        normalFill:`rgb(${this.rnd()},${this.rnd()},${this.rnd()})`,
        activeFill:"#029ff9",
        normalStroke:"#4990E2",
        activeStroke:"#4990E2"
      }
    ]
  }


  rnd(){
    return parseInt(200*Math.random()+55)
  }
}

AppRegistry.registerComponent('AnimateChartDemo', () => AnimateChartDemo);
