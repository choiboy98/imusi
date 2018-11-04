import React from "react";
import {Button, StyleSheet, View, Dimensions, Text, Image, TextInput, ImageBackground , TouchableOpacity} from "react-native";
import { Icon } from 'react-native-elements'
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
                <View style = {styles.logoContainer}>
                    <TouchableOpacity style = {styles.arrowButton}>
                        <Icon
                            name = "arrow-back"
                            size = {30}
                            color = 'white'
                        />
                    </TouchableOpacity>
                </View>
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
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
            width:'100%',
            height: '100%'
          },
          arrowButton: {
              ...StyleSheet.absoluteFillObject,
              alignSelf: 'flex-end',
              marginTop: -5,
              //position: 'absolute'
          }
    });

