const { v4: uuidv4 } = require('uuid')
const { sendTo, sendToAll } = require('../../../../utilities/send')
const users = require('../../../users');

const onWsMessageLogin = (ws, { type, name, offer, answer, candidate}) => {
  //Check if username is available
  if (users[name]) {
    sendTo(ws, {
      type: 'login',
      success: false,
      message: 'Username is unavailable',
    })
  } else {
    const id = uuidv4()
    const loggedIn = Object.values(users).map(({ id, name: userName }) => ({
      id,
      userName,
    }))
    users[name] = ws
    ws.name = name
    ws.id = id
    sendTo(ws, {
      type: 'login',
      success: true,
      users: loggedIn,
    })
    sendToAll(users, 'updateUsers', ws)
  }
}

module.exports = onWsMessageLogin