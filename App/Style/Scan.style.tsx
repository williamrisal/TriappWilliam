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
	horizontalContainer: {
		flexDirection: 'row',
		alignItems: 'center', // Aligne les éléments verticalement au centre
		justifyContent: 'center', // Aligne les éléments horizontalement au centre
	  },
	sheetHeader: {
		height: '100%',
		width: '100%',
		flexDirection: 'column',
	},
	sheetHeaderInfo: {
		height: 170,
		width: '100%',
		flexDirection: 'row',
		padding: 16,
	},
	sheetHeaderInfoDetail: {
		height: '100%',
		width: '100%',
		flexDirection: 'column',
	},
	image: {
		maxWidth: 120,
		maxHeight: 120,
		width: 120,
		height: 120,
		resizeMode: 'contain',
		borderRadius: 5,
	},
	productInfosContainer: {
		height: 70,
		width: '100%',
	},
	productContainer: {
		height: 130,
		width: 200,
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
	},
	image_ecoscore: {
		maxWidth: 70,
		maxHeight: 50,
		width: 70,
		height: 50,
		resizeMode: 'contain',
		top: 10,
	}
});