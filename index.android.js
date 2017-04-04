/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

import { HeaderComponent } from './components/login-screen/header.component.js';
import { FooterComponent } from './components/login-screen/footer.component.js';
import { CounterComponent } from './components/login-screen/counter.component.js';


export default class AwesomeProject extends Component {
  render() {
    return (
      <Image source={require('./background.jpg')} style={styles.backgroundImage}>
        <HeaderComponent style={styles.header}></HeaderComponent>	

        <View style={styles.body}>
          <Text style={styles.title}>BORDEAUX EXPERIENCES</Text>
          <Text style={styles.content}>
            Get a feel for Motown Blues, dine on soul food with fashion designedrs and take in majestic architecture
          </Text>
          <View style={styles.credits}>
            <Image
              style={styles.logo}
              source={require('./components/login-screen/logo.png')}
            />
            <Text style={styles.by}> By </Text> 
            <Text style={styles.authors}> Théo & Yacine </Text>
          </View>

        </View>
        <View style={styles.footer}>
          <View style={styles.socialMedia}>
            <CounterComponent label="Viewers" count="3.3K"></CounterComponent>
            <CounterComponent label="Haters" count="0"></CounterComponent>
            <CounterComponent label="Followers" count="10K"></CounterComponent>
            <CounterComponent label="Others" count="42"></CounterComponent>
          </View>
          <FooterComponent></FooterComponent>
        </View>
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width : null,
    height : null,
  },
  footer: {
    width:"100%",
  	position: "absolute",
    bottom: 0,
    left: 0
  },
  socialMedia:{
    flexDirection: "row",
    justifyContent: "flex-start",
    marginLeft: 10
  },
  body:{
    padding: 20,
  },
  title: {
    fontSize: 34,
    color : "#FFFFFF",
    fontWeight: "bold",
    marginBottom: 7
  },
  content: {
    fontSize : 18,
    color : "#FFFFFF",
    maxWidth: "95%"
  },
  credits: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center"
  },
  logo : {
    width:30,
    height:30
  },
  by : {
    marginLeft: 5,
    color : "#FFFFFF"
  },
  authors :{
    color : "#FFFFFF",
    fontWeight : "bold",
    fontSize: 17
  }

});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
