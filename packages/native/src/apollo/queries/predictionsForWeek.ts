import gql from 'graphql-tag'

const predictionsForWeekQuery = gql`
  query PredictionsForWeek(
    $leagueId: String!
    $season: String!
    $stage: String!
    $week: Int!
  ) {
    predictionsForWeek(
      leagueId: $leagueId
      season: $season
      stage: $stage
      week: $week
    ) {
      gameKey
      leagueId
      predictedWinner
      week
      stage
    }
  }
`

export default predictionsForWeekQuery
