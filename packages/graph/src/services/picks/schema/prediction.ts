import {gql} from 'apollo-server'

export default gql`
  type Prediction {
    leagueId: String!
    gameKey: String!
    week: Int!
    predictedWinner: Int!
    createdBy: String!
    stage: String!
    season: String!
  }
`
