import PicksDataSource from '../services/picks/picks.datasources'

export const dataSources = () => ({
  picks: new PicksDataSource()
})
