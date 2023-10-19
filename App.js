import { useState } from 'react'
import { Provider } from 'react-redux'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'

import store from './src/store/store'

import Barbell from './src/components/Barbell'
import ListModal from './src/components/ListModal'
import ConfigModal from './src/components/ConfigModal'
import DiscsContainer from './src/components/DiscsContainer'
import ManualInputModal from './src/components/ManualInputModal'

import MainMenu from './src/components/MainMenu'

export default function App() {
    const [listModalVisible, setListModalVisible] = useState(false)
    const [configModalVisible, setConfigModalVisible] = useState(false)
    const [manualInputVisible, setManualInputVisible] = useState(false)

    return (
        <Provider store={store}>
            <View style={styles.container}>
                <StatusBar style="light" />
                <Barbell />
                <DiscsContainer />
                <ConfigModal configModalVisible={configModalVisible} setConfigModalVisible={setConfigModalVisible} />
                <ListModal listModalVisible={listModalVisible} setListModalVisible={setListModalVisible} />
                <ManualInputModal manualInputVisible={manualInputVisible} setManualInputVisible={setManualInputVisible} />
                <MainMenu setConfigModalVisible={setConfigModalVisible} setManualInputVisible={setManualInputVisible} setListModalVisible={setListModalVisible} />
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