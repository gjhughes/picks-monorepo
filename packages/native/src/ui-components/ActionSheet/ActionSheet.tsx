import {ActionSheetIOS} from 'react-native'
import {StackNavigationProp} from '@react-navigation/stack'

import {clear} from '../../utils/keychain'
import {AppRoute} from '../../navigation/enums'

// ! @todo: fix types
interface Params {
  [key: string]: any
}

function ActionSheet(navigation: StackNavigationProp<Params>) {
  return ActionSheetIOS.showActionSheetWithOptions(
    {
      options: ['Cancel', 'Logout'],
      destructiveButtonIndex: 1,
      cancelButtonIndex: 0
    },
    (buttonIndex: number) => {
      if (buttonIndex === 1) {
        clear().then(() => {
          navigation.navigate(AppRoute.AUTH_NAVIGATOR)
        })
      }
    }
  )
}

export default ActionSheet
