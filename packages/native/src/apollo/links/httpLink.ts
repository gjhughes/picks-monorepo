import Config from 'react-native-config'
import {createHttpLink} from 'apollo-link-http'

export default createHttpLink({
  uri: Config.GRAPH_URL
})
