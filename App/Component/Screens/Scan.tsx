import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { Text, View, StyleSheet, Image, Button } from 'react-native';

import { AxiosResponse } from 'axios';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { BottomSheetModalProvider, BottomSheetModal } from '@gorhom/bottom-sheet';

import { uppercaseFirstLetter } from '../Utils/uppercaseFirstLetter';
import { Product } from '../Models/ProductInfo';
import { getProductCode } from '../Services/getProductCode';

import styles from '../../Style/Scan.style';
import bottomSheet from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheet';

interface scannedProps {
  type: string;
  data: string;
}

//Fonction Component menu deroulant avec les info
const DropDown = (props: any) => {
  let errorImg = 'https://www.batirama.com/scaled/983/755/1/2017/08/31/125459/images/article/15082-_00erreur.jpg';

  return(
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
  //creation des state hasPermission, scanned, productData.
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [productData, setProductData] = useState<Product>();

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => ['30%'], []);

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
  
  //recup les donner de l'api en fonction du code bar scannee
  const getProductInfos = async (data: string) => {
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

  const handleBarCodeScanned = async ({ type, data }: scannedProps) => {
    setScanned(true);
    getProductInfos(data);
  };

  const handleSheetChange = useCallback((index: number) => {
    setScanned(false);
  }, []);

  //verifie si il y as pas un probleme de permission
  if (hasPermission === null)
    return <Text>Requesting for camera permission</Text>;
  if (hasPermission === false)
    return <Text>No access to camera</Text>;

  //retourne le rendu
  return (
    <View style={styles.container}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
        {productData && (
          <View style={styles.sheetContainer}>
            <BottomSheetModalProvider>
                <DropDown //quand il y as une detection de code bar ca lance le menu
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
