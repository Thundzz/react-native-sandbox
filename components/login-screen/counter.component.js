import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Image
} from 'react-native';


export class CounterComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    <View style={styles.container}>
      <Text style={styles.count}>
        {this.props.count}
      </Text>
      <Text style={styles.label}>
        {this.props.label.toUpperCase()}
      </Text>
    </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    padding : 10,
    flexDirection : "column",
    justifyContent: "center",
    alignItems : "flex-start"
  },
  count:{
    fontWeight: "bold",
    color: "#FFFFFF",
    fontSize: 18
  },
  label:{
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 12
  }
});