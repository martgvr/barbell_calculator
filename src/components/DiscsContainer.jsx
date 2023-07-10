import React from 'react'
import { StyleSheet, View } from 'react-native'
import Disc from './Disc'

const DiscsContainer = () => {
  return (
    <View style={styles.discsContainer}>
        <Disc weight={'1.25'} />
        <Disc weight={'2.5'} />
        <Disc weight={'5'} />
        <Disc weight={'10'} />
        <Disc weight={'15'} />
        <Disc weight={'20'} />
        <Disc weight={'25'} />
        <Disc weight={'25'} />
    </View>
  )
}

export default DiscsContainer

const styles = StyleSheet.create({
    discsContainer: {
        gap: 1.4,
        width: '64%',
        height: '80%',
        position: 'absolute',
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-start',
        justifyContent: 'flex-end',
        paddingTop: 50,
    }
})