import {useQuery} from 'react-apollo'

import {WeeklyPredictions} from '../types'
import predictionsForWeekQuery from '../queries/predictionsForWeek'

function usePredictionsForWeekQuery(
  leagueId: string,
  season: string = '2019',
  stage: string,
  week: number
) {
  const variables = {leagueId, season, stage, week}
  const {data, error, loading} = useQuery<WeeklyPredictions>(
    predictionsForWeekQuery,
    {variables}
  )

  return {
    predictionData: data,
    predictionsError: error,
    predictionsLoading: loading
  }
}

export default usePredictionsForWeekQuery
