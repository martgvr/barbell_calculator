import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Platform, StatusBar, SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from "react-native"

import { addWeight, removeWeight, clearBar } from "../store/weightsListSlice"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

const MainMenu = ({ setConfigModalVisible, setManualInputVisible, setListModalVisible, setInfoModalVisible }) => {
	const [totalWeight, setTotalWeight] = useState(0)

	const stateData = useSelector((state) => state.weights)
	const { barWeight, weightsList, weightsAvailable, discsType, weightUnit, barCollar } = stateData
	
	const dispatch = useDispatch()
	const clearBarHandler = () => dispatch(clearBar())
	
	const listModalHandler = () => setListModalVisible(true)
	const infoModalHandler = () => setInfoModalVisible(true)
	const configModalHandler = () => setConfigModalVisible(true)
	const manualInputHandler = () => setManualInputVisible(true)

	const addWeightHandler = (weight) => dispatch(addWeight(weight))
	const removeWeightHandler = (weight) => dispatch(removeWeight(weight))

	useEffect(() => {
		let weightsSum = 0
		weightsList.forEach((disc) => (weightsSum += disc))
		weightsSum *= 2
		weightsSum += Number(barWeight)
		
		setTotalWeight(weightsSum)
	}, [weightsList])

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.upperContainer}>
				<View style={styles.upperLeftContainer}>
					<View style={styles.totalContainer}>
						<Text style={styles.totalText}>Total</Text>
						<Text style={[styles.totalText, styles.textBold]}>
							{barCollar ? totalWeight + 5 : totalWeight} {weightUnit}
						</Text>
						<TouchableOpacity onPress={manualInputHandler}>
							<MaterialCommunityIcons style={styles.manualInputButton} name="square-edit-outline" color="white" size={24} />
						</TouchableOpacity>
					</View>

					<View>
						<Text style={styles.upperTextDetail}>
							{weightUnit == "kg" ? "Unidades métricas" : "Unidades imperiales"}
						</Text>
					</View>
				</View>

				<View style={styles.upperRightContainer}>
					<View style={styles.weightsTopContainer}>
						<Text style={styles.removeWeightSymbol}>-</Text>

						<View style={styles.rightSideWeights}>
							{weightsAvailable.map((item) => (
								<TouchableOpacity style={styles.removeWeightButton} key={item} onPress={() => removeWeightHandler(item)}>
									<Text style={styles.weightButtonText}>{item}</Text>
								</TouchableOpacity>
							))}
						</View>
					</View>

					<View style={styles.weightsBottomContainer}>
						<Text style={styles.addWeightSymbol}>+</Text>

						<View style={styles.rightSideWeights}>
							{weightsAvailable.map((item) => (
								<TouchableOpacity style={styles.addWeightButton} key={item} onPress={() => addWeightHandler(item)}>
									<Text style={styles.weightButtonText}>{item}</Text>
								</TouchableOpacity>
							))}
						</View>
					</View>
				</View>
			</View>

			<View style={styles.lowerContainer}>
				<View style={styles.lowerRightContainer}>
					<MaterialCommunityIcons name="cog" color="white" size={34} onPress={configModalHandler} />
					<MaterialCommunityIcons name="information-outline" color="white" size={34} onPress={infoModalHandler} />
				</View>

				<View style={styles.lowerRightContainer}>
					<TouchableOpacity style={styles.lowerButton} onPress={clearBarHandler}>
						<Text>Vaciar barra</Text>
					</TouchableOpacity>

					<TouchableOpacity style={styles.lowerButton} onPress={listModalHandler}>
						<Text>Lista de discos</Text>
					</TouchableOpacity>
				</View>
			</View>
		</SafeAreaView>
	)
}

export default MainMenu

const styles = StyleSheet.create({
	container: {
		width: "100%",
		height: "100%",
		position: "absolute",
		paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
	},

	// UPPER
	upperContainer: {
		flex: 1,
		flexDirection: "row",
	},
	upperRightContainer: {
		gap: 20,
		alignItems: "flex-end",
		justifyContent: "center",
	},
	upperLeftContainer: {
		gap: 6,
		flex: 1,
		padding: 10,
	},
	totalContainer: {
		gap: 10,
		flexDirection: "row",
	},
	totalText: {
		color: "white",
		fontSize: 20,
		// fontWeight: 300,
		textTransform: "uppercase",
	},
	textBold: {
		// fontWeight: "bold",
	},
	upperTextDetail: {
		color: "white",
	},
	manualInputButton: {
		borderRadius: 10,
		borderColor: "#555",
		paddingVertical: 1,
		paddingHorizontal: 8,
		backgroundColor: "#333",
	},
	weightsTopContainer: {
		gap: 10,
		alignItems: "center",
		flexDirection: "row",
	},
	weightsBottomContainer: {
		gap: 10,
		alignItems: "center",
		flexDirection: "row",
	},
	weightButtonText: {
		color: "white",
		fontSize: 20,
	},
	rightSideWeights: {
		gap: 8,
		padding: 10,
	},
	addWeightSymbol: {
		color: "#3f6e24",
		fontSize: 40,
	},
	addWeightButton: {
		width: 80,
		height: 42,
		borderRadius: 6,

		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#3f6e24",
	},
	removeWeightSymbol: {
		color: "#bf2830",
		fontSize: 40,
	},
	removeWeightButton: {
		width: 80,
		height: 42,
		borderRadius: 6,

		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#bf2830",
	},

	// LOWER
	lowerContainer: {
		padding: 10,
		flexDirection: "row",
		justifyContent: "space-between",
	},
	lowerRightContainer: {
		gap: 10,
		flexDirection: "row",
	},
	lowerButton: {
		height: 34,
		borderRadius: 12,
		paddingHorizontal: 12,

		alignSelf: "center",
		justifyContent: "center",
		backgroundColor: "#ddd",
	},
})
