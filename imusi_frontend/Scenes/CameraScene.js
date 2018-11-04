import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

import { Camera, Permissions } from 'expo';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';

import FormData from 'FormData';
import Loader from './Loader';

export default class CameraScene extends React.Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
    flash: false,
    byteArray: '',
    loading: false
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
      this.state.byteArray = photo.base64;
      this.getSpotifyData()
      //console.log(this.state.byteArray);
      //console.log(base64js.toByteArray(photo['base64']));
    }
  }

  async getSpotifyData() {
    try {
      var formData = new FormData();
      formData.append('bytes', this.state.byteArray);

      let response = await fetch('https://imusi.herokuapp.com/image/', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: formData,
      });
    } catch (error) {
      console.error(error);
    }
}

  bin2String(array) {
    var result = "";
    for (var i = 0; i < array.length; i++) {
      result += String.fromCharCode(array[i], 2);
    }
    return result;
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
          <Loader loading={this.state.loading} />
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
