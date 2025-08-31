import React, { useRef } from "react"
import { View, Button, Alert } from "react-native"
import { Svg, Rect, Text } from "react-native-svg"
import { captureRef } from "react-native-view-shot"
import * as MediaLibrary from "expo-media-library"

// Conversión kg → lb
const kgToLb = (kg) => (kg * 2.20462).toFixed(1)

// === Componente de la barra y discos ===
function BarbellImage({ plates, totalWeight }) {
	const barY = 80
	const barStartX = 20 // inicio de la barra
	const plateThickness = 16
	const plateHeight = 80
	const plateSpacing = 3

    const svgHeight = 130
    const svgWidth = 35 + (plates.length * 19) + 17

	// Colores típicos IWF
	const getPlateColor = (p) => {
		if (p === 25) return "red"
		if (p === 20) return "#4b91e2"
		if (p === 15) return "yellow"
		if (p === 10) return "#31b008"
		if (p === 5) return "white"
		if (p === 2.5) return "black"
		return "gray"
	}

	// Calcular posiciones de los discos
	let offset = 0

	const renderedPlates = plates.map((p, i) => {
		const x = barStartX + 15 + offset // un poco separado del inicio gris
		offset += plateThickness + plateSpacing
		return {
			weight: p,
			x,
			color: getPlateColor(p),
			label: i + 1,
		}
	})

	return (
		<Svg height={svgHeight} width={svgWidth} style={{ backgroundColor: "#3333339f" }}>

			{/* Texto peso total */}
			<Rect x={0} y={0} width="100%" height="30" fill="black" />

			<Text x="10" y="20" fontSize="14" fontWeight="bold" fill="white">
				{totalWeight} kg / {kgToLb(totalWeight)} lb
			</Text>

			{/* Rectángulo gris (inicio de barra) */}
			<Rect x={barStartX - plateSpacing - 1} y={barY - plateHeight / 5} width={plateThickness} height={30} fill="gray" />

			{/* Discos */}
			{renderedPlates.map((plate, i) => (
				<React.Fragment key={i}>
					<Rect x={plate.x} y={barY - plateHeight / 2} width={plateThickness} height={plate.weight == 15 ? plateHeight - 10 : plateHeight} fill={plate.color} />
					<Text x={plate.x + plateThickness / 2} y={barY} fontSize="10" fontWeight="bold" textAnchor="middle" fill={plate.weight == 5 ? "black" : "white"}>
						{plate.weight}
					</Text>
					<Text x={plate.x + plateThickness / 2} y={barY + 15} fontSize="8" textAnchor="middle" fill={plate.weight == 5 ? "black" : "white"}>
						{plate.label}
					</Text>
				</React.Fragment>
			))}
		</Svg>
	)
}

// === App principal con botón para exportar ===
export default function App() {
	const viewRef = useRef()

	const saveToGallery = async () => {
		try {
			// pedir permisos
			const { status } = await MediaLibrary.requestPermissionsAsync()
			if (status !== "granted") {
				Alert.alert("Permiso denegado", "Necesito acceso a tu galería para guardar la imagen")
				return
			}

			// capturar vista
			const uri = await captureRef(viewRef, {
				format: "png",
				quality: 1,
			})

			// guardar en galería
			await MediaLibrary.saveToLibraryAsync(uri)

			Alert.alert("Éxito", "Imagen guardada en tu galería 📸")
		} catch (err) {
			console.error(err)
			Alert.alert("Error", "No se pudo guardar la imagen")
		}
	}

	return (
		<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
			{/* Vista a capturar */}
			<View ref={viewRef} collapsable={false}>
				<BarbellImage plates={[20, 20, 20, 20, 15, 10, 2.5]} totalWeight={210} />
			</View>

			<Button title="Guardar como PNG" onPress={saveToGallery} />
		</View>
	)
}
