import {ApolloServer} from 'apollo-server'
import {mergeTypes} from 'merge-graphql-schemas'

import {dataSources} from './datasources'
import {picksSchema} from '../services/picks'
import resolvers from '../services/picks/picks.resolvers'

const typeDefs = mergeTypes([picksSchema])

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
  playground: true,
  introspection: true,
  context: ({req}) => ({
    accessToken: req.headers.authorization
  })
})

export default server
