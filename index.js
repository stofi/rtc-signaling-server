const express = require('express')
const http = require('http')
const app = express()
const configureServer = require('./src/server/configure')
const port = process.env.PORT || 9000

//initialize a http server
const server = http.createServer(app)

const wss = configureServer(server)

//start our server
server.listen(port, () => {
  console.log(`Signaling Server running on port: ${port}`)
})
