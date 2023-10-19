import { useSelector } from "react-redux"
import { StyleSheet, Text, View, Modal, Pressable } from "react-native"

const ListModal = ({ listModalVisible, setListModalVisible }) => {
	const stateData = useSelector((state) => state.weights)
	const { weightsList, weightUnit } = stateData

	function formatWeights(weightsList) {
		const counts = {}
		weightsList.forEach((weight) => {
			counts[weight] = (counts[weight] || 0) + 1
		})

		const formattedWeights = Object.entries(counts).map(([weight, count]) => {
			return `${count} x ${weight} ${weightUnit}`
		})

		return formattedWeights
	}

	return (
		<Modal animationType="none" transparent={true} visible={listModalVisible} onRequestClose={() => setListModalVisible(!listModalVisible)}>
			<View style={styles.centeredView}>
				<View style={styles.modalView}>
					<Text style={styles.title}>Lista de discos</Text>

					{
						weightsList.length === 0 ? 
							<Text>No hay discos</Text> 
							:
							formatWeights(weightsList).map((formattedWeight, index) => 
								<Text key={index} style={styles.discText}>{formattedWeight}</Text>
							)
					}

					<View style={styles.modalButtons}>
						<Pressable style={[styles.button, styles.buttonClose]} onPress={() => setListModalVisible(!listModalVisible)}>
							<Text style={styles.buttonText}>Cerrar</Text>
						</Pressable>
					</View>
				</View>
			</View>
		</Modal>
	)
}

export default ListModal

const styles = StyleSheet.create({
	centeredView: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	modalView: {
		borderRadius: 20,
		paddingVertical: 30,
		paddingHorizontal: 60,
		alignItems: 'center',
		backgroundColor: "#ddd",
	},
	modalButtons: {
		gap: 12,
		marginTop: 30,
		flexDirection: "row",
		justifyContent: "space-between",
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
	buttonText: {
		color: "white",
		fontWeight: "bold",
		textAlign: "center",
	},
	title: {
		fontSize: 18,
		fontWeight: 'bold',
		marginBottom: 30,
	},
	discText: {
		fontSize: 18,
	},
})
