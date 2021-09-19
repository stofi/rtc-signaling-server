const WebSocket = require('ws')
const onWssConnection = require('./wss/connection')

module.exports = function (server) {
  //initialize the WebSocket server instance
  const wss = new WebSocket.Server({ server })

  wss.on('connection', onWssConnection)
  return wss
}
