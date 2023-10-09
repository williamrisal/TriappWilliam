import React, { useState, useEffect } from "react";
import { Image, View, Text, StyleSheet } from "react-native";
import { getTrashColor } from "../Services/getTrashColor";
import { getEnvironementImpact } from "../Services/getEnvironementImpact";

export const InfoScan = (props: any) => {
  const [infoProductData, infoSetProductData] = useState();
  const [environementImpact, setEnvironementImpact] = useState();
  const [colorCarbonne, setColorCarbonne] = useState<string>('#000000');
  const [colorEmballage, setColorEmballage] = useState<string>('#000000');

  useEffect(() => {
    const trashColorData = getTrashColor(props);
    setEnvironementImpact(getEnvironementImpact(props));

    if (trashColorData !== infoProductData) {
      if (trashColorData === "nodata" || !trashColorData)
        infoSetProductData("Je suis désolé, mais ma mémoire m'a fait faux bond. Les informations que vous cherchez ne sont pas là.");
      else
        infoSetProductData(trashColorData[1]);
    }

    setColorCarbonne(environementImpact < 300 ? '#90EE90' : environementImpact <= 600 ? '#FFA500' : '#FF6961');
    //faire la couleur en focntion de..
    setColorEmballage('#90EE90');
  }, [props]);

  const colorMap = {
    bleu: 'blue',
    vert: 'green',
    marrons: 'brown',
    jaune: 'yellow',
    gris: 'grey',
  };
  const backgroundColorRecyclage = colorMap[infoProductData] || 'black';

  return (
    <>

      <View style={[styles.textContainer, styles.recyclage, { backgroundColor: backgroundColorRecyclage }]}>
        <Image source={require("../../Assets/recycle.png")} />
        <View style={styles.recyclageText}>
          <Text style={[styles.textRecyclage, { color: infoProductData === "jaune" ? "black" : "white" }]}>
            {infoProductData === "black"
              ? "Ce produit n'est pas recyclable"
              : "Ce produit est recyclable"}
          </Text>
          <Text style={{ color: infoProductData === "jaune" ? "black" : "white" }}>
            {infoProductData === "black"
              ? "Jeter dans la poubelle ordinaire"
              : "Jeter dans la poubelle " + infoProductData}
          </Text>
        </View>
      </View>


      <View style={styles.Carbonne}>
        <View style={styles.textContainer}>
          <Text style={styles.titreECarbonne}> {"Empreinte Carbone"} </Text>
          <View style={styles.eCarbonne}>
            <Image
              style={[styles.imageECarbonne, { tintColor: colorCarbonne }]}
              source={require("../../Assets/Car/car.png")}
            />
            <Text style={[styles.textCarECarbonne, { color: colorCarbonne }]} >
              {"Équivaut à parcourir " + (767 / 191.75).toFixed(2) + " km dans une voiture à essence"}
            </Text>
          </View>
          <View style={styles.Co2ECarbonne}>
            <Text style={styles.textCo2ECarbonne}>{ environementImpact + "g de CO2 pour 100g de produit" }</Text>
          </View>
        </View>
      </View>


      <View style={styles.Emballage}>
        <View style={styles.textContainer}>
          <Text style={styles.titreEmballage}> {"Emballage"} </Text>
          <View style={styles.Emballage}>
            <Image
              style={[styles.imageEmballage, { tintColor: colorEmballage }]}
              source={require("../../Assets/Emballage/emballage.png")}
            />
            <Text style={[styles.textBouteilleEmballage, { color: colorEmballage }]} >
              {"Emballage a " + "faible" + " impact"}
            </Text>
          </View>
        </View>
      </View>

    </>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    marginBottom: "2%",
    padding: "3%",
    borderRadius: 5,
  },


  recyclage: {
    flexDirection: "row",
    alignItems: "center",
  },
  recyclageText: {
    flexDirection: "column",
    alignItems: "center",
    marginLeft: "5%",
  },
  textRecyclage: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    borderRadius: 200,
    marginLeft: 10,
  },


  Carbonne: {
    height: "40%",
  },
  titreECarbonne: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  eCarbonne: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  imageECarbonne: {
    width: 60,
    height: 60,
    marginRight: 10,
  },
  textCarECarbonne: {
    width: "80%",
    fontWeight: 'bold',
  },
  Co2ECarbonne: {
    alignItems: 'flex-end',
  },
  textCo2ECarbonne: {
    width: "80%",
    fontWeight: 'bold',
  },


  Emballage: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titreEmballage: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  imageEmballage: {
    width: 60,
    height: 60,
    marginRight: 10,
  },
  textBouteilleEmballage: {
    fontWeight: "bold",
    fontSize: 20,
  },

});