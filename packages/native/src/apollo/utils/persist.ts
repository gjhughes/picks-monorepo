import AsyncStorage from '@react-native-community/async-storage'
import {persistCache} from 'apollo-cache-persist'
import {ApolloCache} from 'apollo-cache'

export default async function persistApolloCache(cache: ApolloCache<any>) {
  try {
    await persistCache({
      cache,
      storage: AsyncStorage
    })
  } catch (error) {
    console.log('Error resetting apollo cache', error)
  }
}
