import { useState } from "react"
import { useDispatch } from "react-redux"
import { manualInputCalc } from "../store/weightsListSlice"
import { StyleSheet, Text, View, Modal, Pressable, TextInput } from "react-native"

const ManualInputModal = ({ manualInputVisible, setManualInputVisible }) => {
	const dispatch = useDispatch()
	const [weightToCalc, setWeightToCalc] = useState(0)

	const saveConfigHandler = () => {
        setManualInputVisible(false)
        dispatch(manualInputCalc(weightToCalc))
	}

	return (
		<Modal animationType="none" transparent={true} visible={manualInputVisible} onRequestClose={() => setManualInputVisible(false)}>
			<View style={styles.centeredView}>
				<View style={styles.modalView}>
					<Text style={styles.modalTitle}>Ingrese el peso de forma manual</Text>

					<TextInput style={styles.input} onChangeText={setWeightToCalc} keyboardType="numeric" placeholder="0" maxLength={3} />

					<View style={styles.modalButtons}>
						<Pressable style={[styles.button, styles.buttonClose]} onPress={() => setManualInputVisible(false)}>
							<Text style={styles.textStyle}>Cancelar</Text>
						</Pressable>

						<Pressable style={[styles.button, styles.buttonDone]} onPress={saveConfigHandler}>
							<Text style={styles.textStyle}>Guardar</Text>
						</Pressable>
					</View>
				</View>
			</View>
		</Modal>
	)
}

export default ManualInputModal

const styles = StyleSheet.create({
	centeredView: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	modalView: {
		width: "70%",
		padding: 15,
		borderRadius: 20,
		alignItems: "center",
		backgroundColor: "#ddd",

        shadowColor: "#000",        
        elevation: 10,
	},
	modalButtons: {
		gap: 12,
		width: "100%",
		marginTop: 20,
		flexDirection: "row",
		justifyContent: "space-between",
	},
	button: {
		width: 100,
		height: 40,
		padding: 10,
		elevation: 2,
		borderRadius: 12,
	},
	buttonClose: {
		backgroundColor: "black",
	},
	buttonDone: {
		backgroundColor: "green",
	},
	textStyle: {
		color: "white",
		fontWeight: "bold",
		textAlign: "center",
	},
	input: {
		width: "100%",
		height: 50,
		borderWidth: 1,
		borderRadius: 10,
		textAlign: "center",
		borderColor: "#aaa",
		backgroundColor: "#eee",
	},
	modalTitle: {
		marginBottom: 20,
		fontSize: 16,
	},
})
