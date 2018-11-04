import React from 'react';
import { StyleSheet, Text, View, WebView, Linking } from 'react-native';

import Login from './Scenes/Login';
import Camera from './Scenes/CameraScene'
//import Spotify from './spotify_api'


var SpotifyWebApi = require('spotify-web-api-node');
var scopes = ['user-read-private', 'user-read-email'],
    redirectUri = 'http://localhost:8888/callback/',
    clientId = 'c38558d936cf40cfbf11a34fcecaa36a';

// Setting credentials can be done in the wrapper's constructor, or using the API object's setters.
var spotifyApi = new SpotifyWebApi({
  redirectUri: redirectUri,
  clientId: clientId
});

// Create the authorization URL
var authorizeURL = spotifyApi.createAuthorizeURL(scopes);

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uri: undefined
    }
  }


  render() {
    if (authorizeURL === undefined) {
      return (<View/>);
    } else {
      return (
        <WebView
          ref={(ref) => { this.webview = ref; }}
          source={{ uri: authorizeURL }}
          onNavigationStateChange={(event) => {
            if (event.url !== authorizeURL) {
              this.webview.stopLoading();
              Linking.openURL(event.url);
            }
          }}
        />
      );
    }
  }
}

export default createStackNavigator({
  Home: {
    screen: Login
  },
  CameraScreen: {
    screen: Camera
  },

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
