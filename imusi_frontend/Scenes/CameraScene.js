import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

import { Camera, Permissions } from 'expo';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';

var base64js = require('base64-js');

export default class CameraScene extends React.Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
    flash: false,
    byteArray: null
  };

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ 
      hasCameraPermission: status === 'granted' 
    });
  }

  flipCamera = () => {
    this.setState({
      type: this.state.type === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back,
    });
  }

  snap = async() => {
    if (this.camera) {
      let photo = await this.camera.takePictureAsync({base64: true});
      this.state.byteArray = base64js.toByteArray(photo.base64);
      this.getSpotifyData()
      //console.log(this.state.byteArray);
      //console.log(base64js.toByteArray(photo['base64']));
    }
  }

  async getSpotifyData() {
    console.log("inside data");
  try {
    console.log("inside try");
    let response = await fetch('https://imusi.herokuapp.com/image', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        bytes: this.state.byteArray,
      }),
    });
    console.log(response);
    //let responseJson = await response.json();
    //console.log(responseJson);
    //return responseJson.result.crimes;
  } catch (error) {
    console.error(error);
  }
}

  setCameraRef = (ref) => {
    this.camera = ref;
  } 

  render() {
    if (this.state.hasCameraPermission === null) {
      return <View />;
    } else if (this.state.hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {

      let logo_size = 50;

      return (
        <View style={styles.container}>
          <Camera style={styles.container} type={this.state.type} ref = {this.setCameraRef}>
            <View style={styles.buttonContainer}>

              <MaterialIcons style = {styles.buttonDummy} name = "camera" size = {logo_size} color = "white" />
              
              <TouchableOpacity
                style={styles.button}
                onPress={this.snap}>
                <MaterialIcons name = "camera" size = {logo_size} color = "white" />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.button}
                onPress={this.flipCamera}>
                <Ionicons name = "ios-reverse-camera" size = {logo_size} color = "white" />
              </TouchableOpacity>


            </View>
          </Camera>
        </View>
      );
    }
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
