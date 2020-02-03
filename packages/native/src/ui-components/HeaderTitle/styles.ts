import {StyleSheet, TextStyle} from 'react-native'

import colors from '../../theme/colors'

interface Styles {
  title: TextStyle
}

export default StyleSheet.create<Styles>({
  title: {
    color: colors.white,
    fontWeight: 'bold'
  }
})
