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
  View,
  Image,
  Button,
  Alert
} from 'react-native';
import Camera from 'react-native-camera';

export default class PhotoAppProject extends Component {


	onButtonPress()
	{
		Alert.alert('Button has been pressed!');
	}

	  render()
	  {
		return (
			<View style={styles.container}>
				<Camera
					ref = {(cam) => {
						this.camera = cam;
					}}
					style={styles.preview}
					aspect={Camera.constants.Aspect.fill}
				>
					<Button
						onPress={this.onButtonPress}
						title="Test"
						color="#FF9900"/>
				</Camera>
			</View>
		);
	  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
	 flexDirection: 'row',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
   preview: {
	flex: 1,
	justifyContent: 'flex-end',
	alignItems: 'center'
	},
});

AppRegistry.registerComponent('PhotoAppProject', () => PhotoAppProject);
