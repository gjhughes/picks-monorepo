import React from 'react'
import {View} from 'react-native'
import {Headline, Subheading} from 'react-native-paper'

import styles from './styles'

function EmptyLeagueList() {
  return (
    <View>
      <Headline style={styles.text}>No leagues to display yet</Headline>
      <Subheading style={styles.text}>
        Leagues that you have created or joined will show here
      </Subheading>
    </View>
  )
}

export default EmptyLeagueList
