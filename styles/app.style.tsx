import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-between',
		backgroundColor: 'lightblue',
	},
	display: {
		display: 'flex',
		flex: 1,
		alignItems: 'flex-end',
		justifyContent: 'flex-end',
		minHeight: '30%',
		marginRight: 10,
		overflow: 'scroll',
	},
	displayText: {
		fontSize: 70,
		color: 'black',
	},
	buttonWrapper: {
		display: 'flex',
		height: 'auto',
		flexWrap: 'wrap',
		flexDirection: 'row',
		shadowColor: 'blue',
		shadowOpacity: 0.6,
	},
	button: {
		width: '25%',
		height: 90,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'blue',
	},
	buttonText: {
		fontSize: 30,
		fontWeight: '500',
	},
})

export { styles }
