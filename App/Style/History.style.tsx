import { StyleSheet, Dimensions } from 'react-native';

//widht largeur, height longeur, left gauche, right droite
export default StyleSheet.create({
	HistoryPage: {
		width: '100%',
		height: '100%',
	},
	HistoryHeader: {
		width: '100%',
		height: 85,
		backgroundColor: 'rgba(30, 130, 30, .7)',
		flexDirection: "row",
		alignItems: "center",
		borderBottomWidth: 0.4,
		borderBottomColor: 'white',
	},
	HistoryHeaderText: {
		fontWeight: "bold",
		fontSize: 30,
		left: 20,
		top: 20,
		color: 'white',
	},
	History: {
		backgroundColor: 'whitesmoke',
	},


	HistoryInfo: {
		backgroundColor: 'rgba(30, 130, 30, .7)',
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
	text1: {
		left: '30%',
		top:75,
		color: 'white',
		fontSize: 30,
	},
	text2: {
		left: '27%',
		top: 95,
		fontSize: 28,
		color: 'white',
		textDecorationLine: 'underline',
	},
	text3: {
		left: "11%",
		color: 'white',
		fontSize: 20,
    	bottom: 0,
	},
	Oscan: {
		width: 300,
		left: '25%',
		top: 100,

	},
	OscanText1: {
		width: 300,

		fontWeight: "bold",
		fontSize: 30,
		color: 'white',
	},
	OscanText2: {
		width: 300,
		top: 30,

		fontSize: 20,
		color: 'whitesmoke',
	},

	HistoryList: {
		backgroundColor: 'white',
	},
	HistoryListItems: {
		backgroundColor: 'white',
		width: '100%',
		height: 110,
		flexDirection: 'row',
		marginTop: 1,
		borderBottomWidth: 0.4,
		borderColor: 'rgba(44, 140, 28, .5)',
		borderBottomLeftRadius: 70,
		borderBottomRightRadius: 70,
	},
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
	textItem: {
		position: 'absolute',
		zIndex: 1,
		height: 60,
		width: 1000,
	},
	submit: {
		position: 'absolute',
		zIndex: 2,
		top: 65,
		left: (Dimensions.get('window').width / 1.65),
	},
	iconSubmit: {
		zIndex: 2,
		width: 25,
		height: 25,
	},
	skeletonScreen: {
		backgroundColor: 'rgba(216, 216, 216, .7)',
	},
	activityI: {
		width: 90,
		height: 90,
		top: 10,
		left: 8,
	}
});