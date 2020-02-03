import React from 'react'
import {View} from 'react-native'
import {Paragraph} from 'react-native-paper'

import styles from './styles'

interface Props {
  wins: number
  losses: number
  ties: number
}

function Record({wins, losses, ties}: Props) {
  return (
    <View>
      <Paragraph style={styles.text}>
        ({wins}:{losses}
        {ties > 0 && `:${ties}`})
      </Paragraph>
    </View>
  )
}

export default Record
