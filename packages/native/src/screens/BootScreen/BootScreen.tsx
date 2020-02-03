import React from 'react'
import {ActivityIndicator, SafeAreaView, Text} from 'react-native'

import styles from './styles'

function BootScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Loading...</Text>
      <ActivityIndicator size="large" style={styles.loader} />
    </SafeAreaView>
  )
}

export default BootScreen
