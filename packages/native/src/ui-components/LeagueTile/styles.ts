import {StyleSheet, ViewStyle, TextStyle} from 'react-native'

import {colors} from '../../theme'

interface Styles {
  container: ViewStyle
  actions: ViewStyle
  headline: TextStyle
  chipContainer: ViewStyle
  chip: ViewStyle
  actionsContainer: ViewStyle
}

export default StyleSheet.create<Styles>({
  container: {
    elevation: 4,
    borderRadius: 10,
    marginBottom: 12
  },
  actions: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  headline: {
    textAlign: 'center',
    color: colors.nfl.primary
  },
  chipContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 8
  },
  chip: {
    marginRight: 8
  },
  actionsContainer: {
    height: 50
  }
})
