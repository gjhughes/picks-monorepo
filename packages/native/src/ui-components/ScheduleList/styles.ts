import {StyleSheet, ViewStyle} from 'react-native'

import {layout} from '../../theme'

interface Styles {
  container: ViewStyle
  contentContainer: ViewStyle
}

export default StyleSheet.create<Styles>({
  container: {
    height: '100%',
    width: '100%',
    paddingTop: layout.padding,
    paddingBottom: 100,
    marginTop: 50,
    paddingHorizontal: layout.padding
  },
  contentContainer: {
    overflow: 'hidden',
    flexGrow: 1
  }
})
