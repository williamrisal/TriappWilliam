import React, { useState, useEffect } from 'react';
import { View, Text, Pressable } from 'react-native';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { AxiosResponse } from 'axios';

import styles from '../../../Style/History.style';
import { getProductCode } from '../../Services/getProductCode';
import { Product } from '../../Models/ProductInfo';


const HistoryListItem = (props) => {
	const [data, setdata] = useState(undefined);
	const getProductInfos = async (data: string) => {
		await getProductCode(data)
		  .then((response: AxiosResponse) => {
			setdata(response.data);
		  })
		  .catch(error => {
			console.log("erreur", error);
		});
	  };
	  
	useEffect(() => {
		getProductInfos(props.codeBarre);
	}, []);

	// les info sont recupere dans data il faut juste parse et afficher se que tu veut dans la view 

	return (
		<Pressable>
			<View style={styles.HistoryListItems}>
				<Text>{props.codeBarre}</Text>
			</View>
		</Pressable>
	);
};

export const HistoryList = () => {
	const { getItem } = useAsyncStorage('@storageHistory00');
	const [value, setValue] = useState(null);
	const takeItemFromStorage = async () => setValue(await getItem());

	useEffect(() => {
		takeItemFromStorage();
	  }, []);

	return (
		<View style={styles.HistoryList}>
			{String(value).split(" ").reverse().map(
          	(x, i) => <HistoryListItem codeBarre={x} key={i} />)}
		</View>
	);
}