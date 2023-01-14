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
	image_scan: {
		width: '30%',
		height: '30%',
		marginLeft: "10%",
		marginTop: "55%",
		padding: '40%',
		justifyContent: 'center',
		alignItems: 'center',
		opacity: 0.3,
		// mettre au centre l'image
	},
});
