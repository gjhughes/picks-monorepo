import React from 'react'
import {View, Text} from 'react-native'

import styles from './styles'

import {Input} from './Input'
import {Label} from './Label'

interface Props {
  onChange(value: string): void
  value: string
  error?: {
    message: string
  }
  label: string
  placeholder: string
}

function FormInput({onChange, value, error, label, placeholder}: Props) {
  return (
    <View style={styles.container}>
      <Label label={label} />
      {error && <Text style={styles.errorText}>{error.message}</Text>}
      <Input onChange={onChange} value={value} placeholder={placeholder} />
    </View>
  )
}

export default FormInput
