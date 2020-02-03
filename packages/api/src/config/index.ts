const getUriForEnv = () => {
  let dbUri
  if (process.env.PICKS_DB_URI) {
    dbUri = process.env.PICKS_DB_URI
  } else {
    dbUri = "mongodb://localhost:27017/picks-dev"
  }
  return dbUri
}

export default {
  dbUri: getUriForEnv(),
  port: process.env.PORT || 3001
}
