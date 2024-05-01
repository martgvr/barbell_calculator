import { Image, Modal, Pressable, StyleSheet, Text, View } from "react-native"

const InfoModal = ({ infoModalVisible, setInfoModalVisible }) => {
	return (
		<Modal animationType="none" transparent={true} visible={infoModalVisible} onRequestClose={() => setInfoModalVisible(!infoModalVisible)}>
			<View style={styles.centeredView}>
				<View style={styles.modalView}>
                    <Image style={styles.logo} source={require("../../assets/VPB.png")} />

					<View style={styles.textContainer}>
						<Text style={styles.title}>Información de la app</Text>
						<Text>
							Esta aplicación se halla en una fase inicial de desarrollo, caracterizada por el nivel temprano de conocimientos de su creador. Si bien no se concibe con la intención de
							adquirir una complejidad superior a la que ostenta en su estado actual, eventualmente, la misma podría recibir actualizaciones mínimas si fuese necesario.
						</Text>
					</View>

					<Pressable style={styles.button} onPress={() => setInfoModalVisible(!infoModalVisible)}>
						<Text style={styles.buttonText}>Cerrar</Text>
					</Pressable>
				</View>
			</View>
		</Modal>
	)
}

export default InfoModal

const styles = StyleSheet.create({
	centeredView: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	modalView: {
		gap: 30,
		width: "95%",
		padding: 30,
		borderRadius: 20,
		backgroundColor: "#ddd",
	},
	title: {
		fontSize: 16,
		marginBottom: 4,
		fontWeight: "bold",
	},
	button: {
		padding: 10,
		height: 40,
		width: 100,
		elevation: 2,
		borderRadius: 12,
		backgroundColor: "black",
        alignSelf: 'center',
	},
	buttonText: {
		color: "white",
		fontWeight: "bold",
		textAlign: "center",
	},
    logo: {
		height: 33,
        width: "70%",
        alignSelf: 'center',
    },
})
