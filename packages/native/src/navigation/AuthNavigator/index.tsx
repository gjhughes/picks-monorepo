import React from 'react'
import {
  createStackNavigator,
  StackNavigationOptions,
  StackNavigationProp
} from '@react-navigation/stack'
import {RouteProp} from '@react-navigation/native'
import {IconButton} from 'react-native-paper'

import {AppRoute} from '../enums'
import {HeaderTitle} from '../../ui-components'
import {Login, Register} from '../../screens'
import {colors, layout} from '../../theme'

export type AuthNavigatorParamList = {
  [AppRoute.LOGIN]: undefined
  [AppRoute.REGISTER]: undefined
}

export type AuthNavigatorProps = {
  navigation: StackNavigationProp<
    AuthNavigatorParamList,
    AppRoute.LOGIN | AppRoute.REGISTER
  >
  route: RouteProp<AuthNavigatorParamList, AppRoute.LOGIN | AppRoute.REGISTER>
}

const Stack = createStackNavigator<AuthNavigatorParamList>()

const screenOptions: StackNavigationOptions = {
  headerStyle: {
    backgroundColor: colors.nfl.primary,
    ...layout.shadow
  }
}

function getOptions(title: string) {
  return ({navigation}: AuthNavigatorProps) => ({
    headerTitle: () => <HeaderTitle title={title} />,
    headerLeft: () => {
      return (
        title === AppRoute.REGISTER && (
          <IconButton
            icon="arrow-left"
            color={colors.white}
            onPress={() => navigation.goBack()}
          />
        )
      )
    }
  })
}

function AuthNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={AppRoute.LOGIN}
      screenOptions={screenOptions}>
      <Stack.Screen
        name={AppRoute.LOGIN}
        component={Login}
        options={getOptions(AppRoute.LOGIN)}
      />
      <Stack.Screen
        name={AppRoute.REGISTER}
        component={Register}
        options={getOptions(AppRoute.REGISTER)}
      />
    </Stack.Navigator>
  )
}

export default AuthNavigator
