import React from 'react'
import {TextInput} from 'react-native'

import styles from './styles'

interface Props {
  value: string
  onChange: (value: string) => void
  placeholder: string
}

function Input({value, onChange, placeholder}: Props) {
  return (
    <TextInput
      value={value}
      onChangeText={onChange}
      style={styles.container}
      placeholder={placeholder}
      placeholderTextColor="grey"
    />
  )
}

export default Input
