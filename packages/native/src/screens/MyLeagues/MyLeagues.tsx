import React, {useState, useCallback} from 'react'
import {FlatList, View} from 'react-native'
import {ActivityIndicator} from 'react-native-paper'
import {useFocusEffect} from '@react-navigation/native'

import styles from './styles'
import {colors} from '../../theme'
import {League} from  "../../generated/types"
import {AppRoute} from '../../navigation/enums'
import {useLoggedInUser} from '../../apollo/hooks'
import {useGetUserQuery} from  "../../generated/hooks"
import writeToCache from '../../apollo/helpers/writeToCache'
import userIsLeagueMember from '../../helpers/userIsLeagueMember'
import {LeagueTile, FloatingAction, EmptyLeagueList} from '../../ui-components'

// todo: navigation types
function MyLeagues({ navigation}: any) {
  const [floatingActionVisible, setFloatingActionVisible] = useState(true)

  const {loggedInUser} = useLoggedInUser()

  const {data, loading} = useGetUserQuery({
    variables: {
      uuid: loggedInUser
    }
  })

  useFocusEffect(
    useCallback(() => {
      setFloatingActionVisible(true)
      return () => {
        setFloatingActionVisible(false)
      }
    }, [])
  )

  function renderItem({item}: {item: League}) {
    const isMember = userIsLeagueMember(loggedInUser, item)
    return (
      <LeagueTile
        isMember={isMember}
        league={item}
        isMyLeaguesList
        onPress={() => goToLeagueTabs(item)}
      />
    )
  }

  function goToLeagueTabs(league: League) {
    writeToCache('leagueId', league.uuid)
    navigation.navigate(AppRoute.LEAGUE_TABS, {league})
  }

  function goToModalStack(params: {}) {
    navigation.navigate(AppRoute.MODAL_STACK, {
      ...params
    })
  }

  if (loading) {
    return (
      <ActivityIndicator
        size="large"
        style={styles.load}
        color={colors.nfl.primary}
      />
    )
  }

  if (data) {
    const {leagues} = data.user
    return (
      <>
        {leagues.length > 0 && (
          <FlatList<League>
            style={styles.list}
            data={leagues as League[]}
            renderItem={renderItem}
            keyExtractor={({uuid}) => String(uuid)}
            ListFooterComponent={<View style={styles.listFooter} />}
            ListEmptyComponent={<EmptyLeagueList />}
          />
        )}
        <FloatingAction
          // @ts-ignore
          onPress={goToModalStack}
          visible={floatingActionVisible}
        />
      </>
    )
  }
}

export default MyLeagues
