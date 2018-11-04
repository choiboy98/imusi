import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Login from './Scenes/Login';
import Camera from './Scenes/CameraScene'
//import authentication from './components/authentication'
import Music from './Scenes/Music'
export default class App extends React.Component {
  render() {
    return (
      //<Login />
      //<Camera />
      //<authentication/>
      <Music/>
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
