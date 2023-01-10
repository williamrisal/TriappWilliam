import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { Text, View, StyleSheet, Image, Button, TouchableOpacity} from 'react-native';
import styles from '../../Style/Footer.style';

//Fonction bas de page
export const Footer = (props: any) => {
  
  //retourne le rendu
  return (
    <View style={styles.sheetContainer}>
		<TouchableOpacity onPress={() => props.setValue(0)} >
			<Image style={styles.img} source={require("../../Assets/History.png")} //home
			/>
		</TouchableOpacity>

			
		<TouchableOpacity onPress={() => props.setValue(1)}  >
		<Image style={styles.img} source={require("../../Assets/barcode.png")} //scan 
		/> 
		</TouchableOpacity>
		<TouchableOpacity onPress={() => props.setValue(2)}  >
			<Image style={styles.img} source={require("../../Assets/settings.png")} //setting
		/>
		</TouchableOpacity>
	</View>
  );
};