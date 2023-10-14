import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from "react";
import { Text, View, StyleSheet, Image, Button } from "react-native";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { AxiosResponse } from "axios";
import { BarCodeScanner } from "expo-barcode-scanner";
import {
  BottomSheetModalProvider,
  BottomSheetModal,
} from "@gorhom/bottom-sheet";
import { uppercaseFirstLetter } from "../Utils/uppercaseFirstLetter";
import { Product } from "../Models/ProductInfo";
import { getProductCode } from "../Services/getProductCode";
import { InfoScan } from "./InfoScan";
import { ScrollView } from "react-native-gesture-handler";
import { getlabel } from "../Services/getLabel";

import styles from "../../Style/Scan.style";

interface scannedProps {
  type: string;
  data: string;
}

const DropDown = (props: any) => {
  let errorImg =
    "https://www.batirama.com/scaled/983/755/1/2017/08/31/125459/images/article/15082-_00erreur.jpg";

  const label = getlabel(props);
  const grade = props.productData?.product?.ecoscore_data.grade;
  let imageEcoScore = require("../../Assets/EcoScore/ecoscore-unknown.png");

  switch (grade) {
    case "a":
      imageEcoScore = require("../../Assets/EcoScore/ecoscore-a.png");
      break;
    case "b":
      imageEcoScore = require("../../Assets/EcoScore/ecoscore-b.png");
      break;
    case "c":
      imageEcoScore = require("../../Assets/EcoScore/ecoscore-c.png");
      break;
    case "d":
      imageEcoScore = require("../../Assets/EcoScore/ecoscore-d.png");
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
        <View style={styles.sheetHeaderInfo}>
          <Image
            style={styles.image}
            source={{
              uri:
                props.productData?.product?.image_url == null
                  ? errorImg
                  : props.productData?.product?.image_url,
            }}
          />
          <View style={styles.productContainer}>
            <View style={styles.productInfosContainer}>
              <Text style={styles.productBrand}>
                {props.productData?.product.brands_tags[0]
                  ? uppercaseFirstLetter(
                      props.productData?.product.brands_tags[0]
                    )
                  : null}
              </Text>
              <Text style={styles.productName}>
                {props.productData?.product?.product_name_fr
                  ? uppercaseFirstLetter(
                      props.productData?.product?.product_name_fr
                    )
                  : "Nom inconnu"}
              </Text>
            </View>
            <View style={styles.horizontalContainer}>
              <Image style={styles.image_labels} source={imageEcoScore} />

              {label.map((item, index) => {
                if (item === "fr:triman") {
                  return (
                    <Image
                      key={index}
                      style={styles.image_labels}
                      source={require("../../Assets/labels/logo_triman.png")}
                    />
                  );
                } else if (item === "en:green-dot") {
                  return (
                    <Image
                      key={index}
                      style={styles.image_labels}
                      source={require("../../Assets/labels/Green_dot.png")}
                    />
                  );
                } else {
                  return null;
                }
              })}
            </View>
          </View>
        </View>
        <View style={styles.sheetHeaderInfoDetail}>
          <ScrollView>
            <InfoScan data={props} />
          </ScrollView>
        </View>
      </View>
    </BottomSheetModal>
  );
};

export const Scan = () => {
  // verifie la permission pour pouvoir scanner
  const [hasPermission, setHasPermission] = useState(null);
  const getBarCodeScannerPermissions = async () => {
    const { status } = await BarCodeScanner.requestPermissionsAsync();
    setHasPermission(status == "granted");
    if (status !== "granted") {
      console.log("Permission denied");
      return;
    }
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
        setProductData(response);
        handlePresentModalPress();
      })
      .catch((error) => {
        setProductData("undefined");
      });
  };

  // ajouter le nouveau code barre a la liste de tout les code barre scanne
  const { getItem, setItem } = useAsyncStorage("@storage");
  const setStorageHistory = async (data: any) => {
    const listCodeBarre = await getItem();
    const itemParsed = listCodeBarre?.slice(
      listCodeBarre.lastIndexOf(" ") + 1,
      listCodeBarre?.length
    );
    if (listCodeBarre == null) await setItem(data);
    else if (listCodeBarre?.indexOf(data) == -1 && itemParsed != data)
      await setItem(listCodeBarre + " " + data);
  };

  const handleSheetChange = useCallback((index: number) => {
    setScanned(false);
  }, []);

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const snapPoints = useMemo(() => ["60%", "90%"], []);

  const handleBarCodeScanned = async ({ type, data }: scannedProps) => {
    if (!data.match(/[a-z]/i)) {
      getProductInfos(data);
      setScanned(true);
      setStorageHistory(data);
    } else {
      return undefined;
    }
  };

  if (hasPermission === null) {
    // En attente de l'obtention des autorisations
    console.log("Requesting for camera permission");
    return (
      <>
        <Text>Requesting for camera permission</Text>
      </>
    );
  }

  if (!hasPermission) {
    // Autorisations refusées
    console.log("No access to camera");
    return (
      <>
        <Text>No access to camera</Text>
      </>
    );
  }
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
      <Button
        onPress={() => {
          handleBarCodeScanned({ type: "EAN", data: "3017620422003" });
        }}
        title="Press Me"
      />
    </View>
  );
};
