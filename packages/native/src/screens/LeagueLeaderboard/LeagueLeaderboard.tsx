import React from 'react'
import {ScrollView, RefreshControl} from 'react-native'
import {ActivityIndicator, Title} from 'react-native-paper'

import styles from './styles'
import {LeaderboardTable} from '../../ui-components'
import {NetworkStatus} from 'apollo-client'
import {useLocalLeagueIdQuery, useLeaderboardQuery} from "../../generated/hooks"
import {UserScore} from "../../generated/types"

function LeagueLeaderboard() {
  const {data: localData} = useLocalLeagueIdQuery()

  const {data: leaderboardData, loading, networkStatus, refetch} = useLeaderboardQuery({
    variables: {
      leagueId: localData?.leagueId!
    }
  })

  if (loading) {
    return <ActivityIndicator size="large" style={styles.activityIndicator} />
  }

  const refreshing = networkStatus ===  NetworkStatus.refetch || networkStatus === NetworkStatus.loading

  if (leaderboardData?.leaderboard) {
    const {leaderboard} = leaderboardData
    return (
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
        refreshControl={<RefreshControl onRefresh={refetch} refreshing={refreshing} />}>
        {leaderboard.overall && leaderboard.overall.length > 0 && (
          <>
            <Title style={styles.titleText}>
              Overall
            </Title>
            <LeaderboardTable overallScore results={leaderboardData?.leaderboard.overall as UserScore[]} />
            <Title>
              Weekly
            </Title>
            {leaderboard!.weeks!.map(({week, results}: any) => {
              return <LeaderboardTable key={week} results={results} />
            })}
          </>
        )}
      </ScrollView>
    )
  }
}

export default LeagueLeaderboard
