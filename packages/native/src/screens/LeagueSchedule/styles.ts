import {StyleSheet, ViewStyle, ImageStyle} from 'react-native'

interface Styles {
  container: ViewStyle
  icon: ImageStyle
  loading: ViewStyle
}

export default StyleSheet.create<Styles>({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  icon: {
    marginRight: 15
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
