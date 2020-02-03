import {IUser} from "../../models/user"

interface Leaderboard {
  weeks: Week[]
  overall: UserScore[]
}

interface Week {
  week: number,
  results: UserScore[]
}

interface UserScore {
  user: IUser
  score: number
}

export default Leaderboard
