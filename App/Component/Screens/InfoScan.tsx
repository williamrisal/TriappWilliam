import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { getTrashColor } from '../Services/getTrashColor';

export const InfoScan = (props: any) => {
  const [infoProductData, infoSetProductData] = useState<string>("rien");

  useEffect(() => {
    const trashColorData = getTrashColor(props);
    if (trashColorData !== infoProductData) {
      if (trashColorData === "nodata" || !trashColorData) {
        infoSetProductData("Oups, Je suis comme une bibliothèque sans livres, je n'ai pas les informations que vous cherchez !");
      } else {
        infoSetProductData(trashColorData);
      }
    }
  }, [props]);

  return (
    <View>
      <Text></Text>
      <Text>{infoProductData}</Text>
    </View>
  );
};
