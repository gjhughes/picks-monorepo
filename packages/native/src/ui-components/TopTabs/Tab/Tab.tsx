import React from 'react'
import {TouchableOpacity, Text} from 'react-native'

import styles from './styles'

interface Props {
  week: string
  tabIndex: number
  onPress(): void
  isActive: boolean
}

function Tab({week, onPress, isActive}: Props) {
  const opacity = isActive ? 1 : 0.4
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={[styles.text, {opacity}]}>{week}</Text>
    </TouchableOpacity>
  )
}

export default Tab
