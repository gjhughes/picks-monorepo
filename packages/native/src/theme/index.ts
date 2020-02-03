import {DefaultTheme} from 'react-native-paper'

import colors from './colors'
import layout from './layout'

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.nfl.primary,
    accent: colors.white
  }
}

export {layout, colors}

export default theme
