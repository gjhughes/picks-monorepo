import React, {useState, useEffect} from 'react'
import {StatusBar} from 'react-native'
import {ApolloProvider} from '@apollo/react-hooks'
import {Provider as PaperProvier} from 'react-native-paper'
import codePush, {CodePushOptions} from 'react-native-code-push'
import Reactotron from 'reactotron-react-native'
import AsyncStorage from "@react-native-community/async-storage"
import BootSplash from "react-native-bootsplash"

import client from './apollo'
import {BootScreen} from './screens'
import RootNavigation from './navigation'
import theme from './theme'
import {getItem} from './utils/keychain'
import {AppRoute} from './navigation/enums'
import writeToCache from './apollo/helpers/writeToCache'
import {useTeamStandingsQuery} from "./generated/hooks"

Reactotron
  .setAsyncStorageHandler(AsyncStorage)
  .configure()
  .useReactNative()
  .connect()

const codePushOptions: CodePushOptions = {
  checkFrequency: codePush.CheckFrequency.ON_APP_START
}

function App() {
  const [loading, setLoading] = useState(true)
  const [credentials, setCredentials] = useState('')

  const {data} = useTeamStandingsQuery({
    variables: {season: '2019'},
    client
  })

  useEffect(() => {
    BootSplash.hide({duration: 500})
    getAuthCrednetials()
  }, [])

  const getAuthCrednetials = () => {
    return getItem().then((credentials) => {
      if (credentials) {
        writeToCache('loggedInUser', credentials.username)
        setCredentials(credentials.username)
      }
      setLoading(false)
      BootSplash.hide({duration: 500})
    })
  }

  const initialRouteName = credentials
    ? AppRoute.APP_NAVIGATOR
    : AppRoute.AUTH_NAVIGATOR

  return (
    <ApolloProvider client={client}>
      <PaperProvier theme={theme}>
        <StatusBar barStyle="light-content" />
        {loading || !data && <BootScreen />}
        {!loading && data && (
          <RootNavigation initialRouteName={initialRouteName} />
        )}
      </PaperProvier>
    </ApolloProvider>
  )
}

export default codePush(codePushOptions)(App)
