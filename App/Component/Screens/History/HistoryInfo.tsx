import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';

import styles from '../../../Style/History.style';

const Smiley = (props: any) => {
	const smileyLink = [
		'https://cdn-icons-png.flaticon.com/512/2164/2164331.png',
		'https://cdn-icons-png.flaticon.com/512/2164/2164329.png',
		'https://cdn-icons-png.flaticon.com/512/2164/2164327.png',
		'https://cdn-icons-png.flaticon.com/512/2164/2164320.png',
		'https://cdn-icons-png.flaticon.com/512/2164/2164313.png', ]

	const articleScan = props.articleScan;
	const articleRecycled = props.articleRecycled;
	const res = (articleRecycled/articleScan) * 100;

	const smileyChoseLink = () => {
		if (articleScan == 0)
			return (smileyLink[4]);
		for (let i = 0, j = 0; i < 5; i++, j += 20)
			if (res > j && res <= j + 20)
				return(smileyLink[i]);
		return (smileyLink[3]);
	}

	return (
		<Image
			source={{ uri: smileyChoseLink()} }
			style={styles.Smiley}
		/>
	);
}

export const HistoryInfo = (props: any) => {
	const [article, setArticle] = useState(0);
	const [articleRecyclable, setArticleRecyclable] = useState(6);
	
	useEffect(() => {
		const interval = setInterval(() => {
 			(String(props.value)?.split(" ").reverse().map(
				(x, i) => {setArticle(i)}));
		  }, 1000);
		  return () => clearInterval(interval);
	}, [props.value]);

	return (
		<View style={styles.HistoryInfo}>
			<View style={styles.HistoryInfoCase}>
				<View style={{width: 150, }}>
					<Text style={{
						left: '30%',
						top:75,
						color: 'white',
						fontSize: 30,
					}}>Vous avez Scanner</Text>
					<Text style={{
						left: '27%',
						top: 105,
						fontSize: 28,
						color: 'white',
						textDecorationLine: 'underline',
					}}> {article} Article </Text>
				</View>
				<View style={{left: "30%", top: 70 }}>
					<Smiley
						articleScan={article}
						articleRecycled={articleRecyclable}	
					/>
				</View>
			</View>
			{ article > 0 ? (
				<View style={styles.HistoryInfoCase1}>
					<Text style={{
						left: "11%",
						color: 'white',
						fontSize: 20,
						bottom: 0,
					}}> Sur un Total de {articleRecyclable} Recycable </Text>
				</View>
			) : <View /> }
		</View>
	);
}