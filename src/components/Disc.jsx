import React, { useState, useEffect } from "react"
import { StyleSheet, View, Image } from "react-native"

const Disc = ({ weight }) => {
	const [discState, setDiscState] = useState({ height: 550, picture: null })

	useEffect(() => {
		let picture = null
		let discHeight = 550

		if (weight === 25) {
			picture = require("../../assets/25kg.png")
		} else if (weight === 20) {
			picture = require("../../assets/20kg.png")
		} else if (weight === 15) {
			picture = require("../../assets/15kg.png")
			discHeight = 500
		} else if (weight === 10) {
			picture = require("../../assets/10kg.png")
			discHeight = 400
		} else if (weight === 5) {
			picture = require("../../assets/5kg.png")
			discHeight = 300
		} else if (weight === 2.5) {
			picture = require("../../assets/2-5kg.png")
			discHeight = 200
		} else if (weight === 1.25) {
			picture = require("../../assets/1-25kg.png")
			discHeight = 150
		}

		setDiscState({ height: discHeight, picture: picture })
	}, [weight])

	const styles = StyleSheet.create({
		disc: {
			width: 15,
            resizeMode: 'contain',
			height: discState.height,
		},
	})

	return (
		<View>
			<Image style={styles.disc} source={discState.picture} />
		</View>
	)
}

export default Disc
