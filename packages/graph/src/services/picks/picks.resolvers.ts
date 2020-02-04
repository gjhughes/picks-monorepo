import {QueryResolvers, MutationResolvers} from '../../generated'

const queryResolvers: QueryResolvers = {
  user: async (_, args, {dataSources}) => {
    return await dataSources.picks.me(args)
  },
  league: async (_, args, {dataSources}) => {
    return await dataSources.picks.league(args)
  },
  leagues: async (_, __, {dataSources}) => {
    return await dataSources.picks.leagues()
  },
  accessLeague: async (_, args, {dataSources}) => {
    return await dataSources.picks.accessLeague(args)
  },
  weeklySchedule: async (_, args, {dataSources}) => {
    return await dataSources.picks.weeklySchedule(args)
  },
  predictionsForWeek: async (_, args, {dataSources}) => {
    return await dataSources.picks.predictionsForWeek(args)
  },
  teamStandings: async (_, args, {dataSources}) => {
    return await dataSources.picks.teamStandings(args)
  },
  leaderboard: async (_, args, {dataSources}) => {
    return await dataSources.picks.leaderboard(args)
  }
}

const mutationResolvers: MutationResolvers = {
  login: async (_, args, {dataSources}) => {
    return await dataSources.picks.login(args)
  },
  register: async (_, args, {dataSources}) => {
    return await dataSources.picks.register(args)
  },
  createLeague: async (_, args, {dataSources}) => {
    return await dataSources.picks.createLeague(args)
  },
  joinLeague: async (_, args, {dataSources}) => {
    return await dataSources.picks.joinLeague(args)
  },
  upsertPrediction: async (_, args, {dataSources}) => {
    return await dataSources.picks.upsertPrediction(args)
  }
}

export default {
  Query: {
    ...queryResolvers
  },
  Mutation: {
    ...mutationResolvers
  }
}
