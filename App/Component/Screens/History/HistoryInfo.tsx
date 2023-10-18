import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../../../Style/History.style';

const Smiley = (props: any) => {
	const smileyLinkR = require("../../../Assets/SmileyHistorique/smileyRouge.png");
	const smileyLinkB = require("../../../Assets/SmileyHistorique/smileyBleu.png");
	const smileyLinkJ = require("../../../Assets/SmileyHistorique/smileyJaune.png");
	const smileyLinkC = require("../../../Assets/SmileyHistorique/smileyCian.png");
	const smileyLinkV = require("../../../Assets/SmileyHistorique/smileyVert.png");
	const tabSmiley = [smileyLinkR, smileyLinkB, smileyLinkJ, smileyLinkC, smileyLinkV];

	const res = (props.articleRecycled / props.articleScan) * 100;
	var smielyChose = 0;

	for (let i = 0, j = 0; (i < 5); i++, j += 20)
		if (res > j && res <= j + 20 && (smielyChose = i))
			break;
	return ( <Image source={tabSmiley[smielyChose]} style={styles.Smiley} /> );
}

export const HistoryInfo = (props: any) => {
	
	//recupere le nb d'article et de recyclable
	const [article, setArticle] = useState(0);

	const updateItem = () => {
		let value = 0;

		if (props.value == null) {
			value = 0; 
		} else {
			String(props.value)?.split(" ").reverse().map((x, i) => value += 1);
		}
		setArticle(value);
	}
	useEffect(() => {
		updateItem();
	}, [props.value]);

	return (
		<View style={styles.HistoryInfo}>
			<View style={styles.HistoryInfoCase}>
			{ article > 0 ? (
			    <>
					<View style={{ width: 150, }}>
							<Text style={styles.text1}>Vous avez Scanner</Text>
							<Text style={styles.text2}> {article} Articles </Text>
					</View>
					<View style={{ left: "35%", top: 80 }}>
						<Smiley articleScan={article} articleRecycled={props.NbRecyclableItem} />
					</View>
			    </>
				) :
				<View style={styles.Oscan}>
					<Text style={styles.OscanText1}>Bienvenue dans l'historique ✌🏼</Text>
					<Text style={styles.OscanText2}>Vous n'avais pas scanner d'article pour le moment...</Text>
				</View>
			}
			</View>
			{ article > 0 ? (
				<View style={styles.HistoryInfoCase1}>
					<Text style={styles.text3}> Sur un Total de {props.NbRecyclableItem} Recycable </Text>
					<Text style={styles.text3}> Score Total: {props.score}</Text>
				</View>
			) : <View /> }
		</View>
	);
}