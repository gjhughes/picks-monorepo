import client from '../index'

function writeToCache(key: string, value: string) {
  client.writeData({
    data: {
      [key]: value
    }
  })
}

export default writeToCache
