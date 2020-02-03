import gql from 'graphql-tag'

import userScore from './fragments/userScore'

const leaderboardQuery = gql`
  query Leaderboard($leagueId: String!) {
    leaderboard(leagueId: $leagueId) {
      weeks {
        week
        results {
          ...userScore
        }
      }
      overall {
        ...userScore
      }
    }
  }
  ${userScore}
`

export default leaderboardQuery
