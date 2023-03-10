import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { Text, View, StyleSheet, Image, Button } from 'react-native';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';

import { AxiosResponse } from 'axios';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { BottomSheetModalProvider, BottomSheetModal } from '@gorhom/bottom-sheet';

import { uppercaseFirstLetter } from '../Utils/uppercaseFirstLetter';
import { Product } from '../Models/ProductInfo';
import { getProductCode } from '../Services/getProductCode';
import { InfoScan } from './InfoScan';

import styles from '../../Style/Scan.style';
import { ScrollView } from 'react-native-gesture-handler';

interface scannedProps {
	type: string;
	data: string;
}


const DropDown = (props: any) => {
	let errorImg = 'https://www.batirama.com/scaled/983/755/1/2017/08/31/125459/images/article/15082-_00erreur.jpg';

	// if (props.productData && props.productData.product && props.productData.product.ecoscore_data) {
	//     grade = props.productData.product.ecoscore_data.grade;
	// }

	return (
		<BottomSheetModal
			ref={props.bottomSheetModalRef}
			snapPoints={props.snapPoints}
			onChange={props.handleSheetChange}
			enablePanDownToClose={true}
		>
			<View style={styles.sheetHeader}>
				<View style={styles.sheetHeaderInfo}>
					<Image
						style={styles.image}
						source={{ uri: props.productData?.product?.image_url== null ? errorImg : props.productData?.product?.image_url, cache: 'only-if-cached'}}
					/>
					<View style={styles.productContainer}>
						<View style={styles.productInfosContainer}>
							<Text style={styles.productBrand}>
								{uppercaseFirstLetter(props.productData?.product.brands_tags[0])}
							</Text>
							<Text style={styles.productName}>
								{props.productData?.product?.product_name_fr ? uppercaseFirstLetter(props.productData?.product?.product_name_fr) : "Nom inconnu"}
							</Text>
						</View>
						<Text> info... </Text>
					</View>
				</View>
				<View style={styles.sheetHeaderInfoDetail}>
					<ScrollView> 
						<InfoScan data={props}/>

					</ScrollView>
				</View>
			</View>
		</BottomSheetModal>
	);
}


export const Scan = () => {

	// verifie la permission pour pouvoir scanner
	const [hasPermission, setHasPermission] = useState(null);
	const getBarCodeScannerPermissions = async () => {	
		const { status } = await BarCodeScanner.requestPermissionsAsync();
		setHasPermission(status == 'granted');
	};
	useEffect(() => {
		getBarCodeScannerPermissions();
		
	}, []);

	// recupere via l'api les info du code barre
	const [scanned, setScanned] = useState(false);
	const [productData, setProductData] = useState<Product>();
	const getProductInfos = async (data: string) => {	
		setScanned(true);
		await getProductCode(data)
		.then((response: AxiosResponse) => {
			setProductData(response.data);
			handlePresentModalPress();
		})
		.catch(error => {
			console.log('Erreur Scan: ', error.data);
		});
	};

	// ajouter le nouveau code barre a la liste de tout les code barre scanne
	const { getItem, setItem } = useAsyncStorage('@storageHistory03');
	const setStorageHistory = async (data: any) => {	
		const listCodeBarre = await getItem();
		const itemParsed = listCodeBarre?.slice(listCodeBarre.lastIndexOf(' ') + 1, listCodeBarre?.length);
		if (listCodeBarre == null)
			await setItem(data);
		else if (listCodeBarre?.indexOf(data) == -1 && itemParsed != data)
			await setItem(listCodeBarre + ' ' + data);
	};

	const handleSheetChange = useCallback((index: number) => {	
		setScanned(false);
	}, []);

	const bottomSheetModalRef = useRef<BottomSheetModal>(null);
	const handlePresentModalPress = useCallback(() => {	
		bottomSheetModalRef.current?.present();
	}, []);

	const snapPoints = useMemo(() => ['60%'], []);

	const handleBarCodeScanned = async ({ type , data }: scannedProps) => {	
		if (!data.match(/[a-z]/i)) {
			setScanned(true);
			getProductInfos(data);
			setStorageHistory(data);
		} else
			return(undefined);
	};

	if (hasPermission === null || !hasPermission)
		return ( <>
			<Text>Requesting for camera permission</Text>
			<Text>No access to camera</Text>
		</> );
	return (
		<View style={styles.container}>
			<View style={styles.sheetContainer}>
				{productData && (
					<BottomSheetModalProvider>
						<DropDown
							bottomSheetModalRef={bottomSheetModalRef}
							snapPoints={snapPoints}
							handleSheetChange={handleSheetChange}
							productData={productData}
						/>
					</BottomSheetModalProvider>
				)}
			</View>
			<BarCodeScanner
				onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
				style={StyleSheet.absoluteFillObject}
			/>
		</View>
	);
}