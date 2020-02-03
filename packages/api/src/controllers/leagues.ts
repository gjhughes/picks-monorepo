import {League, ILeague} from "../models/league"
import {User} from "../models/user"

export const createLeague = async (
  userId: string,
  newLeaguedData: Partial<ILeague>
) => {
  return await League
    .create({
      createdBy: userId,
      ...newLeaguedData
    })
}

export const getLeague = async (leagueId: string) => {
  return await League
    .findById(leagueId)
    .populate('members')
    .exec()
}

export const joinLeage = async (
  userId: string,
  leagueId: string
) => {
  await User.findByIdAndUpdate(userId, {
    $addToSet: {"leagues": leagueId}
  })
  return await League
    .findByIdAndUpdate(leagueId, {
      $addToSet: {"members": userId}
    },
    {new: true}
  )
  .populate('members')
  .exec()
}

export const findAllLeagues = async () => {
  return await League
    .find()
    .populate('members')
    .exec()
}

export const findLeagueByAccessCode = async (
  accessCode: string
) => {
  return await League
    .find({accessCode})
    .populate('members')
    .exec()
}
