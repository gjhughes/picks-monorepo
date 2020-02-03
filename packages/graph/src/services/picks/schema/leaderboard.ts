import {gql} from 'apollo-server'

export default gql`
  type Leaderboard {
    weeks: [Week]
    overall: [UserScore]
  }

  type Week {
    week: Int
    results: [UserScore]
  }

  type UserScore {
    user: User
    score: Int
  }
`
