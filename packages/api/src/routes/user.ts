import {Request, Response} from "express"

import {HTTPMethod} from './types'
import {register, me, login} from '../controllers/users'

export default [
  {
    path: "/register",
    method: HTTPMethod.POST,
    handler: async (req: Request, res: Response) => {
      const result = await register(req.body)
      res.status(200).send(result)
    }
  },
  {
    path: "/login",
    method: HTTPMethod.POST,
    handler: async (req: Request, res: Response) => {
      const {email, password} = req.body
      const result = await login(email, password)
      res.status(200).send(result)
    }
  },
  {
    path: "/users/:userId",
    method: HTTPMethod.GET,
    handler: async (req: Request, res: Response) => {
      const result = await me(req.params.userId)
      res.status(200).send(result)
    }
  }
]
