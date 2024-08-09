import { useState } from "react"
import { Picker } from "@react-native-picker/picker"
import { useDispatch, useSelector } from "react-redux"
import { StyleSheet, Text, View, Modal, Pressable, TextInput } from "react-native"
import { changeBarWeight, changeWeightUnit, manageWeightsAvailable, changeCollarState } from "../store/weightsListSlice"

import BouncyCheckbox from "react-native-bouncy-checkbox"

const ConfigModal = ({ configModalVisible, setConfigModalVisible }) => {
	const dispatch = useDispatch()
	const stateData = useSelector((state) => state.weights)
	const { barWeight, weightUnit, weightsAvailable, barCollar } = stateData

	const [selectedBarWeight, setSelectedBarWeight] = useState(barWeight)
	const [selectedWeightUnit, setSelectedWeightUnit] = useState(weightUnit)

	const saveConfigHandler = () => {
		dispatch(changeBarWeight(selectedBarWeight))
		dispatch(changeWeightUnit(selectedWeightUnit))
		setConfigModalVisible(!configModalVisible)
	}

	const checkboxProps = {
		size: 25,
		fillColor: "black",
		unFillColor: "#FFFFFF",
		style: { marginTop: 10 },
		innerIconStyle: { borderWidth: 2 },
		iconStyle: { borderColor: "black" },
		textStyle: { textDecorationLine: "none" },
	}

	return (
		<Modal animationType="none" transparent={true} visible={configModalVisible} onRequestClose={() => setConfigModalVisible(!configModalVisible)}>
			<View style={styles.centeredView}>
				<View style={styles.modalView}>
					<View style={styles.pickerContainer}>
						<Picker selectedValue={selectedWeightUnit} onValueChange={(itemValue, itemIndex) => setSelectedWeightUnit(itemValue)}>
							<Picker.Item label="Unidades métricas" value="kg" />
							<Picker.Item label="Unidades imperiales" value="lbs" />
						</Picker>
					</View>

					<View style={styles.weightSelection}>
						<Text style={styles.weightSelectionText}>Peso de la barra:</Text>
						<View>
							<TextInput style={styles.input} onChangeText={setSelectedBarWeight} value={String(selectedBarWeight)} keyboardType="numeric" maxLength={2} />
						</View>
						<Text>{selectedWeightUnit}</Text>
					</View>

					<View style={styles.checkboxContainer}>
						<Text style={styles.checkboxContainerTitle}>Discos disponibles</Text>

						<View style={styles.checkboxColumnsContainer}>

							{
								weightUnit == 'kg' &&
								<>
									<View style={styles.checkboxColumn}>
										{
											[25, 20, 15, 10].map((weightToDisplay, index) => <BouncyCheckbox key={index} {...checkboxProps} text={`${weightToDisplay} ${selectedWeightUnit}`} onPress={(isChecked) => dispatch(manageWeightsAvailable({ weight: weightToDisplay, state: isChecked }))} isChecked={weightsAvailable.find(weight => weight == weightToDisplay)} />)
										}
									</View>

									<View style={styles.checkboxColumn}>
										{
											[5, 2.5, 1.25].map((weightToDisplay, index) => <BouncyCheckbox key={index} {...checkboxProps} text={`${weightToDisplay} ${selectedWeightUnit}`} onPress={(isChecked) => dispatch(manageWeightsAvailable({ weight: weightToDisplay, state: isChecked }))} isChecked={weightsAvailable.find(weight => weight == weightToDisplay)} />)
										}

										<BouncyCheckbox {...checkboxProps} text={`Cierres metálicos`} onPress={(isChecked) => dispatch(changeCollarState(!barCollar))} isChecked={barCollar} />
									</View>
								</>
							}

							{
								weightUnit == 'lbs' &&
									<>
										<View style={styles.checkboxColumn}>
											{
												[55, 45, 35, 25].map((weightToDisplay, index) => <BouncyCheckbox key={index} {...checkboxProps} text={`${weightToDisplay} ${selectedWeightUnit}`} onPress={(isChecked) => dispatch(manageWeightsAvailable({ weight: weightToDisplay, state: isChecked }))} isChecked={weightsAvailable.find(weight => weight == weightToDisplay)} />)
											}
										</View>

										<View style={styles.checkboxColumn}>
											{
												[10, 5, 2.5].map((weightToDisplay, index) => <BouncyCheckbox key={index} {...checkboxProps} text={`${weightToDisplay} ${selectedWeightUnit}`} onPress={(isChecked) => dispatch(manageWeightsAvailable({ weight: weightToDisplay, state: isChecked }))} isChecked={weightsAvailable.find(weight => weight == weightToDisplay)} />)
											}

											<BouncyCheckbox {...checkboxProps} text={`Cierres metálicos`} onPress={(isChecked) => dispatch(changeCollarState(!barCollar))} isChecked={barCollar} />
										</View>
									</>
							}

						</View>
					</View>


					<View style={styles.modalButtons}>
						<Pressable style={[styles.button, styles.buttonClose]} onPress={() => setConfigModalVisible(!configModalVisible)}>
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
		width: 290,
		height: 50,
		marginTop: 10,
		borderWidth: 1,
		borderRadius: 10,
		borderColor: "#aaa",
		backgroundColor: "#eee",
	},
	checkboxContainer: {
		width: 290,
		padding: 10,
		borderWidth: 1,
		borderRadius: 10,
		borderColor: "#aaa",
		backgroundColor: "#eee",
	},
	checkboxContainerTitle: {
		marginBottom: 4,
	},
	checkboxColumnsContainer: {
		flexDirection: "row",
	},
	checkboxColumn: {
		flex: 1,
	},
	weightSelection: {
		gap: 2,
		width: 290,
		marginTop: 10,
		marginBottom: 10,
		alignItems: "center",
		flexDirection: "row",
		justifyContent: "space-between",
	},
	weightSelectionText: {
		width: 70,
		textAlign: "right",
	},
	input: {
		width: 190,
		height: 50,
		borderWidth: 1,
		borderRadius: 10,
		borderColor: "#aaa",
		backgroundColor: "#eee",
		textAlign: "center",
	},
	centeredView: {
		flex: 1,
		alignItems: "center",
		justifyContent: "flex-end",
	},
	modalView: {
		backgroundColor: "#ddd",
		alignItems: "center",
		padding: 20,
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
		// fontWeight: "bold",
		textAlign: "center",
	},
	modalText: {
		marginBottom: 15,
		textAlign: "center",
	},
})
