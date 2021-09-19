const { sendTo, sendToAll } = require('../../../../utilities/send')
const users = require('../../../users')

const onWsMessageOffer = (ws, { type, name, offer, answer, candidate}) => {
  //Check if user to send offer to exists
  const offerRecipient = users[name]
  if (!!offerRecipient) {
    sendTo(offerRecipient, {
      type: 'offer',
      offer,
      name: ws.name,
    })
  } else {
    sendTo(ws, {
      type: 'error',
      message: `User ${name} does not exist!`,
    })
  }
}

module.exports = onWsMessageOffer
