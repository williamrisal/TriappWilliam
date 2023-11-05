import React, { useEffect, useState, useRef } from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import ConfettiCannon from 'react-native-confetti-cannon';

import styles from '../../../Style/History.style';

export const PopUp = ({ setPopUp, score }) => {

    const [startConfetti, setStartConfetti] = useState(false);
    setTimeout(() => {
        setStartConfetti(true);
    }, 10);

    let Confetit = (time, nb) => {
        return (
            startConfetti && <ConfettiCannon
                count={nb}
                origin={{ x: 100, y: 1000 }}
                autoStart={true}
                explosionSpeed={time}
            />
        );
    }

    return (
        <View style={styles.popUp}>
            <View style={styles.popUpBack}>
                {Confetit(700, 40)}
                <Pressable style={styles.popUpRetour} onPress={() => { setPopUp(false) }}>
                    <Text style={styles.popUpRetourBtn}>Fermer</Text>
                </Pressable>
                {Confetit(1300, 60)}
            </View>
            <View style={styles.popUpInfo}>
                <View style={styles.popUpText}>
                    <Text>Woow vous avez un score de { score } c'est génial,</Text>
                    <Text>Scanner plus de produits pour l'augmenter !!</Text>
                </View>
            </View>
            {Confetit(100, 60)}
        </View>
    );
};
