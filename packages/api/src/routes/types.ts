import {NextFunction, Response} from "express"

import {Req} from '../types'

export interface Handler {
  (req: Req, res: Response, next: NextFunction): Promise<any> | void
}

export interface Route {
  path: string
  method: string
  handler: Handler | Handler[]
}

export enum HTTPMethod {
  GET = "get",
  PUT = "put",
  POST = "post",
  DELETE = "delete"
}
