import { StyleSheet, useColorScheme } from 'react-native';
import { color } from 'react-native-reanimated';

export default StyleSheet.create({

	sheetContainer: {
		width: '100%',
		height: 70,
	  	zIndex: 1,

	  	flexDirection: "row",
	  	alignItems: "center",
	  	justifyContent: "space-around",

	  	backgroundColor: "whitesmoke",
	},
	img: {
		width: 30,
		height: 30
	}
  });
