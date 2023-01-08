import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';

import styles from '../../../Style/History.style';

export const HistoryInfo = () => {

	return (
		<View style={styles.HistoryInfo}>
			<Text>Historique</Text>
		</View>
	);
}