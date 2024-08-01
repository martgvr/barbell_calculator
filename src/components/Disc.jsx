import { Image, StyleSheet } from "react-native"
import { useSelector } from "react-redux"
import { useState, useEffect } from "react"
import { LinearGradient } from "expo-linear-gradient"

const Disc = ({ weight }) => {
	const stateData = useSelector((state) => state.weights)
	const { weightUnit } = stateData

	const [discWidth, setDiscWidth] = useState()
	const [discHeight, setDiscHeight] = useState()
	const [discGradient, setDiscGradient] = useState(["#fff", "#ba1501", "#ba1501", "#aaa", "#b5271f", "#f12d1f", "#fff", "#fd3e27", "#fe3d36", "#c01918", "#7e080d", "#a04443", "#e4939f"])

	useEffect(() => {
		if (weightUnit == "kg") {
			if (weight === 25) {
				setDiscWidth(14)
				setDiscHeight(520)
				setDiscGradient(["#fff", "#ba1501", "#ba1501", "#aaa", "#b5271f", "#f12d1f", "#fff", "#fd3e27", "#fe3d36", "#c01918", "#7e080d", "#a04443", "#e4939f"])
			} else if (weight === 20) {
				setDiscWidth(14)
				setDiscHeight(520)
				setDiscGradient(["#fff", "#31315c", "#31315c", "#aaa", "#1e4a87", "#206eb7", "#fff", "#1967b5", "#006bc2", "#004283", "#003269", "#4c5a7f", "#8896bf"])
			} else if (weight === 15) {
				setDiscWidth(14)
				setDiscHeight(480)
				setDiscGradient(["#fff", "#b49000", "#b49000", "#eee", "#dbae00", "#f8d200", "#fff", "#ffd200", "#ffce00", "#e2ac00", "#aa7a00", "#deba5e", "#b29a5e"])
			} else if (weight === 10) {
				setDiscWidth(14)
				setDiscHeight(380)
				setDiscGradient(["#fff", "#14722e", "#14722e", "#aaa", "#008021", "#00a244", "#fff", "#00aa40", "#00ab61", "#009040", "#006c2e", "#44835f", "#66a781"])
			} else if (weight === 5) {
				setDiscWidth(14)
				setDiscHeight(280)
				setDiscGradient(["#fff", "#cec7b5", "#cec7b5", "#aaa", "#d6d3cc", "#e8e8e8", "#fff", "#f1f0f5", "#e2e8f4", "#d0d6e6", "#d3d5e2", "#a5a7b2", "#8f9098"])
			} else if (weight === 2.5) {
				setDiscWidth(14)
				setDiscHeight(180)
				setDiscGradient(["#fff", "#41423f", "#41423f", "#aaa", "#000000", "#000000", "#fff", "#000000", "#151515", "#1c1c1c", "#3d3d3d", "#3d3d3d", "#6a6a6a"])
			} else if (weight === 1.25) {
				setDiscWidth(8)
				setDiscHeight(130)
				setDiscGradient(["#fff", "#4a4a4a", "#4a4a4a", "#aaa", "#555555", "#f4f8fd", "#fff", "#f1f0f5", "#e2e8f4", "#727e8c", "#888888", "#7a7e7d", "#bdbdbd"])
			}
		}
		if (weightUnit == "lbs") {
			if (weight === 55) {
				setDiscWidth(14)
				setDiscHeight(550)
				setDiscGradient(["#fff", "#ba1501", "#ba1501", "#aaa", "#b5271f", "#f12d1f", "#fff", "#fd3e27", "#fe3d36", "#c01918", "#7e080d", "#a04443", "#e4939f"])
			} else if (weight === 45) {
				setDiscWidth(14)
				setDiscHeight(550)
				setDiscGradient(["#fff", "#31315c", "#31315c", "#aaa", "#1e4a87", "#206eb7", "#fff", "#1967b5", "#006bc2", "#004283", "#003269", "#4c5a7f", "#8896bf"])
			} else if (weight === 35) {
				setDiscWidth(14)
				setDiscHeight(500)
				setDiscGradient(["#fff", "#b49000", "#b49000", "#eee", "#dbae00", "#f8d200", "#fff", "#ffd200", "#ffce00", "#e2ac00", "#aa7a00", "#deba5e", "#b29a5e"])
			} else if (weight === 25) {
				setDiscWidth(14)
				setDiscHeight(400)
				setDiscGradient(["#fff", "#14722e", "#14722e", "#aaa", "#008021", "#00a244", "#fff", "#00aa40", "#00ab61", "#009040", "#006c2e", "#44835f", "#66a781"])
			} else if (weight === 10) {
				setDiscWidth(14)
				setDiscHeight(300)
				setDiscGradient(["#fff", "#cec7b5", "#cec7b5", "#aaa", "#d6d3cc", "#e8e8e8", "#fff", "#f1f0f5", "#e2e8f4", "#d0d6e6", "#d3d5e2", "#a5a7b2", "#8f9098"])
			} else if (weight === 5) {
				setDiscWidth(14)
				setDiscHeight(200)
				setDiscGradient(["#fff", "#41423f", "#41423f", "#aaa", "#000000", "#000000", "#fff", "#000000", "#151515", "#1c1c1c", "#3d3d3d", "#3d3d3d", "#6a6a6a"])
			} else if (weight === 2.5) {
				setDiscWidth(14)
				setDiscHeight(150)
				setDiscGradient(["#fff", "#4a4a4a", "#4a4a4a", "#aaa", "#555555", "#f4f8fd", "#fff", "#f1f0f5", "#e2e8f4", "#727e8c", "#888888", "#7a7e7d", "#bdbdbd"])
			}
		}
	}, [weight])

	const discStyle = {
		marginBottom: 14,
		width: discWidth,
		height: discHeight,
	}

	return (
		<>
			{weight === "collar" ? (
				<Image style={styles.collar} source={require("../../assets/collar.png")} />
			) : (
				<LinearGradient style={discStyle} colors={discGradient} locations={[0.001, 0.01, 0.016, 0.017, 0.03, 0.107, 0.12, 0.132, 0.5, 0.8, 0.94, 0.96, 1]} />
			)}
		</>
	)
}

export default Disc

const styles = StyleSheet.create({
	collar: {
		marginBottom: 14,
		width: "15%",
		height: 100,
	},
})

