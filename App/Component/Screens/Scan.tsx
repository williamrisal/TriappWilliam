import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { Text, View, StyleSheet, Image, Button } from 'react-native';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { SvgUri } from 'react-native-svg';
import gradea from '../../Assets/EcoScore/ecoscore-a.png';


import { AxiosResponse } from 'axios';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { BottomSheetModalProvider, BottomSheetModal } from '@gorhom/bottom-sheet';

import { uppercaseFirstLetter } from '../Utils/uppercaseFirstLetter';
import { Product } from '../Models/ProductInfo';
import { getProductCode } from '../Services/getProductCode';
import { getTrashColor } from '../Services/getTrashColor';

import styles from '../../Style/Scan.style';


interface scannedProps {
  type: string;
  data: string;
}

const DropDown = (props: any) => {
  let errorImg = 'https://www.batirama.com/scaled/983/755/1/2017/08/31/125459/images/article/15082-_00erreur.jpg';
  // if (props.productData && props.productData.product && props.productData.product.ecoscore_data) {
  //   grade = props.productData.product.ecoscore_data.grade;
  // }
  const grade = props.productData?.product?.ecoscore_data.grade;
  let imageEcoScore = require('../../Assets/EcoScore/ecoscore-unknown.png');
  getTrashColor(props);
  switch (grade) {
    case 'a':
      imageEcoScore = require('../../Assets/EcoScore/ecoscore-a.png');
      break;
    case 'b':
      imageEcoScore = require('../../Assets/EcoScore/ecoscore-b.png');
      break;
    case 'c':
      imageEcoScore = require('../../Assets/EcoScore/ecoscore-c.png');
      break;
    case 'd':
      imageEcoScore = require('../../Assets/EcoScore/ecoscore-d.png');
      break;
    default:
      break;
  }
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
          <View style={styles.productContainer}>
            <View style={styles.productInfosContainer}>
              <Text style={styles.productBrand}>
                {uppercaseFirstLetter(props.productData?.product.brands_tags[0])}
              </Text>
              <Text style={styles.productName}>
                {props.productData?.product?.product_name_fr ? uppercaseFirstLetter(props.productData?.product?.product_name_fr) : "Nom inconnu"}
              </Text>
            </View>
            <Image
            style={styles.image_ecoscore}
            source={imageEcoScore}
            />
          </View>
      </View>
    </BottomSheetModal>
  );
}

export const Scan = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [productData, setProductData] = useState<Product>();

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => ['30%'], []);

  const { getItem, setItem } = useAsyncStorage('@storageHistory00');
  const setStorageHistory = async (data: any) => {
    const listCodeBarre = await getItem();
    const itemParsed = listCodeBarre?.slice(listCodeBarre?.length - 13, listCodeBarre?.length);
  
    if (listCodeBarre == null)
      await setItem(data);
    else if (listCodeBarre?.indexOf(data) == -1 && itemParsed != data)
      await setItem(listCodeBarre + ' ' + data);
  };

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
        console.log('Erreur Scan', error.data);
      });
  };

  const handleBarCodeScanned = async ({ type, data}: scannedProps) => {
    if(!data.match(/[a-z]/i))
    {
      setScanned(true);
      getProductInfos(data)
      setStorageHistory(data); //storage
    }
    else
    {
      return(undefined)
    }
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
          {/* {  ? <Image style={styles.image_scan} source={require('../../Assets/scan.png')} /> : null} */}
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
            
          </View>
        )}
    </View>
  );
};
