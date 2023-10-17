import { useEffect, useState } from "react"
import { FontAwesome } from "@expo/vector-icons"
import { useDispatch, useSelector } from "react-redux"
import { addWeight, removeWeight, clearBar } from "../store/weightsListSlice"
import { StyleSheet, Text, View, TouchableOpacity } from "react-native"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

const MenuContainer = ({ setModalVisible, setManualInputVisible }) => {
	const [totalWeight, setTotalWeight] = useState(0)

	const dispatch = useDispatch()
	const stateData = useSelector((state) => state.weights)
	const { barWeight, weightsList, weightsAvailable, discsType } = stateData

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
					<View style={styles.leftSideTopContainer}>
						<FontAwesome name="gear" size={34} color="white" onPress={openModalHandler} />
						<TouchableOpacity style={styles.clearBarButton} onPress={clearBarHandler}>
							<Text>Vaciar barra</Text>
						</TouchableOpacity>
						<View>
							<Text style={styles.discTypeText}>{discsType == 'calibrated' ? 'Discos Calibrados' : 'Discos Regulares'}</Text>
						</View>
					</View>
				</View>

				<View style={styles.leftSideBottom}>
					<Text style={styles.totalText}>Total: {totalWeight} Kg</Text>
					<TouchableOpacity onPress={openManualInput}>
						<MaterialCommunityIcons style={styles.editWeightButton} name="square-edit-outline" color="white" size={24} />
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
		position: "absolute",
		paddingTop: 50,
		width: "100%",
		height: "100%",
		display: "flex",
		flexDirection: "row",
	},
	leftSideTopContainer: {
		flexDirection: "row",
		height: 35,
		alignItems: "center",
		gap: 20,
	},
	weightButtonText: {
		color: "white",
		fontSize: 20,
	},

	// LEFT SIDE
	leftSide: {
		flex: 1,
		opacity: 0.8,
	},
	leftSideTop: {
		flex: 1,
		padding: 10,
		flexDirection: "row",
	},
	leftSideBottom: {
		flex: 1,
		padding: 10,
		flexDirection: "row",
		alignItems: "flex-end",
		justifyContent: "flex-start",
		gap: 10,
	},
	clearBarButton: {
		backgroundColor: "#ddd",
		height: "100%",
		alignItems: "center",
		paddingHorizontal: 12,
		justifyContent: "center",
		borderRadius: 12,
	},
	totalText: {
		color: "white",
		fontSize: 20,
		textTransform: "uppercase",
	},
	editWeightButton: {
		borderRadius: 10,
		borderColor: "#555",
		paddingVertical: 1,
		paddingHorizontal: 8,
		backgroundColor: "#333",
	},

	// RIGHT SIDE
	rightSide: {
		gap: 40,
		flex: 1,
		opacity: 0.8,
		alignItems: "flex-end",
	},

	// TOP
	rightSideTop: {
		gap: 10,
		marginTop: 46,
		alignItems: 'center',
		flexDirection: 'row',
	},
	rightSideWeights: {
		gap: 8,
		paddingHorizontal: 10,
	},
	removeWeightButton: {
		backgroundColor: "red",
		height: 42,
		width: 80,
		borderRadius: 6,
		alignItems: "center",
		justifyContent: "center",
	},
	discTypeText: {
		color: '#fff'
	},

	removeWeightSymbol: {
		color: 'red',
		fontSize: 40,
	},
	addWeightSymbol: {
		color: 'green',
		fontSize: 40,
	},

	// BOTTOM
	rightSideBottom: {
		gap: 8,
		flexDirection: 'row',
		alignItems: 'center',
	},
	addWeightButton: {
		backgroundColor: "green",
		height: 42,
		width: 80,
		borderRadius: 6,
		alignItems: "center",
		justifyContent: "center",
	},
})
