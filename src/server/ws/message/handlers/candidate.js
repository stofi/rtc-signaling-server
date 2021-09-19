const { sendTo, sendToAll } = require('../../../../utilities/send')

const users = require('../../../users')

const onWsMessageCandidate = (ws, { type, name, offer, answer, candidate}) => {
  //Check if user to send candidate to exists
  const candidateRecipient = users[name]
  if (!!candidateRecipient) {
    sendTo(candidateRecipient, {
      type: 'candidate',
      candidate,
    })
  } else {
    sendTo(ws, {
      type: 'error',
      message: `User ${name} does not exist!`,
    })
  }
}

module.exports = onWsMessageCandidate
