import {StyleSheet} from 'react-native'

import {colors} from '../../theme'

export default StyleSheet.create({
  safeArea: {
    flex: 1
  },
  container: {
    flex: 1,
    paddingHorizontal: 12,
    paddingTop: 8,
    height: '100%'
  },
  text: {
    textAlign: 'center',
    color: colors.nfl.primary
  },
  input: {
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
