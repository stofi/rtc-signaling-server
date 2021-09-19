const onWsMessage = require('../ws/message')
const onWsClose = require('../ws/close')

const onWssConnection = (ws) => {
  ws.on('message', onWsMessage(ws))
  ws.on('close', onWsClose(ws))
  //send immediate a feedback to the incoming connection
  ws.send(
    JSON.stringify({
      type: 'connect',
      message: 'bruh',
    })
  )
}

module.exports = onWssConnection