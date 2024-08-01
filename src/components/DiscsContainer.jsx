import Disc from "./Disc"
import { useSelector } from "react-redux"
import { StyleSheet, View } from "react-native"

const DiscsContainer = () => {
	const stateData = useSelector((state) => state.weights)
	const { weightsList: discs, barCollar } = stateData

	return (
		<View style={styles.discsContainer}>
			{ barCollar && <Disc weight={'collar'} key={1000} /> }
			{ discs.map((discWeight, index) => (
				<Disc weight={discWeight} key={index} />
			)) }
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
