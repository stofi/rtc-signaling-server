const { sendTo, sendToAll } = require('../../../../utilities/send')
const users = require('../../../users');

const onWsMessageLeave = (ws) => {
  sendToAll(users, "leave", ws);
}

module.exports = onWsMessageLeave