import React, { useState, useEffect } from 'react';
import { View, Text, Image, Pressable, Modal, Button } from 'react-native';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { AxiosResponse } from 'axios';

import styles from '../../../Style/History.style';
import { getProductCode } from '../../Services/getProductCode';
import { Product } from '../../Models/ProductInfo';


const HistoryListItem = (props: any) => {
	const [dataItem, setdata] = useState<Product>();
	const [errorU, setErrorU] = useState(false);

	const getProductInfos = async (data: string) => {
		await getProductCode(data)
			.then((response: AxiosResponse) => {
				setdata(response.data);
			})
			.catch(error => {
				console.log("error => ", error);
				setErrorU(true);
			});
	};

	const getNameCompagny = (data: any) => {
		const arrayCompagny = data != undefined ? data.split(',') : "null,".split(',');
		return (arrayCompagny[0] == "null" ? "" : arrayCompagny[0]);
	}

	const [isModalVisible, setModalVisible] = useState(false);

	useEffect(() => {
		getProductInfos(props.codeBarre);
	}, []);

	if (errorU)
		return <View/>;
	return (
		<View style={styles.HistoryListItems}>
		<Image
		source={{ uri: dataItem?.product.image_url }}
		style={styles.ImageItemScanned}
		/>
		<View style={styles.InfoItemScanned}>
				<View style={styles.textItem}>
					<Text style={{fontWeight: "600",}}>
						{dataItem?.product.product_name}
					</Text>
					<Text style={{fontWeight: "300", left: 2,}}>
						{getNameCompagny(dataItem?.product.brands)}
					</Text>
					
				</View>
				<View style={styles.submit}>
					<Pressable
						onPress={() => setModalVisible(true)}
						style={({ pressed }) => [{
							opacity: pressed ? 0.5 : 1,
						},]}
						>
						{({ pressed }) => (
							<Image
							defaultSource={{}}
							source={{ uri: 'https://cdn-icons-png.flaticon.com/512/4066/4066676.png' }}
							style={styles.iconSubmit}
							/>
							)}
					</Pressable>
				</View>
			</View>
			<Modal
				visible={isModalVisible}
				onRequestClose={() => setModalVisible(false)}

				animationType="slide"
       			 presentationStyle="pageSheet"
			>
        		<View>
          			<Button title="Fermer" onPress={() => setModalVisible(false)} />
        		</View>
      		</Modal>
		</View>
	);
};

export const HistoryList = (props: any) => {

	return (
		//POUR TEST
		/*
		<>
		<HistoryListItem codeBarre={"3268840001008"}/>
		<HistoryListItem codeBarre={"3268840001008"}/>
		<HistoryListItem codeBarre={"3268840001008"}/>
		<HistoryListItem codeBarre={"3268840001008"}/>
		<HistoryListItem codeBarre={"3268840001008"}/>
		<HistoryListItem codeBarre={"3268840001008"}/>
		<HistoryListItem codeBarre={"3268840001008"}/>
		<HistoryListItem codeBarre={"3268840001008"}/>
		<HistoryListItem codeBarre={"3268840001008"}/>
		<HistoryListItem codeBarre={"3268840001008"}/>
		<HistoryListItem codeBarre={"3268840001008"}/>
		<HistoryListItem codeBarre={"3268840001008"}/>
		<HistoryListItem codeBarre={"3268840001008"}/>
		<HistoryListItem codeBarre={"3268840001008"}/>
		</>
		*/
		//*
		<View style={styles.HistoryList}>
			{props.value != null && String(props.value).split(" ").reverse().map(
				(x, i) => <HistoryListItem codeBarre={x} key={i} />)}
		</View>
		// */
	);
}