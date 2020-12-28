/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Navigate Screen Home',
    };
  }
  onChangeText = (text) => {
    this.setState({text});
  };
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate('Home', {
              user: 'reactnavigation',
              onChangeText: this.onChangeText,
            })
          }
          style={{backgroundColor: 'green', padding: 10, borderRadius: 5}}>
          <Text style={{color: 'white'}}>{this.state.text}</Text>
        </TouchableOpacity>
      </View>
    );
  }
  componentWillUnmount() {
    console.log('un mount screen Login');
  }
}
