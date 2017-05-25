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
  ListView,
  TouchableHighlight,
} from 'react-native';
import Model from './Model';

export default class PictureList extends Component
{
	constructor()
	{
		super();
		this.onPictureChanged = this.onPictureChanged.bind(this);
		Model.addListener('pictures', this.onPictureChanged);
		console.log("test");
		this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.state = {
			 dataSource: this.ds.cloneWithRows(Model.pictures),
			};
	}
	componentWillUnmount()
	{
		Model.removeListener('pictures', this.onPictureChanged);
	}

	onPictureChanged()
	{
		this.setState({
			dataSource: this.ds.cloneWithRows(Model.pictures),
		});
	}

	onImagePress(picture)
	{
		Model.selectedPicture = picture;
	}

	render()
	{
		return (
			<ListView
				contentContainerStyle={styles.list}
			 	dataSource={this.state.dataSource}
				enableEmptySections={true}
				renderRow={(rowData) =>
					<TouchableHighlight
						onPress={() => this.onImagePress(rowData)}
						>
						<Image
							source={{ uri: rowData.path }}
							style={{width: 150, height: 150}}
						/>
					</TouchableHighlight>
				}
			/>
		);
	}
}

const styles = StyleSheet.create({
	list: {
		flexDirection: 'row',
		flexWrap: 'wrap'
	},
});
