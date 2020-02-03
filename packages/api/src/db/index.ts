import mongoose, {ConnectionOptions} from "mongoose"

import config from '../config'

export const connect = (
  dbUri: string = config.dbUri,
  options: ConnectionOptions = {}
) => {
  return mongoose.connect(dbUri, {
    ...options,
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
}
