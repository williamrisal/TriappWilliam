import React, { useState, useEffect } from 'react';
import { View, Text, Button, SafeAreaView, ScrollView } from 'react-native';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';

import styles from '../../../Style/History.style';

import { HistoryInfo } from './HistoryInfo';
import { HistoryList } from './HistoryList';


const HistoryHeader = () => {

  return (
    <View style={styles.HistoryHeader}>
      <Text>Historique</Text>
      <Text></Text>
    </View>
  );
}

export const History = () => {

  return (
    <View style={styles.HistoryPage}>
      <HistoryHeader />
      <ScrollView style={styles.History}>
        <HistoryInfo />
        <HistoryList />
      </ScrollView>
    </View>
  );
}