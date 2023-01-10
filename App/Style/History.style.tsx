import { StyleSheet, Dimensions } from 'react-native';

//widht largeur, height longeur, left gauche, right droite
export default StyleSheet.create({
	//Page Historique
	HistoryPage: {
		width: '100%',
		height: '100%',
	},
	//fin Page Historique

	//Component Header
	HistoryHeader: {
		backgroundColor: "white",
		width: '100%',
		height: 85,

		// centrer le header
		flexDirection: "row",
		alignItems: "center",

		borderBottomWidth: 0.3,
		borderBottomColor: 'rgba(44, 140, 28, .7)',

	},
	//fin Compoent Header

	//ScrollView History
	History: {
		backgroundColor: 'whitesmoke',
	},
	//View Message d'Historique (scanne)
	HistoryInfo: {
		backgroundColor: 'rgba(44, 140, 28, .7)',

		width: '100%',
		height: 335,

		flexDirection: 'column',
	},
	HistoryInfoCase: {
		flexDirection: 'row',

		height: 140,
		width: "100%",
	},
	HistoryInfoCase1: {
		top: 100,
		height: 160,
		width: "100%",
	},
	Smiley: {
		height: 150,
		width: 150,
	},
	HistoryList: {
		backgroundColor: 'white',
	},
	//View Item Lister
	HistoryListItems: {
		backgroundColor: 'white',

		width: '100%',
		height: 110,
		flexDirection: 'row',
		
		marginTop: 1,
		borderBottomWidth: 0.25,
		borderColor: 'rgba(44, 140, 28, .4)',
	},
	//ImageItemScanned
	ImageItemScanned: {
		width: 90,
		height: 'auto',
		maxHeight: 90,
		resizeMode: 'contain',

		marginTop: 10,
		left: 5,
		borderRadius: 5,
	},
	InfoItemScanned: {
		left: 10,
		position: 'relative',
		margin: 10,
	},
	//fin ScrollView History

	textItem: {
		position: 'absolute',
		zIndex: 1,
	},
	submit: {
		position: 'absolute',
		zIndex: 2,
		top: 55,
		left: (Dimensions.get('window').width / 1.7),
	},
	iconSubmit: {
		zIndex: 2,
		width: 40,
		height: 40,
	},
});
