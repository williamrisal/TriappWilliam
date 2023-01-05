import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { Text, View, StyleSheet, Image, Button } from 'react-native';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';

import { AxiosResponse } from 'axios';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { BottomSheetModalProvider, BottomSheetModal } from '@gorhom/bottom-sheet';

import { uppercaseFirstLetter } from '../Utils/uppercaseFirstLetter';
import { Product } from '../Models/ProductInfo';
import { getProductCode } from '../Services/getProductCode';

import styles from '../../Style/Scan.style';

interface scannedProps {
  type: string;
  data: string;
}

//Fonction Component menu deroulant avec les info
const DropDown = (props: any) => {
  let errorImg = 'https://www.batirama.com/scaled/983/755/1/2017/08/31/125459/images/article/15082-_00erreur.jpg';

  return (
    <BottomSheetModal
      ref={props.bottomSheetModalRef}
      snapPoints={props.snapPoints}
      onChange={props.handleSheetChange}
      enablePanDownToClose={true}
    >
      <View style={styles.sheetHeader}>
        <Image
          style={styles.image}
          source={{ uri: props.productData?.product?.image_url  == null ? errorImg : props.productData?.product?.image_url, cache: 'only-if-cached'}}
        />
        <View style={styles.productInfosContainer}>
          <Text style={styles.productBrand}>
            {uppercaseFirstLetter(props.productData?.product.brands_tags[0])}
          </Text>
          <Text style={styles.productName}>
            {props.productData?.product?.product_name_fr ? uppercaseFirstLetter(props.productData?.product?.product_name_fr) : "Nom inconnu"}
          </Text>
        </View>
      </View>
    </BottomSheetModal>
  );
}

//Fonction Principal Scan
export const Scan = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [productData, setProductData] = useState<Product>();

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => ['30%'], []);

  //async-storage (stockage des code barre sparer de ' '. historique)
  const { getItem, setItem } = useAsyncStorage('@storageHistory00');
  const setStorageHistory = async (data: any) => {
    const listCodeBarre = await getItem();
    const itemParsed = listCodeBarre?.slice(listCodeBarre?.length - 13, listCodeBarre?.length);
  
    if (listCodeBarre == null)
      await setItem(data);
    else if (listCodeBarre?.indexOf(data) == -1 && itemParsed != data) {
      
      await setItem(listCodeBarre + ' ' + data);
      console.log(getItem);
    }
  };
  /////////////////////////////////////////////////////////////////////

  useEffect(() => {
    getBarCodeScannerPermissions();
  }, []);


  const getBarCodeScannerPermissions = async () => {
    const { status } = await BarCodeScanner.requestPermissionsAsync();
    setHasPermission(status == 'granted');
  };
  
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  
  const getProductInfos = async (data: string) => {
    var error = false;
    setScanned(true);
    await getProductCode(data)
      .then((response: AxiosResponse) => {
        setProductData(response.data);
        handlePresentModalPress();
      })
      .catch(error => {
        console.log('error', error);
      });
  };

  const handleBarCodeScanned = async ({ type, data}: scannedProps) => {
    setScanned(true);
    getProductInfos(data)
    setStorageHistory(data); //storage
  };

  const handleSheetChange = useCallback((index: number) => {
    setScanned(false);
  }, []);

  if (hasPermission === null)
    return <Text>Requesting for camera permission</Text>;
  if (hasPermission === false)
    return <Text>No access to camera</Text>;

  return (
    <View style={styles.container}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
        {productData && (
          <View style={styles.sheetContainer}>
            <BottomSheetModalProvider>
                <DropDown
                  bottomSheetModalRef={bottomSheetModalRef}
                  snapPoints={snapPoints}
                  handleSheetChange={handleSheetChange}
                  productData={productData}
                />
            </BottomSheetModalProvider>
            <View style={styles.recScan} />
          </View>
        )}
    </View>
  );
};
