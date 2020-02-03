import React from 'react'
import {Text} from 'react-native'

import styles from './styles'

interface Props {
  label: string
}

function Label({label}: Props) {
  return <Text style={styles.text}>{label}</Text>
}

export default Label
