import React from 'react';
import { View, Image, Pressable } from 'react-native';
import { startClock } from 'react-native-reanimated';

import styles from '../../Style/Footer.style';

export const Footer = (props: any) => {

	let logo1 = "https://cdn-icons-png.flaticon.com/512/4716/4716509.png";
	let logo2 = "https://cdn-icons-png.flaticon.com/512/507/507960.png";
	let logo3 = "https://cdn-icons-png.flaticon.com/512/900/900797.png";
	var logo = [logo1, logo2];

	return (
		<View style={styles.sheetContainer}>
			{logo.map((url, index) => {
				return (
					<Pressable
						key={index}
						onPress={() => props.setValue(index)}
						style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1, }]}
					>
						{({ pressed }) => (
							<View style={props.value == index ? [styles.status, styles.statusOn] : styles.status}>
								<Image style={styles.imgStatus} source={{ uri: url }} />
							</View>
						)}
					</Pressable>
				);
			})}
		</View>
	);
};