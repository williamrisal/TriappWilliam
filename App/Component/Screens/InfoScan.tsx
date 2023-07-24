import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { getTrashColor } from '../Services/getTrashColor';

export const InfoScan = (props: any) => {
  const [infoProductData, infoSetProductData] = useState<string>("rien");

  useEffect(() => {
    const trashColorData = getTrashColor(props);
    if (trashColorData !== infoProductData) {
      if (trashColorData === "nodata" || !trashColorData) {
        infoSetProductData("Je suis désolé, monsieur/madame, mais ma mémoire m'a fait faux bond. Les informations que vous cherchez ne sont pas là.");
      } else {
        infoSetProductData("rien");
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
