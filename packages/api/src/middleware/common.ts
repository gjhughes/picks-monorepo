import cors from "cors"
import parser from "body-parser";
import {Router} from "express"
import compression from "compression"
import morgan from "morgan"

export const handleCors = (router: Router) => {
  router.use(cors())
}

export const handleCompression = (router: Router) => {
  router.use(compression())
}

export const handleBodyRequestParsing = (router: Router) => {
  router.use(parser.urlencoded({extended: true}))
  router.use(parser.json())
}

export const handleLogging = (router: Router) => {
  router.use(morgan("dev"))
}
