import {IGame} from "../../models/schedule"
import {IPrediction} from "../../models/prediction"
import {Leaderboard, ResultsObject} from "../types"

export const calculateLeaderboard = (
  predictions: IPrediction[],
  games: IGame[]
) => {
  const board: Leaderboard = {weeks: [], overall: []}
  const finalResults: ResultsObject = createResultsObject(games)

  predictions.forEach((prediction) => {
    const userOverall = board.overall.find(({user}) => {
      return user.uuid === prediction.createdBy.uuid
    })

    if (!userOverall) {
      board.overall.push({user: prediction.createdBy, score: 0})
    }

    let currentWeek = board.weeks.find(({week}) => {
      return week === prediction.week
    })

    if (!currentWeek) {
      const newWeek = {week: prediction.week, results: []}
      board.weeks.push(newWeek)
      currentWeek = newWeek
    }

    let userScoreInWeek = currentWeek.results.find(({user}) => {
      return user.uuid == prediction.createdBy.uuid
    })

    if (!userScoreInWeek) {
      const newScore = {user: prediction.createdBy, score: 0}
      currentWeek.results.push(newScore)
      userScoreInWeek = newScore
    }

    if (prediction.predictedWinner == finalResults[prediction.gameKey]) {
      const user = board.overall.find(({user}) => {
        return user.uuid === prediction.createdBy.uuid
      })
      user!.score = user!.score + 1
      userScoreInWeek.score = userScoreInWeek.score + 1
    }
  })

  return board
}


export const createResultsObject = (games: IGame[]) => {
  const results: ResultsObject = {}
  games.forEach((game) => {
    results[game.gameKey] = getGameWinnerId(game)
  })

  return results
}

const getGameWinnerId = ({
  homeScore,
  awayScore,
  homeTeamId,
  awayTeamId
}: IGame) => {
  if (homeScore === awayScore) {
    return "Tied game"
  }

  return homeScore! > awayScore! ? homeTeamId : awayTeamId
}
