import React, {Component} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {backgroundColor} from '../constants';

export default class SplashScreen extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.replace('Login');
    }, 2000);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../assets/salt_logo.png')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: backgroundColor,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
