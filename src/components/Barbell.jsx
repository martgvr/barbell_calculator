import { StyleSheet, View, Image, Platform, StatusBar } from "react-native"

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
		position: "absolute",
		alignItems: 'flex-end',
		justifyContent: 'center',
		paddingBottom: 56,
		paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
	},
	barbell: {
		width: "95%",
		height: 50,
	},
})
