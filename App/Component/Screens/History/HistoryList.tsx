import React, { useState, useEffect } from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { AxiosResponse } from 'axios';

import styles from '../../../Style/History.style';
import { getProductCode } from '../../Services/getProductCode';
import { Product } from '../../Models/ProductInfo';
import { TouchableOpacity } from 'react-native-gesture-handler';


const HistoryListItem = (props) => {
	const [dataItem, setdata] = useState<Product>();

	const getProductInfos = async (data: string) => {
		await getProductCode(data)
			.then((response: AxiosResponse) => {
				setdata(response.data);
			})
			.catch(error => {
				console.log("Erreur Historique", error.data);
			});
	};

	useEffect(() => {
		getProductInfos(props.codeBarre);
	}, []);

	return (
		<View style={styles.HistoryListItems}>
			<Image
				source={{ uri: dataItem?.product.image_url }}
				style={styles.ImageItemScanned}
			/>
			<View style={styles.InfoItemScanned}>
				<View style={styles.textItem}>
					<Text>
						{dataItem?.product.product_name}
					</Text>
					<Text>
						test
						{ }
					</Text>
					<Text>
						test
						{ }
					</Text>
				</View>
				<View style={styles.submit}>
					<Pressable
						style={({ pressed }) => [{
							opacity: pressed ? 0.5 : 1,
						},]}
					>
						{({ pressed }) => (
							<Image
								//logo a remplacer par le notre
								source={{ uri: 'https://play-lh.googleusercontent.com/0nW5k0nGil-gL76A-qei8Q88xMyJ6l4vOOKZLM96ZrCcTazFvPqkq1W-sOsnNSNdfxPX' }}
								style={styles.iconSubmit}
							/>
						)}
					</Pressable>
				</View>
			</View>
		</View>
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
			{value != null && String(value).split(" ").reverse().map(
				(x, i) => <HistoryListItem codeBarre={x} key={i} />)}
		</View>
	);
}