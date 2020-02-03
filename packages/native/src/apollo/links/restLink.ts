import {RestLink} from 'apollo-link-rest'

import {headers, uri} from '../constants'

export default new RestLink({
  uri,
  headers
})
