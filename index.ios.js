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
import Model from './Model';

export default class PhotoAppProject extends Component
{

	consructor()
	{
		Model.on('pictures', this.onPictureChanged);
	}

	onPictureChanged()
	{
		this.forseReload();
	}


	onButtonPress()
	{
		if(this.camera == null)
		{
			Alert.alert('camera is null');
		}
		else
		{
			this.camera.capture()
			  .then((data) => {
				  Model.addPicture(data);
			})
			.catch(err => console.error(err));
		}
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
						title="Snap"
						color="#0099FF"/>
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
