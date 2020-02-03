import React from 'react'
import {TouchableOpacity, Text, ActivityIndicator} from 'react-native'

import styles from './styles'

interface Props {
  onPress: () => void
  title: string
  loading: boolean
}

function MenuButton({onPress, title, loading}: Props) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      {loading ? (
        <ActivityIndicator color="white" size="small" />
      ) : (
        <Text style={styles.text}>{title}</Text>
      )}
    </TouchableOpacity>
  )
}

export default MenuButton
