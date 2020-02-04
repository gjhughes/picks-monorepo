import { ServerInfo } from 'apollo-server'

import server from './src/server'

server.listen().then(({port}: ServerInfo) => {
  console.log(`🚀 Apollo Server running on PORT ${port}`)
})
