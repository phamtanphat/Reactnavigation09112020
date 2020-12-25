import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default class Home extends Component {
  constructor(props) {
    super(props);
    console.log('constructor Home');
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <Text> textInComponent </Text>
      </View>
    );
  }

  componentWillUnmount() {
    console.log('un mount screen');
  }
}
