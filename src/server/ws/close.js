const users = require('../users')
const { sendToAll } = require('../../utilities/send')

const onWsClose = (ws) => () => {
  delete users[ws.name]
  sendToAll(users, 'leave', ws)
}

module.exports = onWsClose
