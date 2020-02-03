import gql from 'graphql-tag'

const upsertPredictionMutation = gql`
  mutation UpsertPrediction(
    $leagueId: String!
    $week: Int!
    $gameKey: String!
    $season: String!
    $stage: String!
    $predictedWinner: Int!
  ) {
    upsertPrediction(
      leagueId: $leagueId
      season: $season
      stage: $stage
      week: $week
      gameKey: $gameKey
      predictedWinner: $predictedWinner
    ) {
      gameKey
      leagueId
      week
      predictedWinner
      season
      stage
    }
  }
`

export default upsertPredictionMutation
