import {StyleSheet} from 'react-native'

import {colors, layout} from '../../theme'

export default StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: colors.nfl.primary,
    ...layout.shadow,
    position: 'absolute',
    top: 0
  }
})
