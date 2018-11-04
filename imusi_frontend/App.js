import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Login from './Scenes/Login';
import Camera from './Scenes/CameraScene'

export default class App extends React.Component {
  render() {
    return (
      //<Login />
      <Camera />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
