import React, { useEffect, useState } from 'react'
import {
	SafeAreaView,
	StatusBar,
	Text,
	TouchableOpacity,
	View,
} from 'react-native'
import Math, { evaluate } from 'mathjs'
import { styles } from './styles/app.style'
import { buttons } from './components/buttons.component'

const App: React.FC = () => {
	evaluate('')

	const [result, setResult] = useState<string>('0')

	useEffect(() => setResult('0'), [])

	const setDisplay = async (button: string) => {
		if (button === '[x]') {
			result.match(/[Error]/) || result.length === 1
				? setResult('0')
				: setResult(x => x.substring(0, x.length - 1))
		} else if (button == 'C') {
			setResult('0')
		} else if (
			button.match(/[+×÷.-]/) &&
			result[result.length - 1].match(/[+×÷.-]/)
		) {
			setResult(x => x.substring(0, x.length - 1).concat(button))
		} else if (button === '=') {
			try {
				let res: string = result.replaceAll('×', '*')
				res = res.replaceAll('÷', '/')

				let final = await evaluate(res)
				setResult(String(final))
			} catch (error: any) {
				setResult(error?.name)
			}
		} else {
			result === '0' ? setResult(button) : setResult(x => (x += button))
		}
	}

	return (
		<>
			<StatusBar backgroundColor={'#029cd4'} barStyle={'light-content'} />

			<SafeAreaView style={styles.container}>
				<View style={styles.header}>
					<Text style={styles.headerText}>dc calculator - @dconco</Text>
				</View>

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
