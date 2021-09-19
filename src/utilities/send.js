// utility to send message to one user
const sendTo = (connection, message) => {
  connection.send(JSON.stringify(message))
}

// utility to send message to all users

const sendToAll = (clients, type, { id, name: userName }) => {
  Object.values(clients).forEach((client) => {
    if (client.name !== userName) {
      client.send(
        JSON.stringify({
          type,
          user: { id, userName },
        })
      )
    }
  })
}

module.exports = {
  sendTo,
  sendToAll,
}