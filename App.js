import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'

import Barbell from './src/components/Barbell'
import DiscsContainer from './src/components/DiscsContainer';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Barbell />
      <DiscsContainer />
    </View>
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