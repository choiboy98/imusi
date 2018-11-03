import React from "react";
import { Button, StyleSheet, View, Dimensions, Text, Image, TextInput } from "react-native";

export default class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  componentDidMount() {
  }

  render() {
    return (
      <View style = {styles.container}>
        <View style = {styles.logoContainer}>
          <Image
            style = {styles.logo}
            source = {require('../assets/Treble.png')}
            />

          <TextInput
            style = {styles.input} 
            pleaceholderTextColor = "#fff"
            placeholder = "Spotify Username"
            />

            <Text>Hi</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3498db',
  },

  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
  },

  logo: {
    width: 30,
    height: 83,
  },

  input: {
    height: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    margin: 20,
    color: '#fff',
    paddingHorizontal: 20
  },

});