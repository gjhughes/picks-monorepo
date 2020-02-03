import React from 'react'
import {ScrollView, RefreshControl} from 'react-native'
import {ActivityIndicator, Title} from 'react-native-paper'

import styles from './styles'
import {useLeaderboard, useLeagueId} from '../../apollo/hooks'
import {LeaderboardTable} from '../../ui-components'
import { NetworkStatus } from 'apollo-client'

function Leaderboard() {
  const {leagueId} = useLeagueId()
  const {
    leaderboardLoading,
    leaderboardData,
    refetch,
    networkStatus
  } = useLeaderboard(leagueId)

  if (leaderboardLoading) {
    return <ActivityIndicator size="large" style={styles.activityIndicator} />
  }

  const refreshing = networkStatus ===  NetworkStatus.refetch || networkStatus === NetworkStatus.loading

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
      refreshControl={<RefreshControl onRefresh={refetch} refreshing={refreshing} />}>
      {leaderboardData?.overall && (
        <>
          <Title style={styles.titleText}>
            Overall
          </Title>
          <LeaderboardTable overallScore results={leaderboardData?.overall} />
        </>
      )}
      {leaderboardData?.weeks && (
        <Title style={styles.titleText}>
          Weekly
        </Title>
      )}
      {leaderboardData?.weeks?.map(({week, results}) => {
        return (
          <LeaderboardTable key={week} week={week} results={results} />
        )
      })}
    </ScrollView>
  )
}

export default Leaderboard
