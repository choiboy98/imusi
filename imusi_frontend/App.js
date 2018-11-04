import React from 'react';
import { StyleSheet, Text, View, WebView, Linking } from 'react-native';

import Login from './Scenes/Login';
import Camera from './Scenes/CameraScene';
import SpotifyAuth from './Scenes/SpotifyAuth';

import {createStackNavigator} from 'react-navigation';
//import Spotify from './spotify_api'

class App extends React.Component {
  render() {
    <View style={styles.container}/>
  }
}

export default createStackNavigator({
  Home: {
    screen: Login,
    navigationOptions: {
        header: null,
        headerMode: 'screen',
      }
  },
  CameraScreen: {
    screen: Camera,
    navigationOptions: {
        header: null,
        headerMode: 'screen',
      }
  },
  SpotifyAuthScreen: {
    screen: SpotifyAuth
  }

},
{
    // headerMode: 'none',
    // navigationOptions: {
    //     headerVisible: false,
    // }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
