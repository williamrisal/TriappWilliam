import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, RefreshControl, StatusBar } from 'react-native';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';

import styles from '../../../Style/History.style';

import { HistoryInfo } from './HistoryInfo';
import { HistoryList } from './HistoryList';


export const History = () => {
	const [score, setScore] = useState(null);
    const [NbRecyclableItem, setNbRecyclableItem] = useState(0);
    // recuperer se qui et stocker dans asyncStorage
    const { getItem } = useAsyncStorage('@storage'); // path pour le stockage 
	const [value, setValue] = useState(null);
	const takeItemFromStorage = async () => setValue(await getItem());
    useEffect(() => {
        takeItemFromStorage();
    }, [value]);

    // refresh manuel (swipe haut de page)
    const [refreshing, setRefreshing] = useState(false);
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        takeItemFromStorage();
        setTimeout(() => {
            setRefreshing(false);
        }, 1000);
    }, []);

    // Status bar (heur, date, wifi...), le header (Historique)
    const [showComponentHeader, setShowComponentHeader] = useState(false);
    const [statusBar, setStatusBar] = useState(true);
    const handleScroll = (event: any) => {
        if (event.nativeEvent.contentOffset.y < 335) {
            setStatusBar(true);
            setShowComponentHeader(false);
        }
        if (event.nativeEvent.contentOffset.y > 400) {
            setStatusBar(false);
            setShowComponentHeader(true);
        }
    }

    return (
        <View style={styles.HistoryPage}>
            <StatusBar animated={true} barStyle={'light-content'} showHideTransition={'fade'} hidden={statusBar} />
            {showComponentHeader &&
                <View style={styles.HistoryHeader}>
                    <Text style={styles.HistoryHeaderText}>
                        Historique
                    </Text>
                </View>
            }
            <ScrollView
                style={styles.History}
                onScroll={handleScroll}
                scrollEventThrottle={10}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                        tintColor='rgba(44, 140, 28, 1)'
                        title="Mise a jour des donnée ♻️"
                    />
                }
            >
                <HistoryInfo value={value} score={score} NbRecyclableItem={NbRecyclableItem}/>
                <HistoryList value={value} setScore={setScore} setNbRecyclableItem={setNbRecyclableItem}/>
            </ScrollView>
        </View>
    );
}