import React from "react"
import { FontAwesome } from "@expo/vector-icons"
import { StyleSheet, Text, View, TouchableOpacity } from "react-native"

const MenuContainer = () => {
    const weights = [25, 20, 15, 10, 5, 2.5, 1.25]

	const weightHandler = (weight) => {
		console.log('Peso: ', weight);
	}

	return (
		<View style={styles.container}>
			<View style={styles.leftSide}>
				<View style={styles.leftSideTop}>
					<FontAwesome name="gear" size={34} color="white" />
				</View>
				<View style={styles.leftSideBottom}>
					<Text style={styles.totalText}>Total: ... Kg</Text>
				</View>
			</View>

			<View style={styles.rightSide}>
				<View style={styles.rightSideTop}>
                    {
                        weights.map(item => 
                            <TouchableOpacity style={styles.removeWeightButton} key={item} onPress={() => weightHandler(item)}>
                                <Text style={styles.weightButtonText}>{item}</Text>
                            </TouchableOpacity>)
                    }
				</View>

				<View style={styles.rightSideBottom}>
                    {
                        weights.map(item => 
                            <TouchableOpacity style={styles.addWeightButton} key={item} onPress={() => weightHandler(item)}>
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
	},
	leftSideBottom: {
		flex: 1,
		padding: 10,
		justifyContent: "flex-end",
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
