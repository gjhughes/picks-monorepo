import {Response} from "express"

import {Req} from '../types'
import {HTTPMethod} from './types'
import protectedRoute from '../middleware/protectedRoute'
import {createLeague, joinLeage, getLeague, findLeagueByAccessCode, findAllLeagues} from '../controllers/leagues'

export default [
  {
    path: "/leagues",
    method: HTTPMethod.POST,
    handler: [
      protectedRoute,
      async (req: Req, res: Response) => {
        const {userId} = req.context
        const result = await createLeague(userId, req.body)
        res.status(200).send(result)
      }
    ]
  },
  {
    path: "/leagues",
    method: HTTPMethod.GET,
    handler: [
      protectedRoute,
      async (req: Req, res: Response) => {
        const {code} = req.query
        if (code) {
          const result = await await findLeagueByAccessCode(code)
          res.status(200).send(result[0])
        } else {
          const result = await findAllLeagues()
          res.status(200).send(result)
        }
      }
    ]
  },
  {
    path: "/leagues/:leagueId",
    method: HTTPMethod.GET,
    handler: [
      protectedRoute,
      async (req: Req, res: Response) => {
        const league = await getLeague(req.params.leagueId)
        res.status(200).send(league)
      }
    ]
  },
  {
    path: "/leagues/:leagueId",
    method: HTTPMethod.POST,
    handler: [
      protectedRoute,
      async (req: Req, res: Response) => {
        const {userId} = req.context
        const updatedLeague = await joinLeage(userId, req.params.leagueId)
        res.status(200).send(updatedLeague)
      }
    ]
  }
]
