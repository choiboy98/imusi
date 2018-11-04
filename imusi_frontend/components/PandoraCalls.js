import PandoraCredentials from './PandoraCredentials';

import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

var Anesidora = require("anesidora");

var pandora = new Anesidora(PandoraCredentials.id, PandoraCredentials.pw);

export default class PandoraCalls extends React.Component {

	callPandora() {
		pandora.login(function(err) {
	    	if (err) {
	    		console.log(err);
	    	}

	    	pandora.request("user.getStationList", function(err, stationList) {
	        	if (err) {
	        		console.log(err);
	        	}

	        	var station = stationList.stations[0];
		        
	        	pandora.request("station.getPlaylist", {
	            	"stationToken": station.stationToken,
	            	"additionalAudioUrl": "HTTP_128_MP3"
	        	}, function(err, playlist) {
	            	if (err) {
	            		console.log(err);
	            	}

	            	var track = playlist.items[0];
	            	console.log("Playing '" + track.songName + "' by " + track.artistName);
	            	console.log(track.additionalAudioUrl);
	        	});
	    	});
		});
	}

	render() {
		return (
			<View style={styles.container}>
				{this.callPandora}
			</View>

		);
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonDummy: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
    marginBottom: 10,
    color: 'transparent'
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
    marginBottom: 10,
  },
  text: {
    fontSize: 18, 
    marginBottom: 10, 
    color: 'white'
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
  }
});