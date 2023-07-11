import React from "react"
import { StyleSheet, Text, View, Modal, Pressable } from "react-native"

const ConfigModal = ({ modalVisible, setModalVisible }) => {
    const saveConfigHandler = () => {
        console.log('OK');
    }

	return (
		<Modal animationType="none" transparent={true} visible={modalVisible} onRequestClose={() => setModalVisible(!modalVisible)}>
			<View style={styles.centeredView}>
				<View style={styles.modalView}>
					<Text>Hola</Text>
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
	centeredView: {
		flex: 1,
		alignItems: "center",
		justifyContent: "flex-end",
	},
    modalView: {
		backgroundColor: "#ddd",
		alignItems: "center",
		padding: 15,
		width: '90%',
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
