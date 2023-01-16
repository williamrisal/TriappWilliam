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
		backgroundColor: 'rgba(30, 130, 30, .7)',

		width: '100%',
		height: 335,

		flexDirection: 'column',
		borderBottomColor: 'rgba(00, 150, 00, .3)',
		borderBottomWidth: 3,
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
		borderColor: 'rgba(44, 140, 28, .2)',
		borderBottomLeftRadius: 70,
		borderBottomRightRadius: 70,
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

		height: 60,
		width: 260,
	},
	submit: {
		position: 'absolute',
		zIndex: 2,
		top: 65,
		left: (Dimensions.get('window').width / 1.65),
	},
	iconSubmit: {
		zIndex: 2,
		width: 30,
		height: 30,
	},
	skeletonScreen: {
		backgroundColor: 'rgba(216, 216, 216, .7)',
	},
});
