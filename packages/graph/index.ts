import server from './src/server'

server.listen().then(({port}) => {
  console.log(`🚀 Apollo Server running on PORT ${port}`)
})
