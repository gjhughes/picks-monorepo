import {StyleSheet, ViewStyle} from 'react-native'

import {layout} from '../../theme'

interface Styles {
  container: ViewStyle
}

export default StyleSheet.create<Styles>({
  container: {
    marginBottom: layout.margin,
    borderRadius: layout.borderRadius,
    elevation: layout.elevation
  }
})
