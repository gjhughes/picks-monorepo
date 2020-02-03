import {gql} from 'apollo-server'

export default gql`
  type TeamRecord {
    season: Int
    team: String
    name: String
    wins: Int
    losses: Int
    ties: Int
    teamId: Int
  }
`
