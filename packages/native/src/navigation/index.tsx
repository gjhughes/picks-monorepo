import React from 'react'
import {NavigationNativeContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import AuthNavigator from './AuthNavigator'
import AppNavigator from './AppNavigator'
import ModalStack from './AppNavigator/ModalStack'
import {AppRoute} from './enums'

const Stack = createStackNavigator()

interface Props {
  initialRouteName: AppRoute
}

function RootNavigator({initialRouteName}: Props) {
  return (
    <NavigationNativeContainer>
      <Stack.Navigator
        initialRouteName={initialRouteName}
        headerMode="none"
        mode="modal"
        screenOptions={{animationEnabled: false}}>
        <Stack.Screen name={AppRoute.APP_NAVIGATOR} component={AppNavigator} />
        <Stack.Screen
          name={AppRoute.AUTH_NAVIGATOR}
          component={AuthNavigator}
        />
        <Stack.Screen
          name={AppRoute.MODAL_STACK}
          component={ModalStack}
          options={{animationEnabled: true}}
        />
      </Stack.Navigator>
    </NavigationNativeContainer>
  )
}

export default RootNavigator
