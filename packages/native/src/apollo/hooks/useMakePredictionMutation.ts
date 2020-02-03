import {useMutation} from 'react-apollo'

import upsertPredictionMutation from '../mutations/newPrediction'
import predictionsForWeekQuery from '../queries/predictionsForWeek'

function useMakePredictionMutation(
  leagueId: string,
  season: string,
  stage: string,
  week: number
) {
  const variables = {
    leagueId,
    season,
    stage,
    week
  }

  const [makePrediction] = useMutation(upsertPredictionMutation, {
    refetchQueries: [
      {
        query: predictionsForWeekQuery,
        variables
      }
    ]
  })

  return {makePrediction}
}

export default useMakePredictionMutation
