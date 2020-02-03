import {StackNavigationProp} from '@react-navigation/stack'

import {setItem} from '../utils/keychain'
import {Auth} from '../types/Auth'
import {AppRoute} from '../navigation/enums'
import {Params} from '../navigation/AppNavigator'

export const handleRedirect = async (
  {user, accessToken}: Auth,
  navigation: StackNavigationProp<Params>
) => {
  await setItem(user.uuid, accessToken)
  navigation.navigate(AppRoute.APP_NAVIGATOR, {user})
}
