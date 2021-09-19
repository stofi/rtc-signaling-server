const { sendTo, sendToAll } = require('../../../../utilities/send')

const users = require('../../../users')

const onWsMessageAnswer = (ws, { type, name, offer, answer, candidate}) => {
  //Check if user to send answer to exists
  const answerRecipient = users[name]
  if (!!answerRecipient) {
    sendTo(answerRecipient, {
      type: 'answer',
      answer,
    })
  } else {
    sendTo(ws, {
      type: 'error',
      message: `User ${name} does not exist!`,
    })
  }
}

module.exports = onWsMessageAnswer
