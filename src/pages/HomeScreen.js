import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {backgroundColor, secondaryColor, yellowColor} from '../constants';

class HomeScreen extends Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: backgroundColor,
          flex: 1,
          justifyContent: 'center',
        }}>
        <Text
          style={{
            alignSelf: 'center',
            fontSize: 24,
            color: yellowColor,
            fontWeight: 'bold',
          }}>
          Login Berhasil :)
        </Text>
      </View>
    );
  }
}

export default HomeScreen;
