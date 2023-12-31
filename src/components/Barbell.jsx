import { StyleSheet, View, Image } from "react-native"

const Barbell = () => {
	return (
		<View style={styles.barbellContainer}>
			<Image style={styles.barbell} source={require("../../assets/barbell.png")} />
		</View>
	)
}

export default Barbell

const styles = StyleSheet.create({
	barbellContainer: {
		width: "100%",
		height: "100%",
		
		alignItems: "flex-end",
		justifyContent: "center",
	},
	barbell: {
		width: "95%",
		height: 50,
	},
})
