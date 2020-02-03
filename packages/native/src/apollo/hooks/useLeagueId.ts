import {useQuery} from 'react-apollo'

import localLeagueIdQuery from '../queries/leagueId'

function useLeagueId() {
  const {data} = useQuery(localLeagueIdQuery)

  return {
    leagueId: data.leagueId
  }
}

export default useLeagueId
