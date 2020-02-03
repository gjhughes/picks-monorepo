import {Response} from "express"

import {Req} from '../types'
import {HTTPMethod} from './types'
import {getScheduleForWeek, getScheduleForSeason} from '../controllers/schedule'

export default [  
  {
    path: "/schedule",
    method: HTTPMethod.GET,
    handler: async (req: Req, res: Response) => {
      const result = await getScheduleForSeason("2019")
      res.status(200).send(result)
    }
  },
  {
    path: "/schedule/:season/:week",
    method: HTTPMethod.GET,
    handler: async ({params}: Req, res: Response) => {
      const {season, week} = params
      const result = await getScheduleForWeek(season, week)
      res.status(200).send(result)
    }
  }
]
