import {StyleSheet, ViewStyle} from 'react-native'
import colors from '../../theme/colors'

interface Styles {
  container: ViewStyle
  scrollView: ViewStyle
  input: ViewStyle
  button: ViewStyle
  title: ViewStyle
  buttonWrapper: ViewStyle
  scrollViewContainer: ViewStyle
}

export default StyleSheet.create<Styles>({
  container: {
    flex: 1
  },
  scrollView: {
    paddingHorizontal: 16,
    height: '100%'
  },
  scrollViewContainer: {
    flexGrow: 1
  },
  input: {
    paddingVertical: 10,
    borderColor: 'red'
  },
  button: {
    paddingVertical: 10,
    marginTop: 10
  },
  title: {
    fontWeight: 'bold',
    color: colors.white
  },
  buttonWrapper: {
    flexGrow: 1,
    paddingHorizontal: 16,
    justifyContent: 'flex-end'
  }
})
