import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Login from './Scenes/Login';
import Camera from './Scenes/CameraScene'

import { createStackNavigator } from 'react-navigation';

class App extends React.Component {
  render() {
    return (
      //<Login />
      <Camera />
    );
  }
}

export default createStackNavigator({
  Home: {
    screen: Login
  },
  CameraScreen: {
    screen: Camera
  }
},
{
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
