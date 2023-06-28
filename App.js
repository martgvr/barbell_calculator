import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Barbell from './src/components/Barbell';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Barbell />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});