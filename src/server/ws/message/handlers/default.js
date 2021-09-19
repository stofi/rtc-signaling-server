const { sendTo, sendToAll } = require('../../../../utilities/send')

const onWsMessageDefault = (ws, { type, name, offer, answer, candidate}) => {
  sendTo(ws, {
    type: 'error',
    message: 'Command not found: ' + type,
  })
}

module.exports = onWsMessageDefault