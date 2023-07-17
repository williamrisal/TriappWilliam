import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getTrashColor } from '../Services/getTrashColor';

export const InfoScan = (props: any) => {
  const [infoProductData, infoSetProductData] = useState<string>("rien");

  useEffect(() => {
    const trashColorData = getTrashColor(props);
    if (trashColorData !== infoProductData) {
      if (trashColorData === "nodata" || !trashColorData) {
        infoSetProductData("Je suis désolé, monsieur/madame, mais ma mémoire m'a fait faux bond. Les informations que vous cherchez ne sont pas là.");
      } else {
        infoSetProductData(trashColorData);
        console.log("infsetproductdata", infoProductData);
      }
    }
  }, [props]);

  return (
    <View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>cette objet est dans la poubelle :{infoProductData[1]}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    marginBottom: 200,
    backgroundColor: 'black',
  },
  text: {
    color: "white",
    width: "30%",
  },
});
