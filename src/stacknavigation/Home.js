/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

export default class Home extends Component {
  constructor(props) {
    super(props);
    console.log('constructor Home');
  }
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity
          onPress={() => {
            this.props.route.params.onChangeText('Update finish');
            this.props.navigation.navigate('Login');
          }}
          style={{backgroundColor: 'green', padding: 10, borderRadius: 5}}>
          <Text style={{color: 'white'}}>{this.props.route.params.user}</Text>
        </TouchableOpacity>
      </View>
    );
  }

  componentWillUnmount() {
    console.log('un mount screen Home');
  }
}
