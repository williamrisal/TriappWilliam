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
		backgroundColor: 'white',
		width: '100%',
		height: 50,

		// centrer le header
		marginTop: 35,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-around",

		borderBottomWidth: 0.3,
		borderBottomColor: 'grey',

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
		height: 300,
	},
	HistoryList: {
		backgroundColor: 'white',
	},
	//View Item Lister
	HistoryListItems: {
		width: '100%',
		height: 110,
		borderBottomWidth: 0.25,
		borderColor: 'grey',
		marginTop: 5,
		flexDirection: 'row',
	},
	//ImageItemScanned
	ImageItemScanned: {
		width: 90,
		height: 90,

		borderRadius: 5,
		marginTop: 5,
		left: 5,
		padding: 10,
	},
	InfoItemScanned: {
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
