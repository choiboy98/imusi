import React from "react";
import {Button, StyleSheet, View, ScrollView, Text, Image, ImageBackground, TouchableOpacity , WebView} from "react-native";
import { Icon, Ionicons } from 'react-native-elements'
import { Asset, Audio, Font, Video } from 'expo'
import SingleCardView from 'react-native-simple-card';

export default class Music extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
           fetchedMusic: undefined,
           isTrue: false,
           currentTrack: undefined,
           //accessToken: this.props.accessToken
      };

      this.playMusic = this.playMusic.bind(this);
    }

    componentDidMount() {
        this.setState({
            fetchedMusic: this.props.navigation.state.params.fetchedMusic,
        })

    }

    playMusic(code) {
        console.log(code);
            this.setState({
                isTrue: true,
                currentTrack: code,
            })
        
    }

    toggleIsTrue = () => {
        this.setState({
            isTrue: !this.state.isTrue,
        })
    }

    render() {
        if (this.state.isTrue) {
            return (
                <View style={styles.container}>
                    <WebView
                        source={{ uri: 'https://open.spotify.com/embed/track/' + this.state.currentTrack}}
                        style={{marginTop: 20}}
                    />

                    <Icon
                        onPress={this.toggleIsTrue}
                        name = "arrow-back"
                        size = {50}
                        color = 'white'
                        marginLeft = {10}
                        marginTop = {10}
                    /> 

                </View>
            );
        }

        if (this.state.fetchedMusic === undefined) {
            return (<View />);
        } else {
        return (
            <ImageBackground
          source = {require("../assets/snowy_mountain_background_dark.jpg")}
          style = {styles.logoContainer}
          >
            <ScrollView style={styles.logoContainer}>
                {this.state.fetchedMusic.map(song => (
                    <TouchableOpacity style={{flex: 1, flexDirection: 'row', marginTop: 5, marginBottom: 5}}
                                      onPress={() => this.playMusic(song.id)}>
                            <ImageBackground style={{width: '75%', height: 180, }}
                           resizeMode="contain"
                           source={{uri: song.image_link}}/>
                           <View style={{flex:1, flexDirection: 'column'}}>
                                <Text style={{ padding: 0, fontSize: 15, color: 'white', }}>
                                    {song.name}
                                </Text>

                                <Text style={{ paddingTop: 3, fontSize: 15, color: 'white', }}>
                                    {song.artist}
                                </Text>
                            </View>
                    </TouchableOpacity>
                ))}

            </ScrollView>
            </ImageBackground>
        );
    }
    }
}
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: 'black'
        },
        logoContainer: {
            flex: 1,
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

