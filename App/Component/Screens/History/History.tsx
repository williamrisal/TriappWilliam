import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';

import styles from '../../../Style/History.style';

import { HistoryInfo } from './HistoryInfo';
import { HistoryList } from './HistoryList';


const HistoryHeader = () => {
  return (
    <View style={styles.HistoryHeader}>
      <Text style={{ fontWeight: "100", fontSize: 30, left: 30, top: 15,}}>Historique</Text>
    </View>
  );
}

export const History = () => {
  const [showComponentHeader, setShowComponentHeader] = useState(false);

  const { getItem } = useAsyncStorage('@storageHistory00');
	const [value, setValue] = useState(null);
	const takeItemFromStorage = async () => setValue(await getItem());

  const handleScroll = (event: any) => {
    if (event.nativeEvent.contentOffset.y < 335)
      setShowComponentHeader(false);
    if (event.nativeEvent.contentOffset.y > 400)
      setShowComponentHeader(true);
  }

  useEffect(() => {
		takeItemFromStorage();
	}, []);

  return (
    <View style={styles.HistoryPage}>
      {showComponentHeader && <HistoryHeader /> }
      <ScrollView
          style={styles.History}
          onScroll={handleScroll}
          scrollEventThrottle={20}
      >
        <HistoryInfo value={value}/>
        <HistoryList value={value}/>
      </ScrollView>
    </View>
  );
}