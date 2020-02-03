import express, {Express, Router} from "express"
import mongoose from 'mongoose'

import {connect} from "./db"
import config from "./config"
import routes from './routes'
import middleware from "./middleware";
import {applyMiddleware, applyRoutes} from "./utils"
import {getBaseUrl} from "./utils/baseUrl"
import errorHandler from "./middleware/errorHandler"
import globalToJSON from './middleware/globalToJSON'

mongoose.plugin(globalToJSON)

process.on("uncaughtException", (error) => {
  console.log(error)
  process.exit(1)
})

process.on("unhandledRejection", (error) => {
  console.log(error)
  process.exit(1)
})

class Server {
  public app: Express
  public router: Router

  constructor() {
    this.app = express()
    this.router = Router()
    this.registerMiddleware()
    this.registerRoutes()
    this.applyErrorHandler()
  }

  private registerMiddleware(): void {
    applyMiddleware(middleware, this.router)
  }

  private registerRoutes(): void {
    applyRoutes(routes, this.router)
    this.app.use(getBaseUrl(), this.router)
  }

  private applyErrorHandler() {
    applyMiddleware(errorHandler, this.router)
  }

  public async start(port: number | string = config.port): Promise<void> {
    try {
      await connect()
      this.app.listen(port, () => {
        console.log(`Server listening on localhost:${port}`)
      })
    } catch (error) {
      console.log(error)
    }
  }
}

const server = new Server()

export default server
