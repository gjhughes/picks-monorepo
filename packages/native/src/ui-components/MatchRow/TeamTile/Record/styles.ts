import {StyleSheet, TextStyle} from 'react-native'

interface Styles {
  text: TextStyle
}

export default StyleSheet.create<Styles>({
  text: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold'
  }
})
