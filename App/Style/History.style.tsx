import { StyleSheet, StatusBar } from 'react-native';

export default StyleSheet.create({
	top: {
		margin: 50,
	  },
	container: {
		flex: 1,
		marginTop: StatusBar.currentHeight,
	  },
	  sheetContainer: {
		borderWidth: 2,
		borderColor: "blue",
		
		backgroundColor: 'grey',
    height: 150,
    justifyContent: 'center',
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 20,
	  },
  });
  