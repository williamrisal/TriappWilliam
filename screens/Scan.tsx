import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { getProductCode } from '../services/getProductCode';
import { AxiosResponse } from 'axios';
import { Product } from '../models/ProductInfo';
import { BottomSheetModalProvider, BottomSheetModal } from '@gorhom/bottom-sheet';
import { uppercaseFirstLetter } from '../utils/uppercaseFirstLetter';
interface scannedProps {
  type: string;
  data: string;
}

export const Scan = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [productData, setProductData] = useState<Product>();

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => ['30%'], []);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  useEffect(() => {
    getBarCodeScannerPermissions();
  }, []);

  const getBarCodeScannerPermissions = async () => {
    const { status } = await BarCodeScanner.requestPermissionsAsync();
    setHasPermission(status === 'granted');
  };

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

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {productData && (
        <View style={styles.sheetContainer}>
          <BottomSheetModalProvider>
            <View style={styles.container}>
              <BottomSheetModal
                ref={bottomSheetModalRef}
                snapPoints={snapPoints}
                onChange={handleSheetChange}
                enablePanDownToClose={true}>
                <View>
                  <View style={styles.sheetHeader}>
                    <Image
                      style={styles.image}
                      source={{
                        uri: productData?.product?.image_url  == null ? 'https://www.batirama.com/scaled/983/755/1/2017/08/31/125459/images/article/15082-_00erreur.jpg' : productData?.product?.image_url,
                        cache: 'only-if-cached',
                      }}
                    />
                    <View style={styles.productInfosContainer}>
                      <Text style={styles.productBrand}>
                        {uppercaseFirstLetter(productData?.product.brands_tags[0])}
                      </Text>
                      <Text style={styles.productName}>
                        {productData?.product?.product_name_fr ? uppercaseFirstLetter(productData?.product?.product_name_fr) : "Nom inconnu"}
                      </Text>
                    </View>
                  </View>
                </View>
              </BottomSheetModal>
            </View>
          </BottomSheetModalProvider>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },

  sheetContainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    zIndex: 1,
  },
  image: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    borderRadius: 10,
  },
  sheetHeader: {
    flexDirection: 'row',
    padding: 16,
  },
  productInfosContainer: {
    flexDirection: 'column',
    marginTop: 10,
    marginLeft: 20,
  },
  productName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  productBrand: {
    fontSize: 14,
    fontWeight: '400',
    color: '#A9A9A9',
  },
});
