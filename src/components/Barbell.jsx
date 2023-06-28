import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const Barbell = () => {
  return (
    <View style={styles.barbellContainer}>
        <Image
            style={styles.tinyLogo}
            source={require('../../assets/barbell.png')}
        />
    </View>
  )
}

export default Barbell

const styles = StyleSheet.create({
    tinyLogo: {
        width: '90%',
        height: 50,
    },
    barbellContainer: {
        backgroundColor: 'red',
        width: '100%',
        height: '100%',
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
})