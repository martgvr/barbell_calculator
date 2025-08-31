import { Provider } from 'react-redux'
import { StatusBar } from 'expo-status-bar'
import { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'

import store from './src/store/store'

import Barbell from './src/components/Barbell'
import ListModal from './src/components/ListModal'
import ConfigModal from './src/components/ConfigModal'
import DiscsContainer from './src/components/DiscsContainer'
import ManualInputModal from './src/components/ManualInputModal'

import MainMenu from './src/components/MainMenu'
import InfoModal from './src/components/InfoModal'

import * as SQLite from 'expo-sqlite'
import { appConfigDB } from './src/database/sqlite.config'
import BarbellImage from './src/components/BarbellImage'

const db = SQLite.openDatabaseSync("./mydb.db")

export default function App() {
    const [listModalVisible, setListModalVisible] = useState(false)
    const [infoModalVisible, setInfoModalVisible] = useState(false)
    const [configModalVisible, setConfigModalVisible] = useState(false)
    const [manualInputVisible, setManualInputVisible] = useState(false)

    useEffect(() => {
        // appConfigDB.init()
        // appConfigDB.getAll()
    }, [])

    return (
        <Provider store={store}>
            <View style={styles.container}>
                <StatusBar style="light" />
                <BarbellImage
                    plates={[20,20,20,20,10,5]}
                    totalWeight={210}
                />
                {/* <Barbell />
                <DiscsContainer />
                <ListModal listModalVisible={listModalVisible} setListModalVisible={setListModalVisible} />
                <ConfigModal configModalVisible={configModalVisible} setConfigModalVisible={setConfigModalVisible} />
                <ManualInputModal manualInputVisible={manualInputVisible} setManualInputVisible={setManualInputVisible} />
                <MainMenu setConfigModalVisible={setConfigModalVisible} setManualInputVisible={setManualInputVisible} setListModalVisible={setListModalVisible} setInfoModalVisible={setInfoModalVisible} />
                <InfoModal infoModalVisible={infoModalVisible} setInfoModalVisible={setInfoModalVisible} /> */}
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