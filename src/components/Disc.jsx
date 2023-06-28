import React, { useState, useEffect } from "react"
import { StyleSheet, View, Image } from "react-native"

const Disc = ({ weight }) => {
    const [picture, setPicture] = useState()
    const [discHeight, setDiscHeight] = useState(550)
    
    const styles = StyleSheet.create({
        disc: {
            width: 15,
            height: discHeight,
        },
    })

    useEffect(() => {
        if (weight == '25') { setPicture(require("../../assets/25kg.png")) }
        if (weight == '20') { setPicture(require("../../assets/20kg.png")) }
        if (weight == '15') {
            setPicture(require("../../assets/15kg.png"))
            setDiscHeight(500)
        }
        if (weight == '10') { 
            setPicture(require("../../assets/10kg.png")) 
            setDiscHeight(400)
        }
        if (weight == '5') { 
            setPicture(require("../../assets/5kg.png")) 
            setDiscHeight(300)
        }
        if (weight == '2.5') { 
            setPicture(require("../../assets/2-5kg.png")) 
            setDiscHeight(200)
        }
        if (weight == '1.25') { 
            setPicture(require("../../assets/1-25kg.png")) 
            setDiscHeight(150)
        }
    }, [])

	return (
		<View>
			<Image style={styles.disc} source={picture} resizeMode='cover' />
		</View>
	)
}

export default Disc
