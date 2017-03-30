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

export default class AwesomeProject extends Component {
  render() {
    return (
      <Image source={require('./background.jpg')} style={styles.backgroundImage}>
        <HeaderComponent style={styles.header}></HeaderComponent>	
        <FooterComponent style={styles.footer}></FooterComponent>
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
  	height : 500
  }
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
