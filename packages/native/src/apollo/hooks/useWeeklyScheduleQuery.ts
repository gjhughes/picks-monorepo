import {useQuery} from 'react-apollo'

import {WeeklySchedule} from '../types'
import weeklySchedule from '../queries/weeklySchedule'
import {getCurrentSeason} from '../../helpers/getCurrentSeason'

function useWeeklyScheduleQuery(type: string, week: number) {
  const variables = {
    season: `${getCurrentSeason()}${type}`,
    week: String(week)
  }

  const {data, loading, error, refetch, networkStatus} = useQuery<
    WeeklySchedule
  >(weeklySchedule, {
    variables,
    fetchPolicy: 'cache-first',
    notifyOnNetworkStatusChange: true
  })

  return {
    refetch,
    networkStatus,
    scheduleData: data,
    scheduleError: error,
    scheduleLoading: loading
  }
}

export default useWeeklyScheduleQuery
