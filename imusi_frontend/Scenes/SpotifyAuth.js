import React from 'react';
import { StyleSheet, Text, View, WebView, Linking } from 'react-native';

var SpotifyWebApi = require('spotify-web-api-node');
var scopes = ['user-read-private', 'user-read-email'],
    redirectUri = 'http://localhost:8888/callback/',
    clientId = 'c38558d936cf40cfbf11a34fcecaa36a';

// Setting credentials can be done in the wrapper's constructor, or using the API object's setters.
var spotifyApi = new SpotifyWebApi({
  redirectUri: redirectUri,
  clientId: clientId
});

var authorizeURL = spotifyApi.createAuthorizeURL(scopes);

export default class SpotifyAuth extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      codeUri: undefined,
    };
  }

  _onNavigationStateChange(webViewState){
    let redirect = 'http://localhost:8888/callback/';
    if (webViewState.url.substring(0, redirect.length) === redirect) {
      this.state.codeUri = webViewState.url;
      this.state.codeUri = this.state.codeUri.substring(this.state.codeUri.indexOf("=") + 1, this.state.codeUri.length);

      this.props.navigation.navigate("CameraScreen", {
              code: this.state.codeUri,
            });
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
            onNavigationStateChange={this._onNavigationStateChange.bind(this)}
            javaScriptEnabled = {true}
            domStorageEnabled = {true}
            injectedJavaScript = {this.state.cookie}
            startInLoadingState={false}
          />
        );
      }
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
