import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';

import styles from '../../Style/History.style';

//Fonction Component 
const ParseItemFromStorage = (props) => {
  if (props.codeBarre.length == 4) return;
  return (
    <View style={styles.sheetContainer}>
      <Text>{props.codeBarre}</Text>
    </View>
  );
};

//Fonction Principal Component Historique
export const History = () => {
  const [value, setValue] = useState(null);
  const { getItem } = useAsyncStorage('@storageHistory4');

  const takeItemFromStorage = async () => setValue(await getItem());
  var codeBarreParse: Array<String> = String(value).split(" ").reverse();

  useEffect(() => {
    takeItemFromStorage();
  }, []);

  return (
    <View >
      <View style={styles.top}>
        <Text>Historique</Text>
      </View>
      <View style={styles.container}>
        {codeBarreParse.map(
          (x, i) =>
            <ParseItemFromStorage codeBarre={x} number={i} key={i} />
        )}
      </View>
    </View>
  );
}