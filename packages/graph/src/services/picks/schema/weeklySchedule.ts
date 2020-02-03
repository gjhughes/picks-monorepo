import {gql} from 'apollo-server'

export default gql`
  type WeeklySchedule {
    status: String
    gameKey: String
    awayTeam: String
    homeTeam: String
    awayScore: Int
    homeScore: Int
    awayTeamId: Int
    homeTeamId: Int
  }
`
