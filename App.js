import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from './src/pages/Splashscreen';
import LoginScreen from './src/pages/LoginScreen';
import RegisterScreen from './src/pages/RegisterScreen';
import HomeScreen from './src/pages/HomeScreen';

const Stack = createStackNavigator();

const hide = {headerShown: false};

class App extends Component {
  state = {};
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen name="Splash" component={SplashScreen} options={hide} />
          <Stack.Screen name="Login" component={LoginScreen} options={hide} />
          <Stack.Screen name="Register" component={RegisterScreen} options={hide} />
          <Stack.Screen name="Home" component={HomeScreen} options={hide} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
