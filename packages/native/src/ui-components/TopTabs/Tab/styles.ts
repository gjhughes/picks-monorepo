import {StyleSheet, ViewStyle, TextStyle} from 'react-native'

interface Styles {
  container: ViewStyle
  text: TextStyle
}

export default StyleSheet.create<Styles>({
  container: {
    width: 120,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'white'
  }
})
