import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'

import {LeagueSchedule} from '../../../screens'

const Stack = createStackNavigator()

// @todo: fix types
function ScheduleStack({route}: any) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ScheduleStack"
        component={LeagueSchedule}
        initialParams={route.params}
      />
    </Stack.Navigator>
  )
}

export default ScheduleStack
