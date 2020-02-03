import axios from "axios"

import endpoints from "./endpoints"
import {parseWeeklyScheduleResponse, parseSesonScheduleResponse} from "./helpers/schedule"


export const getScheduleForWeek = async (season: string, week: string) => {
  const {data} = await axios.get(endpoints.weeklySchedule(season, week))
  const weeklySchedule = parseWeeklyScheduleResponse(data)
  return weeklySchedule
}

export const getScheduleForSeason = async (season: string) => {
  const {data} = await axios.get(endpoints.seasonSchedule(season))
  const seasonSchedule = parseSesonScheduleResponse(data)
  return seasonSchedule
}
