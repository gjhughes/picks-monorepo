import {useMutation} from 'react-apollo'

import joinLeagueMutation from '../mutations/joinLeague'
import {ILeague} from '../../types/League'

const useJoinLeague = () => {
  const [joinLeague, {loading, error}] = useMutation<{joinLeague: ILeague}>(
    joinLeagueMutation,
    {
      refetchQueries: ['GetUser']
    }
  )

  return {
    joinLeague,
    joinLeagueLoading: loading,
    joinLeagueError: error
  }
}

export default useJoinLeague
