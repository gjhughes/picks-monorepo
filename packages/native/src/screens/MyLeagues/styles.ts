import {StyleSheet, ViewStyle} from 'react-native'

interface Styles {
  list: ViewStyle
  load: ViewStyle
  listFooter: ViewStyle
}

export default StyleSheet.create<Styles>({
  list: {
    height: '100%',
    paddingVertical: 12,
    paddingHorizontal: 12
  },
  load: {
    flex: 1
  },
  listFooter: {
    height: 125
  }
})
