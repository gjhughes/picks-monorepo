import {ApolloClient} from 'apollo-client'
import {ApolloLink} from 'apollo-link'
import {InMemoryCache, defaultDataIdFromObject} from 'apollo-cache-inmemory'

import authLink from './links/authLink'
import httpLink from './links/httpLink'
import restLink from './links/restLink'
import errorLink from './links/errorLink'
import persist from './utils/persist'
import {getIdForType, customKeys} from './helpers/cache'

const typeDefs = ''

const formatCacheKey = (type: String, key: String) => {
  return `${type}@${key}`
}

const cache = new InMemoryCache({
  dataIdFromObject: (object: any) => {
    const idKey = getIdForType(object.__typename)
    return customKeys.includes(object.__typename)
      ? formatCacheKey(object.__typename, object[idKey])
      : defaultDataIdFromObject(object)
  }
})

const client = new ApolloClient({
  link: ApolloLink.from([authLink, errorLink, restLink, httpLink]),
  cache,
  resolvers: {},
  typeDefs
})

export function persistCache() {
  return persist(cache)
}

export default client
