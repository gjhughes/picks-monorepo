import {useQuery} from 'react-apollo'

import {Leaderboard} from '../types'
import leaderboardQuery from '../queries/leaderboard'

function useLeaderbaord(leagueId: string) {
  const variables = {leagueId}
  const {data, loading, error, refetch, networkStatus} = useQuery<Leaderboard>(leaderboardQuery, {
    variables
  })

  return {
    leaderboardData: data?.leaderboard,
    leaderboardLoading: loading,
    leaderboardError: error,
    refetch,
    networkStatus
  }
}

export default useLeaderbaord
