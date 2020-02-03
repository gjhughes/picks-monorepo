import {StyleSheet, ViewStyle} from 'react-native'

import {colors} from '../../theme'

interface Styles {
  safeArea: ViewStyle
  keyboardAvoiding: ViewStyle
  container: ViewStyle
  scrollView: ViewStyle
  button: ViewStyle
  input: ViewStyle
  buttonContainer: ViewStyle
}

export default StyleSheet.create<Styles>({
  safeArea: {
    flex: 1
  },
  keyboardAvoiding: {
    height: '100%',
    paddingTop: 24,
    paddingHorizontal: 24
  },
  scrollView: {
    flex: 1,
    height: '100%',
    paddingTop: 8,
    paddingHorizontal: 12
  },
  container: {
    flex: 1,
    justifyContent: 'space-between'
  },
  input: {
    paddingVertical: 0,
    backgroundColor: colors.white
  },
  buttonContainer: {
    paddingHorizontal: 12,
    paddingBottom: 8
  },
  button: {
    width: '100%',
    paddingVertical: 8
  }
})
