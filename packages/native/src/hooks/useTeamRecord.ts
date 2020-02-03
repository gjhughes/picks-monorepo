import {useApolloClient} from 'react-apollo'

import {TeamRecord} from '../apollo/types'
import fragment from '../apollo/queries/fragments/teamRecord'

export const useTeamRecord = (teamKey: string) => {
  const {cache} = useApolloClient()
  const teamRecord: TeamRecord | null = cache.readFragment({
    id: `TeamRecord@${teamKey}`,
    fragment
  })

  return {
    wins: teamRecord!.wins,
    losses: teamRecord!.losses,
    ties: teamRecord!.ties,
    teamName: teamRecord!.name.split(' ').splice(-1)
  }
}
