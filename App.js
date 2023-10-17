import { useState } from 'react'
import store from './src/store/store'
import { Provider } from 'react-redux'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'

import Barbell from './src/components/Barbell'
import ConfigModal from './src/components/ConfigModal'
import MenuContainer from './src/components/MenuContainer';
import DiscsContainer from './src/components/DiscsContainer';
import ManualInputModal from './src/components/ManualInputModal'

export default function App() {
    const [modalVisible, setModalVisible] = useState(false)
    const [manualInputVisible, setManualInputVisible] = useState(false)

    return (
        <Provider store={store}>
            <View style={styles.container}>
                <StatusBar style="light" />
                <Barbell />
                <DiscsContainer />
                <MenuContainer setModalVisible={setModalVisible} setManualInputVisible={setManualInputVisible} />
                <ConfigModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
                <ManualInputModal manualInputVisible={manualInputVisible} setManualInputVisible={setManualInputVisible} />
            </View>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1c1c23',
    },
});