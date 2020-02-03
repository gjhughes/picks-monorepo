import {Response} from "express"

import {Req} from '../types'
import {HTTPMethod} from './types'
import {getTeamStandings} from '../controllers/standings'

export default [
  {
    path: "/standings/:season",
    method: HTTPMethod.GET,
    handler: async ({params}: Req, res: Response) => {
      const result = await getTeamStandings(params.season)
      res.status(200).send(result)
    }
  }
]
