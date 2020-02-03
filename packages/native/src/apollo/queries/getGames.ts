import gql from 'graphql-tag'

const getGamesQuery = gql`
  query GamesForWeek($week: Int!) {
    games(week: $week)
      @rest(type: "Game", path: "ScoresByWeek/2019/{args.week}") {
      GameKey
      AwayTeam
      HomeTeam
      AwayScore
      HomeScore
      GlobalAwayTeamID
      GlobalHomeTeamID
    }
  }
`

export default getGamesQuery
