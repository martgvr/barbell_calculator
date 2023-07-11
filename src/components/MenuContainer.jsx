import { FontAwesome } from "@expo/vector-icons"
import { StyleSheet, Text, View, TouchableOpacity } from "react-native"

import { useDispatch } from "react-redux"
import { addWeight, clearBar } from "../store/weightsListSlice"

const MenuContainer = () => {
	const dispatch = useDispatch()

    const weightsAvailable = [25, 20, 15, 10, 5, 2.5, 1.25]

	const addWeightHandler = (weight) => {
		dispatch(addWeight(weight))
	}

	const removeWeightHandler = (weight) => {
		console.log('remove weight:', weight);
	}

	const clearBarHandler = () => {
		dispatch(clearBar())
	}

	return (
		<View style={styles.container}>
			<View style={styles.leftSide}>
				<View style={styles.leftSideTop}>
					<View style={styles.leftSideTopContainer}>
						<FontAwesome name="gear" size={34} color="white" />

						<TouchableOpacity style={styles.clearBarButton} onPress={clearBarHandler}>
							<Text>Vaciar barra</Text>
						</TouchableOpacity>
					</View>
				</View>
				<View style={styles.leftSideBottom}>
					<Text style={styles.totalText}>Total: ___ Kg</Text>
				</View>
			</View>

			<View style={styles.rightSide}>
				<View style={styles.rightSideTop}>
                    {
                        weightsAvailable.map(item => 
                            <TouchableOpacity style={styles.removeWeightButton} key={item} onPress={() => removeWeightHandler(item)}>
                                <Text style={styles.weightButtonText}>{item}</Text>
                            </TouchableOpacity>)
                    }
				</View>

				<View style={styles.rightSideBottom}>
                    {
                        weightsAvailable.map(item => 
                            <TouchableOpacity style={styles.addWeightButton} key={item} onPress={() => addWeightHandler(item)}>
                                <Text style={styles.weightButtonText}>{item}</Text>
                            </TouchableOpacity>)
                    }
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
		flexDirection: 'row',
		height: 35,
		alignItems: 'center',
		gap: 20
	},
    weightButtonText: {
        color: 'white',
        fontSize: 20
    },

	// LEFT SIDE

	leftSide: {
		flex: 1,
		opacity: 0.8,
	},
	leftSideTop: {
		flex: 1,
		padding: 10,
		flexDirection: 'row',
	},
	leftSideBottom: {
		flex: 1,
		padding: 10,
		justifyContent: "flex-end",
	},
	clearBarButton: {
		backgroundColor: '#ddd',
		height: '100%',
		alignItems: 'center',
		paddingHorizontal: 12,
		justifyContent: 'center',
		borderRadius: 12
	},
	totalText: {
		color: "white",
		fontSize: 20,
		textTransform: "uppercase",
	},

	// RIGHT SIDE

	rightSide: {
		flex: 1,
		opacity: 0.8,
		alignItems: "flex-end",
	},
	rightSideTop: {
		flex: 1,
		padding: 10,
		gap: 8,
		paddingTop: 12
	},

	removeWeightButton: {
		backgroundColor: "red",
		height: 42,
		width: 80,
		borderRadius: 6,
		alignItems: "center",
		justifyContent: "center",
	},

	rightSideBottom: {
        gap: 8,
		flex: 1,
		padding: 10,
		paddingTop: 36
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
