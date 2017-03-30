import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Image
} from 'react-native';


export class FooterComponent extends Component {
  constructor(props) {
    super(props);
  }
	render() {
    return (
		<View style={styles.mainContainer}>
			<View style={styles.left}>
          <TouchableOpacity>
          <Image
            style={styles.leftArrow}
            source={require('./left-arrow.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.middle}>
        <Text style={styles.detroitexperience}> 
          DETROIT EXPERIENCE
        </Text>
        <TouchableOpacity style={styles.arrowDown}>
          <Image
            style={styles.dropdown}
            source={require('./dropdown.png')}
          />
        </TouchableOpacity>


      </View>
      <View style={styles.right}>
        <Text> COUCOU </Text>
      </View>
		   
		</View>
    );
  }
}


const styles = StyleSheet.create({
  mainContainer: {
    flexDirection : "row",
    alignItems : "center",
    backgroundColor : "#000000",
    padding : 5
  },
  left : {
    flex :1,
  },
  middle : {
    flexDirection : "row",
    flex :1,
    justifyContent : "space-between",
    alignItems : "center",
  },
  right : {
    flex :1,
  },
  arrowDown : {
    borderRadius : 3,
    borderColor : "#FFFFFF",
    borderWidth : 1,
    borderStyle : "solid",
    padding: 4
  },
  detroitexperience : {
    color : "#FFFFFF",
    fontWeight: "bold",
    flex: 7,
    textAlign : "center",
    width : 80
  },
  leftArrow : {
    width : 30,
    height : 30,
    marginLeft : 10
  },
  dropdown : {
    width : 9,
    height : 9
  }
});