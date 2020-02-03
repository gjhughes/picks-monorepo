import gql from 'graphql-tag'

const weeklyScheduleQuery = gql`
  query WeeklySchedule($season: String!, $week: String!) {
    weeklySchedule(season: $season, week: $week) {
      status
      gameKey
      awayTeam
      homeTeam
      awayScore
      homeScore
      awayTeamId
      homeTeamId
    }
  }
`

export default weeklyScheduleQuery
