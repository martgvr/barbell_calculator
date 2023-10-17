import Disc from "./Disc"
import { useSelector } from "react-redux"
import { StyleSheet, View } from "react-native"

const DiscsContainer = () => {
	const discs = useSelector((state) => state.weights.weightsList)

	return (
		<View style={styles.discsContainer}>
			{discs.map((discWeight, index) => (
				<Disc weight={discWeight} key={index} />
			))}
		</View>
	)
}

export default DiscsContainer

const styles = StyleSheet.create({
	discsContainer: {
		gap: 1.4,
		width: "64%",
		position: "absolute",
		flexDirection: "row",
		alignItems: "center",
		alignSelf: "flex-start",
		justifyContent: "flex-end",
	},
})
