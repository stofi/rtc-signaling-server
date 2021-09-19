const normalizedPath = require('path').join(__dirname, 'handlers')

const handlers = {}

require('fs')
  .readdirSync(normalizedPath)
  .forEach((file) => {
    const type = file.split('.')[0]
    handlers[type] = require(`${normalizedPath}/${file}`)
  })

const onWsMessage = (ws) => (msg) => {
  console.log('Received message: %s from client', msg)
  let data

  try {
    data = JSON.parse(msg)
  } catch (e) {
    console.log('Invalid JSON')
    data = {}
  }
  const {type} = data
  const handler  = handlers[type] || handlers.default
  handler(ws, data)
}

module.exports = onWsMessage
