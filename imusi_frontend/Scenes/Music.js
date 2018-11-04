import React from "react";
import {Button, StyleSheet, View, Dimensions, Text, Image, TextInput, ImageBackground , TouchableOpacity} from "react-native";
import { Icon, Ionicons } from 'react-native-elements'
export default class Music extends React.Component {
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
                
                <ImageBackground
                    source = {require("../assets/snowy_mountain_background_dark.jpg")}
                    style = {styles.logoContainer}
                >
                {/*<View style = {{flexDirection: 'row', justifyContent: 'space-between' }}> */}

                    <TouchableOpacity style = {styles.arrowButton}>
                        <Icon
                            name = "arrow-back"
                            size = {30}
                            color = 'rgba(255,255,255,0.5)'
                            marginLeft = {10}
                            marginTop = {10}
                        /> 
                    </TouchableOpacity>
                    {/*<Text style = {{fontSize: 16, color: "rgba(225,225,225,0.7)"}}>
                        Genre: Pop
                    </Text> 

                    </View> */}

                    <Image 
                        style = {styles.albumCover}
                        source = {require('../assets/panic_cover.jpg')}
                    />

                    <Text style = {{fontWeight: 'bold', fontSize: 16, color: "#fff", textAlign: 'center', marginBottom: 5}}>
                        High Hopes
                    </Text>
                    <Text style = {{fontSize: 13, color: "rgba(225,225,225,0.7)", textAlign: 'center', marginBottom: 50}}>
                        Panic! At The Disco
                    </Text>
                    <View style = {{flexDirection: 'row', marginBottom: 50}}>
                        <TouchableOpacity>
                        <Icon
                            name = "skip-previous"
                            size = {55}
                            color = "rgba(225,225,225,1.0)"
                            marginRight = {20}
                            marginLeft = {60}
                        />
                        </TouchableOpacity>
                        <TouchableOpacity>
                        <Icon
                            name = "play-circle-outline"
                            size = {55}
                            color = "rgba(225,225,225,1.0)"
                          />  
                        </TouchableOpacity>
                        <TouchableOpacity>
                        <Icon
                            name = "skip-next"
                            size = {55}
                            color = "rgba(225,225,225,1.0)"
                            marginLeft = {20}
                            marginRight = {60}
                        />
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
                
            </View>

        );
    }
}
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: 'rgba(47,54,64,1.0)',
        },
        logoContainer: {
            flex: 1,
            width:'100%',
            height: '100%',
            //opacity: 0.5
          },
          arrowButton: {

            flex: 1,
           width: 60,
           marginTop: 20
          },
          albumCover: {
              alignSelf: 'center',
              marginTop: 25,
              marginBottom: 20,
              width: 275,
              height: 275,
              opacity: 1.0
          }, 
          buttonContainer: {
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            padding: 16
        },
        playContainer: {
            width: 80,
            height: 80,
            borderRadius: 40,
            borderColor: 'white',
            borderWidth: 1,
            justifyContent: 'center',
            alignItems: 'center'
        },
        play: {
            color: 'white',
            backgroundColor:'transparent',
            margin: 16,
            fontSize: 48,
            fontWeight: '800'
        }
    });

