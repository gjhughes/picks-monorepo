import {RESTDataSource, RequestOptions} from 'apollo-datasource-rest'

import endpoints from './endpoints'
import {
  Auth,
  User,
  League,
  TeamRecord,
  Prediction,
  Leaderboard,
  QueryUserArgs,
  WeeklySchedule,
  QueryLeagueArgs,
  MutationLoginArgs,
  MutationRegisterArgs,
  QueryLeaderboardArgs,
  QueryAccessLeagueArgs,
  QueryTeamStandingsArgs,
  MutationJoinLeagueArgs,
  QueryWeeklyScheduleArgs,
  MutationCreateLeagueArgs,
  QueryPredictionsForWeekArgs,
  MutationUpsertPredictionArgs
} from '../../types'

class PicksDataSource extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = process.env.BASE_URL || 'http://localhost:3001/api/v1'
  }

  willSendRequest(request: RequestOptions) {
    request.headers.set('authorization', this.context.accessToken)
  }

  async login(args: MutationLoginArgs): Promise<Auth> {
    return this.post(endpoints.login(), args)
  }

  async register(args: MutationRegisterArgs): Promise<Auth> {
    return this.post(endpoints.register(), args)
  }

  async me({uuid}: QueryUserArgs): Promise<User> {
    return this.get(endpoints.me(uuid))
  }

  async createLeague(args: MutationCreateLeagueArgs): Promise<League> {
    return this.post(endpoints.leagues(), args)
  }

  async league({uuid}: QueryLeagueArgs): Promise<League> {
    return this.get(endpoints.league(uuid))
  }

  async leagues(): Promise<League[]> {
    return this.get(endpoints.leagues())
  }

  async accessLeague({accessCode}: QueryAccessLeagueArgs) {
    return this.get(endpoints.leagues(), {code: accessCode})
  }

  async joinLeague({leagueId}: MutationJoinLeagueArgs): Promise<League> {
    return this.post(endpoints.league(leagueId))
  }

  async weeklySchedule({season, week}: QueryWeeklyScheduleArgs): Promise<WeeklySchedule[]> {
    return await this.get(endpoints.schedule(season, week))
  }

  async upsertPrediction(args: MutationUpsertPredictionArgs): Promise<Prediction> {
    return await this.post(endpoints.predictions(), args)
  }

  async predictionsForWeek({leagueId, season, stage, week}: QueryPredictionsForWeekArgs): Promise<Prediction[]> {
    return await this.get(endpoints.predictions(), {leagueId, season, stage, week})
  }

  async teamStandings({season}: QueryTeamStandingsArgs): Promise<TeamRecord[]> {
    return await this.get(endpoints.standings(season))
  }

  async leaderboard({leagueId}: QueryLeaderboardArgs): Promise<Leaderboard> {
    return await this.get(endpoints.leaderboard(leagueId))
  }
}

export default PicksDataSource
