/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default class Login extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Home')}
          style={{backgroundColor: 'green', padding: 10, borderRadius: 5}}>
          <Text style={{color: 'white'}}>Navigate Screen Home</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
