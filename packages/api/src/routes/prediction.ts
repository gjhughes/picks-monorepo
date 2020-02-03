import {Response} from "express"

import {Req} from '../types'
import {HTTPMethod} from './types'
import protectedRoute from '../middleware/protectedRoute'
import {upsertPrediction, getPredictionsForWeek} from '../controllers/predictions'

export default [
  {
    path: "/predictions",
    method: HTTPMethod.POST,
    handler: [
      protectedRoute,
      async (req: Req, res: Response) => {
        const {userId} = req.context
        const result = await upsertPrediction(userId, req.body)
        res.status(200).send(result)
      }
    ]
  },
  {
    path: "/predictions",
    method: HTTPMethod.GET,
    handler: [
      protectedRoute,
      async (req: Req, res: Response) => {
        const {userId} = req.context
        const {leagueId, week, stage, season} = req.query
        const result = await getPredictionsForWeek(userId, leagueId, season, stage, week)
        res.status(200).send(result)
      }
    ]
  }
]
