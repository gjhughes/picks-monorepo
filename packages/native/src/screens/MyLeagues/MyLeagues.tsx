import React, {useState, useCallback} from 'react'
import {FlatList, View} from 'react-native'
import {useFocusEffect} from '@react-navigation/native'
import {ActivityIndicator} from 'react-native-paper'
import {useQuery} from 'react-apollo'

import {colors} from '../../theme'
import {IUser} from '../../types/User'
import {ILeague} from '../../types/League'
import getUserQuery from '../../apollo/queries/getUser'
import {AppRoute} from '../../navigation/enums'
import userIsLeagueMember from '../../helpers/userIsLeagueMember'
import {useLoggedInUser} from '../../apollo/hooks'
import writeToCache from '../../apollo/helpers/writeToCache'
import {LeagueTile, FloatingAction, EmptyLeagueList} from '../../ui-components'

import styles from './styles'

interface UserData {
  user: IUser
}

// todo: types
function MyLeagues({navigation}: any) {
  const [floatingActionVisible, setFloatingActionVisible] = useState(true)

  const {loggedInUser} = useLoggedInUser()

  // todo: move to hook
  const {data, loading} = useQuery<UserData>(getUserQuery, {
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

  function renderItem({item}: {item: ILeague}) {
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

  function goToLeagueTabs(league: ILeague) {
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

  return (
    <>
      {data && (
        <FlatList<ILeague>
          style={styles.list}
          data={data.user.leagues}
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

export default MyLeagues
