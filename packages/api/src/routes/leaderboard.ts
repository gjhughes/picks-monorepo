import {Response} from "express"

import {Req} from '../types'
import {HTTPMethod} from './types'
import {getLeaderboardForLeague} from "../controllers/leaderboard"

export default [
  {
    path: "/leagues/:leagueId/leaderboard",
    method: HTTPMethod.GET,
    handler: async (req: Req, res: Response) => {
      const {leagueId} = req.params
      const result = await getLeaderboardForLeague(leagueId)
      res.status(200).json(result)
    }
  }
]
