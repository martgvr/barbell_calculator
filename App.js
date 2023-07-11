import { useState } from 'react'
import store from './src/store/store'
import { Provider } from 'react-redux'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'

import Barbell from './src/components/Barbell'
import MenuContainer from './src/components/MenuContainer';
import DiscsContainer from './src/components/DiscsContainer';
import ConfigModal from './src/components/ConfigModal'

export default function App() {
  const [modalVisible, setModalVisible] = useState(false)

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <StatusBar style="light" />
        <Barbell />
        <DiscsContainer />
        <MenuContainer setModalVisible={setModalVisible} />
        <ConfigModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c23',
    alignItems: 'center',
    justifyContent: 'center',
  },
});