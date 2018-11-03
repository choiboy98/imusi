import React from "react";
import { Button, StyleSheet, View, Dimensions, Text, Image, TextInput, ImageBackground , Icon} from "react-native";


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

          <ImageBackground
            source = {require("../assets/snowy_mountain_background.png")}
            style = {styles.logoContainer}
            >
          <Image
            style = {{width:400,height:250,marginTop: 40}}
            source = {require('../assets/imusi_logo_2.png')}
            
            />
          
          <TextInput
            style = {styles.input} 
            autocorrect = {false}
            placeholder = "Spotify Username"
            />

          <TextInput
            style = {styles.input2}
            autocorrect = {false}
            placeholder = "Password"
            />

          <View style = {styles.buttonBox}>
            <Button title="Log in" color = "#fff" />

            </View>

          <Text style = {{color: '#fff', marginTop: 100, marginBottom: 5, textAlign: 'center'}}>
            Don't have Spotify?
            </Text> 

          <View style = {styles.buttonBox1}>
          
            <Button 
              color = "rgb(154,236,219)"
              title = 'Skip this step'
              marginBottom = {20}
            />
            </View>
          </ImageBackground>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    width:'100%',
    height: '100%'
  },

  
  buttonBox: {
    width: 175,
    height: 40,
    backgroundColor: "rgba(154,236,219, 0.5)",
    borderRadius: 20
  },
  buttonBox1: {
    width: 175,
    height: 40,
    backgroundColor: "rgba(119,140,163,0.8)",
    borderRadius: 20
  },
  input: {
    height: 40,
    width: 175,
    textAlign: 'center',
    marginTop: -40,
    backgroundColor: "rgba(255,255,255,0.5)",
    marginBottom: 20,
    color: '#fff',
    borderRadius: 20,
    paddingHorizontal: 20,
  },
  input2: {
    height: 40,
    width: 175,
    textAlign: 'center',
    marginTop: -15,
    backgroundColor: "rgba(255,255,255,0.5)",
    marginBottom: 20,
    color: '#fff',
    borderRadius: 20,
    paddingHorizontal: 20,
  },

});