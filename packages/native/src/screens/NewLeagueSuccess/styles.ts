import {StyleSheet, ViewStyle, TextStyle} from 'react-native'

import {colors} from '../../theme'

interface Styles {
  scrollView: ViewStyle
  snack: ViewStyle
  text: TextStyle
  textContainer: ViewStyle
}

export default StyleSheet.create<Styles>({
  scrollView: {
    paddingHorizontal: 12,
    paddingTop: 8,
    height: '100%'
  },
  snack: {
    justifyContent: 'flex-end',
    flex: 1
  },
  textContainer: {
    paddingHorizontal: 8,
    paddingBottom: 8
  },
  text: {
    textAlign: 'center',
    color: colors.nfl.primary
  }
})
