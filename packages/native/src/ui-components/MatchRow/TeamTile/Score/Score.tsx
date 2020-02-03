import React from 'react'
import {Subheading} from 'react-native-paper'
import {View} from 'react-native'

import styles from './styles'

interface Props {
  score: number | null
}

function Score({score}: Props) {
  return (
    <View style={styles.container}>
      <Subheading style={styles.text}>{score}</Subheading>
    </View>
  )
}

export default Score
