import React from 'react'
import {View} from 'react-native'
import {Headline, Subheading} from 'react-native-paper'

import styles from './styles'

function Empty() {
  return (
    <View style={styles.container}>
      <Headline>Nothing to see here yet</Headline>
      <Subheading style={styles.subHeading}>
        This weeks games(s) will be shown here once the previous weeks games
        have concluded.
      </Subheading>
    </View>
  )
}

export default Empty
