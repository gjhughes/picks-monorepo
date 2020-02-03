import {setContext} from 'apollo-link-context'

import {getItem} from '../../utils/keychain'

const authLink = setContext(async (_, {headers}) => {
  const credentials = await getItem()
  return {
    ...headers,
    headers: {
      authorization: credentials ? `Bearer ${credentials.password}` : ''
    }
  }
})

export default authLink
