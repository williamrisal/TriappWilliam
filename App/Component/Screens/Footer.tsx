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
					<View style={props.value == 0 ? [styles.status, styles.statusOn] : styles.status}>
						<Image
							style={styles.imgStatus}
							source={{uri:'https://cdn-icons-png.flaticon.com/512/4716/4716509.png'}}
						/>
					</View>
				)}
			</Pressable>
			<Pressable
				onPress={() => props.setValue(1)}
				style={({ pressed }) => [{
				opacity: pressed ? 0.5 : 1, },]}
			>
				{({ pressed }) => (
					<View style={props.value == 1 ? [styles.status, styles.statusOn] : styles.status}>
						<Image
							style={styles.imgStatus}
							source={{uri:'https://cdn-icons-png.flaticon.com/512/507/507960.png'}}
						/>
					</View>
				)}
			</Pressable>
			<Pressable
				onPress={() => props.setValue(2)}
				style={({ pressed }) => [{
				opacity: pressed ? 0.5 : 1, },]}
			>
				{({ pressed }) => (
					<View style={props.value == 2 ? [styles.status, styles.statusOn] : styles.status}>
						<Image
							style={styles.imgStatus}
							source={{uri:'https://cdn-icons-png.flaticon.com/512/900/900797.png'}}
						/>
					</View>
				)}
			</Pressable>
		</View>
  	);
};

