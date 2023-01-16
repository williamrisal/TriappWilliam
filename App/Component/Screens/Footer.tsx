import React from 'react';
import {View, Image, Pressable } from 'react-native';

import styles from '../../Style/Footer.style';

export const Footer = (props: any) => {

  	return (
    	<View style={styles.sheetContainer}>
			<Pressable
				onPress={() => props.setValue(0)}
				style={({ pressed }) => [{
				opacity: pressed ? 0.5 : 1, },]}
			>
				{({ pressed }) => (
					<Image
						style={{height: 40, width: 40,}}
						source={{uri:'https://cdn-icons-png.flaticon.com/512/4716/4716509.png'}}
					/>
				)}
			</Pressable>
			<Pressable
				onPress={() => props.setValue(1)}
				style={({ pressed }) => [{
				opacity: pressed ? 0.5 : 1, },]}
			>
				{({ pressed }) => (
					<Image
						style={{height: 50, width: 50,}}
						source={{uri:'https://cdn-icons-png.flaticon.com/512/507/507960.png'}}
					/>
				)}
			</Pressable>
			<Pressable
				onPress={() => props.setValue(2)}
				style={({ pressed }) => [{
				opacity: pressed ? 0.5 : 1, },]}
				>
					{({ pressed }) => (
					<Image
						style={{height: 40, width: 40,}}
						source={{uri:'https://cdn-icons-png.flaticon.com/512/900/900797.png'}}
					/>
				)}
			</Pressable>
		</View>
  	);
};