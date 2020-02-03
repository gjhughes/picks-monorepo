import {StyleSheet, ViewStyle} from 'react-native'

import {colors} from '../../theme'

interface Styles {
  cardContent: ViewStyle
  cardActions: ViewStyle
  headline: ViewStyle
  subtitle: ViewStyle
}

export default StyleSheet.create<Styles>({
  cardContent: {
    alignItems: 'center'
  },
  cardActions: {
    justifyContent: 'flex-end'
  },
  headline: {
    fontWeight: 'bold',
    color: colors.nfl.primary
  },
  subtitle: {
    color: colors.nfl.primary
  }
})
