import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { StyleSheet, Text, View, TouchableOpacity } from "react-native"

import { FontAwesome } from "@expo/vector-icons"
import { addWeight, removeWeight, clearBar } from "../store/weightsListSlice"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

const MenuContainer = ({ setModalVisible, setManualInputVisible }) => {
	const [totalWeight, setTotalWeight] = useState(0)

	const dispatch = useDispatch()
	const stateData = useSelector((state) => state.weights)
	const { barWeight, weightsList, weightsAvailable, discsType, weightUnit } = stateData

	const clearBarHandler = () => dispatch(clearBar())
	const openModalHandler = () => setModalVisible(true)

	const openManualInput = () => setManualInputVisible(true)
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
		<View style={styles.container}>
			<View style={styles.leftSide}>
				<View style={styles.leftSideTop}>
					<View style={styles.leftSideTopTotal}>
						<Text style={styles.totalText}>Total: {totalWeight} {weightUnit == "kg" ? "kg" : "lbs"}</Text>

						<TouchableOpacity onPress={openManualInput}>
							<MaterialCommunityIcons style={styles.editWeightButton} name="square-edit-outline" color="white" size={24} />
						</TouchableOpacity>
					</View>

					<Text style={styles.discTypeText}>{discsType == "calibrated" ? "Discos Calibrados" : "Discos Regulares"} / {weightUnit == "kg" ? "Unidades métricas" : "Unidades imperiales"}</Text>
				</View>

				<View style={styles.leftSideBottom}>
					<FontAwesome name="gear" size={34} color="white" onPress={openModalHandler} />

					<TouchableOpacity style={styles.clearBarButton} onPress={clearBarHandler}>
						<Text>Vaciar barra</Text>
					</TouchableOpacity>
				</View>
			</View>

			<View style={styles.rightSide}>
				<View style={styles.rightSideTop}>
					<Text style={styles.removeWeightSymbol}>-</Text>

					<View style={styles.rightSideWeights}>
						{weightsAvailable.map((item) => (
							<TouchableOpacity style={styles.removeWeightButton} key={item} onPress={() => removeWeightHandler(item)}>
								<Text style={styles.weightButtonText}>{item}</Text>
							</TouchableOpacity>
						))}
					</View>
				</View>

				<View style={styles.rightSideBottom}>
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
	)
}

export default MenuContainer

const styles = StyleSheet.create({
	container: {
		width: "100%",
		height: "100%",
		position: "absolute",

		display: "flex",
		alignItems: "center",
		flexDirection: "row",
	},
	weightButtonText: {
		color: "white",
		fontSize: 20,
	},

	// LEFT SIDE
	leftSide: {
		opacity: 0.8,
	},
	leftSideTop: {
		gap: 4,
		flex: 1,
		padding: 10,
		marginTop: 50,
	},
	leftSideTopTotal: {
		gap: 10,
		flexDirection: "row",
	},
	totalText: {
		color: "white",
		fontSize: 20,
		textTransform: "uppercase",
	},
	discTypeText: {
		color: "#fff",
	},
	editWeightButton: {
		borderRadius: 10,
		borderColor: "#555",
		paddingVertical: 1,
		paddingHorizontal: 8,
		backgroundColor: "#333",
	},

	leftSideBottom: {
		gap: 20,
		padding: 10,
		flexDirection: "row",
	},
	clearBarButton: {
		height: 34,
		borderRadius: 12,
		paddingHorizontal: 12,

		alignSelf: "center",
		justifyContent: "center",
		backgroundColor: "#ddd",
	},

	// RIGHT SIDE
	rightSide: {
		gap: 40,
		flex: 1,
		alignItems: "flex-end",
	},

	rightSideTop: {
		gap: 10,
		alignItems: "center",
		flexDirection: "row",
	},
	rightSideWeights: {
		gap: 8,
		paddingHorizontal: 10,
	},
	removeWeightButton: {
		width: 80,
		height: 42,
		borderRadius: 6,

		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#bf2830",
	},
	removeWeightSymbol: {
		color: "#bf2830",
		fontSize: 40,
	},

	// BOTTOM
	rightSideBottom: {
		gap: 8,
		flexDirection: "row",
		alignItems: "center",
	},
	addWeightButton: {
		width: 80,
		height: 42,
		borderRadius: 6,

		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#3f6e24",
	},
	addWeightSymbol: {
		color: "#3f6e24",
		fontSize: 40,
	},
})
