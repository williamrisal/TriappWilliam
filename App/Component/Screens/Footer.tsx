import React from 'react';
import {View, Image, Pressable } from 'react-native';

import styles from '../../Style/Footer.style';

//https://cdn-icons-png.flaticon.com/512/1800/1800170.png logo historique
//Fonction bas de page
export const Footer = (props: any) => {


  //retourne le rendu
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
				source={{uri:'https://cdn-icons-png.flaticon.com/512/1800/1800170.png'}}
			/>)}
		</Pressable>
		<Pressable
			onPress={() => props.setValue(1)}
			style={({ pressed }) => [{
				opacity: pressed ? 0.5 : 1, },]}
		>
			{({ pressed }) => (
			<Image
				style={{height: 35, width: 35,}}
				source={{uri:'https://cdn-icons-png.flaticon.com/512/3126/3126504.png'}}
			/>)}
		</Pressable>
		<Pressable
			onPress={() => props.setValue(2)}
			style={({ pressed }) => [{
				opacity: pressed ? 0.5 : 1, },]}
		>
			{({ pressed }) => (
			<Image
				style={{height: 40, width: 40,}}
				source={{uri:'https://cdn-icons-png.flaticon.com/512/125/125279.png'}}
			/>)}
		</Pressable>
	</View>
  );
};