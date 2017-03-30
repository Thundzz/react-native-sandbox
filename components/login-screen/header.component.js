import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Image
} from 'react-native';


export class HeaderComponent extends Component {
	render() {
    return (
		<View style={styles.container}>
			<TouchableOpacity onPress={this.share}>
		      <Image
		        style={styles.shareButton}
		        source={require('./share.png')}
		      />
		    </TouchableOpacity>
			<TouchableOpacity style={styles.loginButton} onPress={this.login}>
				<Text style={styles.loginText}> Login </Text>
		    </TouchableOpacity>
		   
		</View>
    );
  }

  login(){
  	alert("Vous êtes enregistré !")
  }

  share(){
  	alert("Partagé !")
  }
}


const styles = StyleSheet.create({
  container: {
    padding : 10,
    flexDirection : "row",
    justifyContent : "flex-end",
    alignItems : "center"
  },
  shareButton : {
  	height: 23,
  	width : 23,
  	marginRight : 40
  },
  loginButton : {
  	backgroundColor: "#FF1111",
  	padding : 7,
	marginRight : 20,
	borderRadius : 3,
  },
  loginText : {
  	color: "#FFFFFF",
  	fontWeight : "bold"
  }


});