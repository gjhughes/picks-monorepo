import {SPORTS_DATA_BASE_URL, SPORTS_DATA_KEY} from "../constants"

const endpoints = {
  weeklySchedule: (season: string, week: string) => {
    return `${SPORTS_DATA_BASE_URL}/ScoresByWeek/${season}/${week}?key=${SPORTS_DATA_KEY}`
  },
  seasonSchedule: (season: string) => {
    return `${SPORTS_DATA_BASE_URL}/Scores/${season}?key=${SPORTS_DATA_KEY}`
  },
  teamStandings: (season: string) => {
    return `${SPORTS_DATA_BASE_URL}/Standings/${season}?key=${SPORTS_DATA_KEY}`
  }
}

export default endpoints
