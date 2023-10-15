import { useState } from "react"
import { Picker } from "@react-native-picker/picker"
import { useDispatch, useSelector } from "react-redux"
import { StyleSheet, Text, View, Modal, Pressable, TextInput } from "react-native"
import { changeBarWeight, changeWeightUnit, changeDiscsType } from "../store/weightsListSlice"

const ConfigModal = ({ modalVisible, setModalVisible }) => {
	const dispatch = useDispatch()
	const stateData = useSelector((state) => state.weights)
	const { barWeight, weightUnit, discsType } = stateData

	const [selectedBarWeight, setSelectedBarWeight] = useState(barWeight)
	const [selectedDiscsType, setSelectedDiscsType] = useState(discsType)
	const [selectedWeightUnit, setSelectedWeightUnit] = useState(weightUnit)

	const saveConfigHandler = () => {
		dispatch(changeBarWeight(selectedBarWeight))
		dispatch(changeDiscsType(selectedDiscsType))
		dispatch(changeWeightUnit(selectedWeightUnit))

		setModalVisible(!modalVisible)
	}

	return (
		<Modal animationType="none" transparent={true} visible={modalVisible} onRequestClose={() => setModalVisible(!modalVisible)}>
			<View style={styles.centeredView}>
				<View style={styles.modalView}>
					<View style={styles.weightSelection}>
						<Text style={styles.weightSelectionText}>Peso de la barra:</Text>
						<View >
							<TextInput style={styles.input} onChangeText={setSelectedBarWeight} value={String(selectedBarWeight)} keyboardType="numeric" />
						</View>
					</View>
					<View style={styles.pickerContainer}>
						<Picker selectedValue={selectedDiscsType} onValueChange={(itemValue, itemIndex) => setSelectedDiscsType(itemValue)}>
							<Picker.Item label="Discos calibrados (max 25 kg)" value="calibrated" />
							<Picker.Item label="Discos regulares (max 20 kg)" value="regular" />
						</Picker>
					</View>
					<View style={styles.pickerContainer}>
						<Picker selectedValue={selectedWeightUnit} onValueChange={(itemValue, itemIndex) => setSelectedWeightUnit(itemValue)}>
							<Picker.Item label="Unidades métricas" value="metric" />
							<Picker.Item label="Unidades imperiales" value="imperial" />
						</Picker>
					</View>

					<View style={styles.modalButtons}>
						<Pressable style={[styles.button, styles.buttonClose]} onPress={() => setModalVisible(!modalVisible)}>
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

export default ConfigModal

const styles = StyleSheet.create({
	pickerContainer: {
		width: 280,
		height: 50,
		marginTop: 10,
		borderWidth: 1,
		borderRadius: 10,
		borderColor: "#aaa",
		backgroundColor: "#eee",
	},
	weightSelection: {
		width: 280,
		marginTop: 10,
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	weightSelectionText: {
		width: 70,
		textAlign: 'right'
	},
	input: {
		width: 190,
		height: 50,
		borderWidth: 1,
		borderRadius: 10,
		borderColor: "#aaa",
		backgroundColor: "#eee",
		textAlign: 'center'
	},
	centeredView: {
		flex: 1,
		alignItems: "center",
		justifyContent: "flex-end",
	},
	modalView: {
		backgroundColor: "#ddd",
		alignItems: "center",
		padding: 15,
		width: "90%",
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
	},
	button: {
		padding: 10,
		height: 40,
		width: 100,
		elevation: 2,
		borderRadius: 12,
	},
	buttonClose: {
		backgroundColor: "black",
	},
	buttonDone: {
		backgroundColor: "green",
	},
	modalButtons: {
		flexDirection: "row",
		gap: 12,
		width: 280,
		justifyContent: "space-between",
		marginTop: 20,
	},
	textStyle: {
		color: "white",
		fontWeight: "bold",
		textAlign: "center",
	},
	modalText: {
		marginBottom: 15,
		textAlign: "center",
	},
})
