import React, {useState, useEffect} from 'react'
import {StatusBar} from 'react-native'
import {ApolloProvider} from '@apollo/react-hooks'
import {Provider as PaperProvier} from 'react-native-paper'
import {useQuery} from 'react-apollo'
import codePush, {CodePushOptions} from 'react-native-code-push'

import client from './apollo'
import {BootScreen} from './screens'
import RootNavigation from './navigation'
import theme from './theme'
import {getItem} from './utils/keychain'
import {AppRoute} from './navigation/enums'
import teamRecordQuery from './apollo/queries/teamStandings'
import writeToCache from './apollo/helpers/writeToCache'

const codePushOptions: CodePushOptions = {
  checkFrequency: codePush.CheckFrequency.ON_APP_START
}

function App() {
  const [loading, setLoading] = useState(true)
  const [credentials, setCredentials] = useState('')

  // todo: move to hook
  const {data} = useQuery(teamRecordQuery, {
    variables: {season: '2019'},
    client
  })

  useEffect(() => {
    getAuthCrednetials()
  }, [])

  const getAuthCrednetials = () => {
    return getItem().then((credentials) => {
      if (credentials) {
        writeToCache('loggedInUser', credentials.username)
        setCredentials(credentials.username)
      }
      setLoading(false)
    })
  }

  const initialRouteName = credentials
    ? AppRoute.APP_NAVIGATOR
    : AppRoute.AUTH_NAVIGATOR

  return (
    <ApolloProvider client={client}>
      <PaperProvier theme={theme}>
        <StatusBar barStyle="light-content" />
        {loading || (!data && <BootScreen />)}
        {!loading && data && (
          <RootNavigation initialRouteName={initialRouteName} />
        )}
      </PaperProvier>
    </ApolloProvider>
  )
}

export default codePush(codePushOptions)(App)
