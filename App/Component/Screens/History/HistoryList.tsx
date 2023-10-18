import React, { useState, useEffect } from 'react';
import { View, Text, Image, Pressable, Modal, Button, ActivityIndicator } from 'react-native';
import { AxiosResponse } from 'axios';

import styles from '../../../Style/History.style';
import { getProductCode } from '../../Services/getProductCode';
import { Product } from '../../Models/ProductInfo';
import { InfoScan } from '../InfoScan';

let additionScore = 0;
let NumberItemForScore = 0;
const HistoryListMore = (props: any) => {
	return (
		<>
			<Modal
				visible={props.visible}
				onRequestClose={() => props.set(false)}
				animationType="slide"
				presentationStyle="pageSheet"
			>
				<Button title="Fermer" onPress={() => props.set(false)} />
				<InfoScan data={props} />
			</Modal>
		</>
	);
}

let scoreRecyclable = 0;
const HistoryListItem = (props: any) => {
	const [productData, setProductData] = useState<Product>();
	const [loading, setLoading] = useState(false);
	const getProductInfos = async (data: string) => {
		await getProductCode(data)
			.then((response: AxiosResponse) => {
				setProductData(response);
				scoreRecyclable += response.product.ecoscore_data?.adjustments?.packaging?.non_recyclable_and_non_biodegradable_materials == 1 ? 0 : 1;
				
				if (response.product.ecoscore_score != undefined && response.product.ecoscore_score) {
					additionScore = additionScore + Number(response.product.ecoscore_score);
					NumberItemForScore++;
				}
				setLoading(true);
			})
			.catch(error => {
				console.log("error => ", error);
				setLoading(true);
			});

	};
	props.setScore(additionScore);
	props.setNbRecyclableItem(scoreRecyclable);

	useEffect(() => {
		getProductInfos(props.codeBarre);

	}, []);

	const getNameCompagny = (data: any) => {
		const arrayCompagny = data != undefined ? data.split(',') : "null,".split(',');
		return (arrayCompagny[0] == "null" ? "" : arrayCompagny[0]);
	}

	const [isModalVisible, setModalVisible] = useState(false);

	if ((!props.x && props.codeBarre == ""))
		return <View />;
	return (
		<View style={styles.HistoryListItems}>
			{loading ? (
				productData?.product?.image_url ? (
					<Image
						source={{ uri: productData?.product?.image_url ? productData?.product?.image_url : 'https://cdn-icons-png.flaticon.com/512/3445/3445741.png' }}
						style={styles.ImageItemScanned}
					/>
				) : (
					<ActivityIndicator style={styles.activityI} size="large" color="green" />
				)
			) : (
				<Image style={[styles.ImageItemScanned, styles.skeletonScreen]} />
			)}
			<View style={styles.InfoItemScanned}>
				{loading ? (
					<View style={styles.textItem}>
						<Text style={{ fontWeight: "600", }}> {productData?.product?.product_name ? productData?.product.product_name : productData?.product?.brands ? productData?.product.brands : "Chargement"} </Text>
						<Text style={{ fontWeight: "300", top: 2, left: 2, }}> {getNameCompagny(productData?.product?.brands ? productData?.product.brands : 'En cour...')} </Text>
					</View>
				) : (
					<View style={styles.textItem}>
						<Text style={[styles.skeletonScreen, { height: 27, width: 150 }]} />
						<Text style={[styles.skeletonScreen, { height: 23, width: 100, top: 10 }]} />
					</View>
				)}
				<View style={styles.submit}>
					{loading && (productData?.product?.image_url || productData?.product?.brands ? (
						<Pressable
							onPress={() => setModalVisible(true)}
							style={({ pressed }) => [{
								opacity: pressed ? 0.3 : 1,
							}]}
						>
							{({ pressed }) => (
								<Image
									source={{ uri: 'https://cdn-icons-png.flaticon.com/512/9364/9364651.png' }}
									style={styles.iconSubmit}
								/>
							)}
						</Pressable>
					) : (
						<Image
							source={{ uri: 'https://cdn-icons-png.flaticon.com/512/7269/7269174.png' }}
							style={{ zIndex: 2, width: 20, height: 20, left: 3 }}
						/>
					))}
				</View>
			</View>
			<HistoryListMore visible={isModalVisible} set={setModalVisible} productData={productData} />
		</View>
	);
};

export const HistoryList = (props: any) => {
	useEffect(() => {
		return () => {
			additionScore = 0;
		};
	}, []);
	return (
		<>
			{props.value == null ?
				<View style={styles.HistoryList} >
					<Image
						source={{ uri: 'https://magiedirecte.com/img/cms/plant-3751683_640.png' }}
						style={{ zIndex: 2, bottom: "0%", width: "100%", height: "100%" }}
					/>
				</View>
				:
				<View style={styles.HistoryList}>
					{props.value != null && String(props.value).split(" ").reverse().map(
						(x, i) => <HistoryListItem codeBarre={x} x={i} key={i} setScore={props.setScore} setNbRecyclableItem={props.setNbRecyclableItem} />
					)}
				</View>}
		</>
	);
}