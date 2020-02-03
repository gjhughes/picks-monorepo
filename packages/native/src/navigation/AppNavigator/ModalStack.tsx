import React from 'react'
import {
  createStackNavigator,
  StackNavigationOptions
} from '@react-navigation/stack'
import {IconButton} from 'react-native-paper'

import {JoinLeague, NewLeague, NewLeagueSuccess} from '../../screens'
import {HeaderTitle} from '../../ui-components'
import {colors, layout} from '../../theme'

const Stack = createStackNavigator()

const getOptions = (title: string, navigation: any): StackNavigationOptions => {
  return {
    headerStyle: {
      backgroundColor: colors.nfl.primary,
      ...layout.shadow
    },
    headerTitle: () => {
      return <HeaderTitle title={title} />
    },
    headerLeft: () => {
      return (
        <IconButton
          icon="close"
          color={colors.white}
          onPress={() => navigation.navigate('MyLeagues')}
        />
      )
    }
  }
}

function ModalStack() {
  return (
    <Stack.Navigator initialRouteName="JoinLeague">
      <Stack.Screen
        name="JoinLeague"
        component={JoinLeague}
        options={({navigation}) => getOptions('JOIN LEAGUE', navigation)}
      />
      <Stack.Screen
        name="NewLeague"
        component={NewLeague}
        options={({navigation}) => getOptions('CREATE LEAGUE', navigation)}
      />
      <Stack.Screen
        name="NewLeagueSuccess"
        component={NewLeagueSuccess}
        options={({navigation}) => getOptions('LEAGUE CREATED', navigation)}
      />
    </Stack.Navigator>
  )
}

export default ModalStack
