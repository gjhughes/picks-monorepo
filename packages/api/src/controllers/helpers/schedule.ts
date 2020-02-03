import { ITeamRecord } from "../../models/teamStandings"
import { GameResponse, IGame } from "../../models/schedule"

export const parseWeeklyScheduleResponse = (games: GameResponse[]) => {
  return games.map(selectFields)
}

export const parseSesonScheduleResponse = (games: GameResponse[]) => {
  const finalScores = games.filter((game) => game.Status === "Final")
  return finalScores.map(selectFields)
}

const selectFields = (game: GameResponse): IGame => ({
  gameKey: game.GameKey,
  homeTeam: game.HomeTeam,
  homeTeamId: game.GlobalHomeTeamID,
  awayTeam: game.AwayTeam,
  awayTeamId: game.GlobalAwayTeamID,
  homeScore: game.HomeScore,
  awayScore: game.AwayScore,
  status: game.Status
})
