/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

export default class PictureList extends Component
{
	  render()
	  {
		return (
			<View style={styles.container}>
				<Text>
					pictures
				</Text>
			</View>
		);
	  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
	 flexDirection: 'row',
  },
});
