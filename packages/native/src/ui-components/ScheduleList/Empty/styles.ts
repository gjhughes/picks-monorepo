import {StyleSheet, ViewStyle, TextStyle} from 'react-native'

interface Styles {
  container: ViewStyle
  subHeading: TextStyle
}

export default StyleSheet.create<Styles>({
  container: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  subHeading: {
    textAlign: 'center'
  }
})
