import user from './user'
import league from './league'
import prediction from './prediction'
import schedule from './schedule'
import standings from './standings'
import leaderboard from "./leaderboard"

export default [
  ...user,
  ...league,
  ...prediction,
  ...standings,
  ...schedule,
  ...leaderboard
]
