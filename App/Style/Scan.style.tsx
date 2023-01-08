import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		height: '100%',
		width: '100%',
	},

	sheetContainer: {
		flex: 1,
		padding: 24,
		justifyContent: 'center',
		zIndex: 1,
	},

	image: {
		width: 120,
		height: 120,
		resizeMode: 'contain',
		borderRadius: 10,
	},

	sheetHeader: {
		flexDirection: 'row',
		padding: 16,
	},

	productInfosContainer: {
		flexDirection: 'column',
		marginTop: 10,
		marginLeft: 20,
	},

	productName: {
		fontSize: 20,
		fontWeight: 'bold',
	},

	productBrand: {
		fontSize: 14,
		fontWeight: '400',
		color: '#A9A9A9',
	},

	recScan: {
		borderWidth: 2,
		borderColor: "white",

		justifyContent: 'center',
		alignItems: 'center',
		height: 150,
		margin: 30,
	},
});
