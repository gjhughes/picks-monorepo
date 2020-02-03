import React from 'react'
import {
  createStackNavigator,
  StackNavigationOptions,
  StackNavigationProp
} from '@react-navigation/stack'
import {RouteProp} from '@react-navigation/native'
import {IconButton} from 'react-native-paper'

import {colors, layout} from '../../theme'
import {MyLeagues} from '../../screens'
import {HeaderTitle, ActionSheet} from '../../ui-components'

import {AppRoute, ScreenTitle} from '../enums'
import LeagueTabs from './LeagueTabs'

import {IUser} from '../../types/User'

export type Params = {
  [AppRoute.MY_LEAGUES]: {user: IUser}
  [AppRoute.LEAGUE_TABS]: undefined
  [AppRoute.MODAL_STACK]: undefined
}

export type Props = {
  navigation: StackNavigationProp<Params, AppRoute.MY_LEAGUES>
  route: RouteProp<Params, AppRoute.MY_LEAGUES>
}

const Stack = createStackNavigator<Params>()

function myLeagueOptions({navigation}: Props): StackNavigationOptions {
  return {
    headerStyle: {
      backgroundColor: colors.nfl.primary,
      ...layout.shadow
    },
    headerTitle: () => {
      return <HeaderTitle title={ScreenTitle.MY_LEAGUES} />
    },
    headerRight: () => {
      return (
        <IconButton
          icon="settings"
          color={colors.white}
          onPress={() => ActionSheet(navigation)}
        />
      )
    }
  }
}

function hideHeaderOptions(): StackNavigationOptions {
  return {
    header: () => null
  }
}

function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName={AppRoute.MY_LEAGUES} headerMode="screen">
      <Stack.Screen
        component={MyLeagues}
        options={myLeagueOptions}
        name={AppRoute.MY_LEAGUES}
      />
      <Stack.Screen
        component={LeagueTabs}
        name={AppRoute.LEAGUE_TABS}
        options={hideHeaderOptions}
      />
    </Stack.Navigator>
  )
}

export default AppNavigator
