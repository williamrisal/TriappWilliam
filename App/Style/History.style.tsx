import { StyleSheet, StatusBar } from 'react-native';

export default StyleSheet.create({
	//Page Historique
	HistoryPage: {
		backgroundColor: 'black',
		width: '100%',
		height: '100%',
	},
	//fin Page Historique

	//Component Header
	HistoryHeader: {
		backgroundColor: 'yellow',
		width: '100%',
		height: 50,

		// centrer le header
		marginTop: 35,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-around",

	},
	//fin Compoent Header

	//ScrollView History
	History: {
		backgroundColor: 'green',
	},
		//View Message d'Historique (scanne)
	HistoryInfo: {
		backgroundColor: 'purple',

		width: '100%',
		height: 300,
	},
	HistoryList: {
		backgroundColor: 'pink',
	},
		//View Item Lister
	HistoryListItems: {
		width: '100%',
		height: 100,
		borderColor: 'red',
		borderWidth: 3,
	},
	//fin ScrollView History
  });
  