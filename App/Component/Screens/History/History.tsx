import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, RefreshControl, StatusBar } from 'react-native';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';

import styles from '../../../Style/History.style';

import { HistoryInfo } from './HistoryInfo';
import { HistoryList } from './HistoryList';


const HistoryHeader = () => {
    return (
        <View style={styles.HistoryHeader}>
            <Text style={{ fontWeight: "100", fontSize: 35, left: 30, top: 15,}}>Historique</Text>
        </View>
  );
}

export const History = () => {
    const [showComponentHeader, setShowComponentHeader] = useState(false);
    const { getItem } = useAsyncStorage('@storageHistory03');
	const [value, setValue] = useState(null);
	const takeItemFromStorage = async () => setValue(await getItem());
    const [refreshing, setRefreshing] = useState(false);
    const [statusBar, setStatusBar] = useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        takeItemFromStorage();
        setTimeout(() => {
          setRefreshing(false);
        }, 1000);
      }, []);

    const handleScroll = (event: any) => {
        if (event.nativeEvent.contentOffset.y < 335) {
            setStatusBar(false);
            setShowComponentHeader(false);
        }
        if (event.nativeEvent.contentOffset.y > 400) {
            setStatusBar(true);
            setShowComponentHeader(true);
        }
    }

    useEffect(() => {
		    takeItemFromStorage();
	  }, []);

    return (
        <View style={styles.HistoryPage}>
            <StatusBar
                animated={true}
                barStyle={'light-content'}
                showHideTransition={'fade'}
                hidden={statusBar}
            />
            {showComponentHeader && <HistoryHeader /> }
            <ScrollView
            style={styles.History}
            onScroll={handleScroll}
            scrollEventThrottle={20}
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                    tintColor='rgba(44, 140, 28, 1)'
                    title="Mise a jour des donnée ♻️"
                />
              }
            >
                <HistoryInfo value={value}/>
                <HistoryList value={value}/>
            </ScrollView>
        </View>
    );
}