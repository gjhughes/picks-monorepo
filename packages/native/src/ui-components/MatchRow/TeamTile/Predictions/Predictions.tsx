import React from 'react'
import {View, Text} from 'react-native'

import styles from './styles'

interface Props {
  predictions: any
  gameKey: string
  teamId: number
}

function Predictions({predictions, teamId}: Props) {
  return (
    <View style={styles.container}>
      {predictions ? (
        <Text style={styles.text}>
          {predictions.predictedWinner === teamId ? 'WIN' : 'LOSE'}
        </Text>
      ) : null}
    </View>
  )
}

export default Predictions
