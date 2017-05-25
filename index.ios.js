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
  Alert,
  TouchableHighlight,
  Dimensions
} from 'react-native';
import Camera from 'react-native-camera';
import Model from './Model';
import PictureList from './PictureList';

export default class PhotoAppProject extends Component
{
	constructor(props)
	{
		super(props);

		this.state = {
			selectedPicture:Model.selectedPicture
		}

		Model.addListener('selectedPicture', this.onPictureSelected.bind(this));
	}

	onPictureSelected()
	{
		this.setState({
			selectedPicture:Model.selectedPicture
		});
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

	onImagePress()
	{
		Model.selectedPicture = null;
	}

	  render()
	  {
		  if(this.state.selectedPicture == null)
		  {
				return (
				<View style={styles.container}>
					<Camera
						ref={(cam) => {
							this.camera = cam;
						}}
						style={styles.preview}
						aspect={Camera.constants.Aspect.fill}
						captureTarget={Camera.constants.CaptureTarget.disk}
					>
						<Button
							onPress={this.onButtonPress.bind(this)}
							title="Snap"
							color="#0099FF"/>
					</Camera>
					<PictureList/>
				</View>
				);
		  }
		  else
		  {
			  return (
				<View style={styles.modalContaienr}>
					<TouchableHighlight
						onPress={() => this.onImagePress()}
						>
						<Image
							source={{ uri: this.state.selectedPicture.path }}
							style={styles.preview}
						/>
					</TouchableHighlight>
				</View>
			  )
		  }

	  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
	 flexDirection: 'column',
  },
  modalContaienr:{
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#000',
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
		alignItems: 'center',
		height: Dimensions.get('window').height,
		width: Dimensions.get('window').width
	},
	pictures: {
		flex:1
	}
});

AppRegistry.registerComponent('PhotoAppProject', () => PhotoAppProject);
