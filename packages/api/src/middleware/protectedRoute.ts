import {Request, Response, NextFunction} from "express"
import jwt from "jsonwebtoken"

import {HTTP401Error} from "../utils/httpErrors"
import {User} from "../models/user"
import {Req} from "../types"

interface Payload {
  userId: string
}

async function protectedRoute(req: Req, res: Response, next: NextFunction) {
  if (!req.headers.authorization) {
    throw new HTTP401Error()
  }
  
  const token = req.headers.authorization.replace("Bearer ", "")

  try {
    const {userId} = <Payload>jwt.verify(token, "secret")
    const user = await User.findById(userId).exec()

    if (!user) {
      throw new HTTP401Error() 
    }

    req.context = {
      userId: user.uuid
    }

  } catch (error) {
    next(error)
  }

  next()
}

export default protectedRoute
