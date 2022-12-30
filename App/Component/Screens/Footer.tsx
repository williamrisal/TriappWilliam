import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { Text, View, StyleSheet, Image, Button } from 'react-native';

import styles from '../../Style/Footer.style';

//Fonction bas de page
export const Footer = (props: any) => {
  
  //retourne le rendu
  return (
    <View style={styles.sheetContainer}>
		<Button
  			onPress={() => props.setValue(0)} title="0" //historique
		/>
		<Button
  			onPress={() => props.setValue(1)} title="1" //scan
		/>
		<Button
  			onPress={() => props.setValue(2)} title="2"
		/>
		<Button
  			onPress={() => props.setValue(3)} title="3"
		/>
	</View>
  );
};
