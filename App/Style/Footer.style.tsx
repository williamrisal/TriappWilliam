import { StyleSheet } from 'react-native';

export default StyleSheet.create({

	sheetContainer: {
		width: '100%',
		height: 75,
	  	zIndex: 1,

	  	flexDirection: "row",
	  	justifyContent: "space-around",

	  	backgroundColor: "whitesmoke",
	},
	status: {
		top: 9,
		height: 50,
		width: 50,
	},
	imgStatus: {
		left: 5,
		height: 40,
		width: 40,
	},
	statusOn: {
		borderBottomWidth: 3,
		borderColor: 'rgba(62, 100, 62, 1)',
		borderRadius: 3.5,
	}
  });