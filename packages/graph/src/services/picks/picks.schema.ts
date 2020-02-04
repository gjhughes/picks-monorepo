import {gql} from 'apollo-server'
import Auth from './schema/auth'
import User from './schema/user'
import League from './schema/league'
import Prediction from './schema/prediction'
import WeeklySchedule from './schema/weeklySchedule'
import TeamRecord from './schema/teamStandings'
import Leaderboard from './schema/leaderboard'

export default gql`
  type Query {
    user(uuid: String!): User!
    league(uuid: String!): League
    leagues: [League]!
    weeklySchedule(season: String!, week: String!): [WeeklySchedule]
    accessLeague(accessCode: String!): League
    predictionsForWeek(leagueId: String!, week: Int!, stage: String!, season: String!): [Prediction]
    teamStandings(season: String!): [TeamRecord]
    leaderboard(leagueId: String!): Leaderboard
  }

  type Mutation {
    login(email: String!, password: String!): Auth!
    register(name: String!, email: String!, password: String!, passwordConfirmation: String!): Auth!
    createLeague(name: String!): League!
    joinLeague(leagueId: String!): League!
    upsertPrediction(leagueId: String!, week: Int!, gameKey: String!, predictedWinner: Int!, stage: String!, season: String!): [Prediction]
  }

  ${Auth}
  ${User}
  ${League}
  ${Prediction}
  ${WeeklySchedule}
  ${TeamRecord}
  ${Leaderboard}
`
