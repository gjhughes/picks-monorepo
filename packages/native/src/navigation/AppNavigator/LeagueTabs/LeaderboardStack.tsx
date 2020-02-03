import React from 'react'
import {
  createStackNavigator,
  StackNavigationOptions
} from '@react-navigation/stack'

import {colors, layout} from '../../../theme'
import {LeagueLeaderboard} from '../../../screens'
import {HeaderTitle} from '../../../ui-components'

const Stack = createStackNavigator()

const getOptions = (): StackNavigationOptions => {
  return {
    headerTitle: () => {
      return <HeaderTitle title="LEADERBOARD" />
    },
    headerStyle: {
      backgroundColor: colors.nfl.primary,
      ...layout.shadow
    }
  }
}

function ScheduleStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LeaderboardStack"
        component={LeagueLeaderboard}
        options={getOptions}
      />
    </Stack.Navigator>
  )
}

export default ScheduleStack
