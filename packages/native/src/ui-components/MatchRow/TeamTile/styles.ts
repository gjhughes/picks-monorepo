import {StyleSheet, ViewStyle} from 'react-native'

import {layout, colors} from '../../../theme'

interface Styles {}

const homeBorderRadius = {
  borderTopRightRadius: layout.borderRadius,
  borderBottomRightRadius: layout.borderRadius,
  borderTopLeftRadius: 0,
  borderBottomLeftRadius: 0
}

const awayBorderRadius = {
  borderBottomLeftRadius: layout.borderRadius,
  borderTopLeftRadius: layout.borderRadius,
  borderBottomRightRadius: 0,
  borderTopRightRadius: 0
}

const getContainerStyles = (isHomeTeam: boolean) => {
  const borderRadius = isHomeTeam ? homeBorderRadius : awayBorderRadius
  const baseStyles: ViewStyle = {
    flex: 1,
    height: 110,
    overflow: 'hidden',
    justifyContent: 'center',
    ...borderRadius
  }
  return baseStyles
}

export default (isHomeTeam: boolean = false) => {
  return StyleSheet.create({
    container: getContainerStyles(isHomeTeam),
    footer: {
      position: 'absolute',
      height: 30,
      width: '100%',
      bottom: 0
    },
    innerContainer: {
      paddingTop: 5,
      justifyContent: 'space-around',
      paddingBottom: 35,
      alignItems: 'center',
      flex: 1
    },
    text: {
      color: colors.white,
      fontWeight: 'bold'
    }
  })
}
