import {StyleSheet, ViewStyle, TextStyle} from 'react-native'

import {layout} from '../../theme'

interface Styles {
  container: ViewStyle
  activityIndicator: ViewStyle
  titleText: TextStyle
}

export default StyleSheet.create<Styles>({
  container: {
    paddingTop: layout.padding,
    paddingHorizontal: layout.padding
  },
  activityIndicator: {
    flex: 1
  },
  titleText: {
    paddingBottom: 10
  }
})
