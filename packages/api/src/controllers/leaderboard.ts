import {getScheduleForSeason} from "./schedule"
import {getPredictionsByLeague} from "./predictions"
import {calculateLeaderboard} from "./helpers/leaderboard"
import {Leaderboard} from "./types"

export const getLeaderboardForLeague = async (
  leagueId: string,
  season: string = "2019"
): Promise<Leaderboard> => {
  const seasonSchedule = await getScheduleForSeason(season)
  const predictionsForLeague = await getPredictionsByLeague(leagueId, season)
  const leaderboard = calculateLeaderboard(predictionsForLeague, seasonSchedule)
  return leaderboard
}
