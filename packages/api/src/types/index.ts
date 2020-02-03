import {Request} from 'express'

import {IUser} from "../models/user";

export interface AuthResponse {
  accessToken: string,
  user: IUser
}

type Context = {
  userId: string
}

export interface Req extends Request {
  context: Context
}
