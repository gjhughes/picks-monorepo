import {Prediction, IPrediction} from "../models/prediction"

export const upsertPrediction = async (
  userId: string,
  newPredictionData: Partial<IPrediction>
) => {
  const {gameKey, week, leagueId, stage} = newPredictionData
  try {
    await Prediction.findOneAndUpdate({
      createdBy: userId, leagueId, gameKey
    },
    {
      leagueId,
      createdBy: userId,
      ...newPredictionData
    },
    {
      upsert: true,
      new: true
    })
  } catch (error) {
    console.log(error)
  }

  return Prediction.find({
    leagueId,
    week,
    stage,
    createdBy: userId
  })
}

export const getPredictionsForWeek = async (
  userId: string,
  leagueId: string,
  season: string,
  stage: string,
  week: number
) => {
  return await Prediction.find({
    createdBy: userId,
    leagueId,
    season,
    stage,
    week
  })
  .exec()
}

export const getPredictionsByLeague = async (
  leagueId: string,
  season: string
) => {
  return await Prediction.find({
    leagueId,
    season
  })
  .populate({
    path: "createdBy",
    select: "uuid name"
  })
  .sort({
    week: -1
  })
  .exec()
}
