import {StyleSheet, ViewStyle, TextStyle} from 'react-native'

import {layout} from '../../theme'

interface Styles {
  container: ViewStyle
  atContainer: ViewStyle
  text: TextStyle
  loadingText: TextStyle
}

export default StyleSheet.create<Styles>({
  container: {
    flexDirection: 'row',
    marginBottom: layout.margin,
    borderRadius: layout.borderRadius,
    elevation: layout.elevation
  },
  atContainer: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 20
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 28
  },
  loadingText: {
    opacity: 0.4
  }
})
