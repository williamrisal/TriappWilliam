import React, { useState, useEffect } from 'react';
import { View, Text, Image, Pressable, Modal, Button } from 'react-native';
import { AxiosResponse } from 'axios';

import styles from '../../../Style/History.style';
import { getProductCode } from '../../Services/getProductCode';
import { Product } from '../../Models/ProductInfo';

const HistoryListMore = (props: any) => {

	return (
		<Modal
			visible={props.visible}
			onRequestClose={() => props.set(false)}
			animationType="slide"
    	 	presentationStyle="pageSheet"
		>
    		<View>
        		<Button title="Fermer" onPress={() => props.set(false)} />
    		</View>
  		</Modal>
	);
}

const HistoryListItem = (props: any) => {
	const [dataItem, setdata] = useState<Product>();
	const [isModalVisible, setModalVisible] = useState(false);
	const [errorU, setErrorU] = useState(false);
	const [loading, setLoading] = useState(false);

	const getProductInfos = async (data: string) => {
		setLoading(true);
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

	useEffect(() => {
		getProductInfos(props.codeBarre);
	}, []);

	if ((props.x == 0 && props.codeBarre == ""))
		return <View/>;

	return (
		<View style={styles.HistoryListItems}>
			{loading ? (
				<Image
					source={{ uri: dataItem?.product?.image_url ? dataItem?.product?.image_url : 'https://cdn-icons-png.flaticon.com/512/3445/3445741.png'}}
					style={styles.ImageItemScanned}
				/>
			) : ( <Image style={[styles.ImageItemScanned, styles.skeletonScreen]} /> )}
			<View style={styles.InfoItemScanned}>
				{loading ? (
					<View style={styles.textItem}>
						<Text style={{fontWeight: "600",}}>
							{dataItem?.product?.product_name ? dataItem?.product.product_name : dataItem?.product?.brands ? dataItem?.product.brands : "Bientot"}
						</Text>
						<Text style={{fontWeight: "300", left: 2,}}>
							{getNameCompagny(dataItem?.product?.brands ? dataItem?.product.brands : 'A venir..')}
						</Text>
					</View>
				) : (
					<View style={styles.textItem}>
						<Text style={[styles.skeletonScreen, {height: 27, width: 150}]} />
						<Text style={[styles.skeletonScreen, {height: 23, width: 100, top: 10}]} />
					</View>
				)}
				<View style={styles.submit}>
					{loading && (dataItem?.product?.image_url || dataItem?.product?.brands ? (
						<Pressable
							onPress={() => setModalVisible(true)}
							style={({ pressed }) => [{
								opacity: pressed ? 0.5 : 1,
							},]}
						>
							{({ pressed }) => (
								<Image
									source={{ uri: 'https://cdn-icons-png.flaticon.com/512/4066/4066676.png' }}
									style={styles.iconSubmit}
								/>
							)}
						</Pressable> 
					) : (
						<Image
							source={{ uri: 'https://cdn-icons-png.flaticon.com/512/738/738884.png' }}
							style={styles.iconSubmit}
						/>
					))}
				</View>
			</View>
			<HistoryListMore visible={isModalVisible} set={setModalVisible} />
		</View>
	);
};

export const HistoryList = (props: any) => {
	return (
		<View style={styles.HistoryList}>
			{props.value != null && String(props.value).split(" ").reverse().map(
				(x, i) => <HistoryListItem codeBarre={x} x={i} key={i} />
			)}
		</View>
	);
}