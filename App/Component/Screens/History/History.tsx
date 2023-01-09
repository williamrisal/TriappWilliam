import React, { useState, useEffect } from 'react';
import { View, Text, Button, SafeAreaView, ScrollView } from 'react-native';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';

import styles from '../../../Style/History.style';

import { HistoryInfo } from './HistoryInfo';
import { HistoryList } from './HistoryList';


const HistoryHeader = () => {
  return (
    <View style={styles.HistoryHeader}>
      <Text style={{ fontWeight: "100", fontSize: 30, left: 30,}}>Historique</Text>
    </View>
  );
}

export const History = () => {
  const [showComponentHeader, setShowComponentHeader] = useState(false);

  const handleScroll = (event: any) => {
    if (event.nativeEvent.contentOffset.y < 300)
      setShowComponentHeader(false);
    if (event.nativeEvent.contentOffset.y > 300)
      setShowComponentHeader(true);

    console.log(event.nativeEvent.contentOffset.y);
  }

  return (
    <View style={styles.HistoryPage}>
      {showComponentHeader && <HistoryHeader /> }
      <ScrollView
          style={styles.History}
          onScroll={handleScroll}
          scrollEventThrottle={20}
      >
        <HistoryInfo />
        <HistoryList />
      </ScrollView>
    </View>
  );
}