import React from 'react'
import {
  createBottomTabNavigator,
  BottomTabNavigationOptions,
  BottomTabBarOptions
} from '@react-navigation/bottom-tabs'
import {IconButton} from 'react-native-paper'

import ScheduleStack from './ScheduleStack'
import LeaderboardSack from './LeaderboardStack'
import {colors} from '../../../theme'

const Tabs = createBottomTabNavigator()

const getTabIcon = (route: string) => {
  return route === 'LeagueSchedule' ? 'football' : 'trophy'
}

// @todo: fix types
const getScreenOptions = ({route}: any): BottomTabNavigationOptions => {
  return {
    tabBarIcon: ({color, size}) => {
      return (
        <IconButton color={color} size={size} icon={getTabIcon(route.name)} />
      )
    }
  }
}

const getTabBarOptions = (): BottomTabBarOptions => {
  return {
    activeTintColor: colors.nfl.primary
  }
}

function LeagueTabs({route}: any) {
  const {params} = route
  return (
    <Tabs.Navigator
      initialRouteName="LeagueSchedule"
      screenOptions={getScreenOptions}
      tabBarOptions={getTabBarOptions()}>
      <Tabs.Screen
        name="LeagueSchedule"
        component={ScheduleStack}
        initialParams={params}
        options={{title: 'SCHEDULE'}}
      />
      <Tabs.Screen
        name="LeagueLeaderboard"
        component={LeaderboardSack}
        options={{title: 'LEADERBOARD'}}
      />
    </Tabs.Navigator>
  )
}

export default LeagueTabs
