import {useLazyQuery} from 'react-apollo'

import accessLeagueQuery from '../queries/accessLeague'
import {League} from '../types'

const useAccessLeague = () => {
  const [getLeagueByAccessCode, {data, loading, error}] = useLazyQuery<League>(
    accessLeagueQuery
  )

  return {
    getLeagueByAccessCode,
    accessLeagueData: data?.accessLeague!,
    accessLeagueLoading: loading,
    accessLeagueError: error
  }
}

export default useAccessLeague
