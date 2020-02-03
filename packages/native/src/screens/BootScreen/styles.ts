import {StyleSheet} from 'react-native'

import colors from '../../theme/colors'

export default StyleSheet.create({
  container: {
    backgroundColor: colors.nfl.primary,
    flex: 1,
    justifyContent: 'center'
  },
  text: {
    textAlign: 'center',
    color: 'white',
    fontSize: 38,
    fontWeight: 'bold'
  },
  loader: {
    position: 'absolute',
    bottom: 40,
    alignSelf: 'center'
  }
})
