import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';

import styles from '../../../Style/History.style';

export const PopUp = () => {

    let score = 98;

    const clicks = () => {
        console.log('fermer');
    };    

    return (
        <View style={styles.popUp}>
            <View style={styles.popUpBack}>
                <Pressable style={styles.popUpRetour} onPress={clicks}>
                    <Text style={styles.popUpRetourBtn}>Fermer</Text>
                </Pressable>
                </View>
                <View style={styles.popUpInfo}>
                    <View style={styles.popUpText}>
                        <Text>Woow vous avais un score de { score }</Text>
                        <Text>C'est genial, Scanner plus de produit pour l'augmenter !!</Text>
                    </View>
                </View>
            </View>
            );
};