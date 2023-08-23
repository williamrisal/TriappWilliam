import React, { useState, useEffect } from 'react';
import { Image,View, Text, StyleSheet } from 'react-native';
import { getTrashColor } from '../Services/getTrashColor';
import { getData } from '../Services/getData';

export const InfoScan = (props: any) => {
  const [infoProductData, infoSetProductData] = useState();

  useEffect(() => {
    const trashColorData = getTrashColor(props);
    const infoData = getData(props);
    if (trashColorData !== infoProductData) {
      if (trashColorData === "nodata" || !trashColorData) {
        infoSetProductData("Je suis désolé, monsieur/madame, mais ma mémoire m'a fait faux bond. Les informations que vous cherchez ne sont pas là.");
      } else {
        infoSetProductData(trashColorData[1]);
      }
    }
    console.log("infoProductData", infoProductData)
  }, [props]);
  

  return (
    <View>
      <View style={[styles.textContainer, { backgroundColor: infoProductData, flexDirection: 'row', alignItems: 'center' }]}>
        <Image source={require('../../Assets/recycle.png')} />
        <View style={{ flexDirection: 'column', alignContent: 'center'}}>
          <Text style={styles.text}>
            {infoProductData === "black" ? "Ce produit n'est pas recyclable" : "Ce produit est recyclable"}
          </Text>
          <Text style={{ color: 'white'}}>
            {infoProductData === "black" ? "     Jeter dans la poubelle ordinaire": "Jeter dans la poubelle dans : " + infoProductData}
          </Text>
        </View>
      </View>

    </View>
  );
};


const styles = StyleSheet.create({
  textContainer: {
    backgroundColor: 'black',
    padding: '4%',
    borderRadius: 5,
  },
  text: {
    color: "white",
    fontWeight: 'bold',
    borderRadius: 200,
    marginLeft: 10,
  },
});
