import React from 'react';
import {View, Text, Image } from 'react-native';

import { getTrashColor } from '../Services/getTrashColor';
import styles from '../../Style/InfoScan.style';

export const InfoScan = (props: any) => {
	const grade = props.productData?.product?.ecoscore_data.grade;
	let imageEcoScore = require('../../Assets/EcoScore/ecoscore-unknown.png');

	switch (grade) {
		case 'a':
			imageEcoScore = require('../../Assets/EcoScore/ecoscore-a.png');
			break;
		case 'b':
			imageEcoScore = require('../../Assets/EcoScore/ecoscore-b.png');
			break;
		case 'c':
			imageEcoScore = require('../../Assets/EcoScore/ecoscore-c.png');
			break;
		case 'd':
			imageEcoScore = require('../../Assets/EcoScore/ecoscore-d.png');
			break;
		default:
			break;
	}
	
	console.log(getTrashColor(props));

  	return (
    	<View>
			<Image style={styles.image_ecoscore} source={imageEcoScore} />

			<Text></Text>
			<Text>test</Text>
			<Text>test</Text>
			<Text>test</Text>
			<Text>test</Text>
			<Text>test</Text>
			<Text>test</Text>
			<Text>test</Text>
			<Text>test</Text>
		</View>
  	);
};