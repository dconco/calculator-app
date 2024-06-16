import React, { useEffect, useState } from 'react'
import {
	SafeAreaView,
	StatusBar,
	Text,
	TouchableOpacity,
	View,
} from 'react-native'
import { styles } from './styles/app.style'
import { buttons } from './components/buttons.component'

const App: React.FC = () => {
	const [result, setResult] = useState<string>('0')

	useEffect(() => setResult('0'), [])

	const setDisplay = (button: string) => {
		// Set Delete Button
		if (button === '[x]') {
			result.length === 1
				? setResult('0')
				: setResult(x => x.substring(0, x.length - 1))
		} else if (button == 'C') {
		} else {
			result === '0' ? setResult(button) : setResult(x => (x += button))
		}
	}

	return (
		<>
			<StatusBar backgroundColor={'lightblue'} barStyle={'dark-content'} />

			<SafeAreaView style={styles.container}>
				<View style={styles.display}>
					<Text style={styles.displayText}>{result}</Text>
				</View>

				<View style={styles.buttonWrapper}>
					{buttons.map((button, index) => (
						<TouchableOpacity
							key={index}
							activeOpacity={0.7}
							style={styles.button}
							onPress={() => setDisplay(button)}>
							<Text children={button} style={styles.buttonText} />
						</TouchableOpacity>
					))}
				</View>
			</SafeAreaView>
		</>
	)
}
export default App
