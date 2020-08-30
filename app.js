const express = require('express')
const bodyParser = require('body-parser')
const normalizePort = require('normalize-port')
const port = normalizePort(process.env.PORT || '3333')
const routers = require('./src/routers/urlShortnerRouter')

require('./src/database/db')()

const app = express()

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: false }))

app.use('/', routers)

app.use((error, req, res, next)=> {
  res.status(404).send({Message: 'Something broke!'})
})

app.listen(port, () => {
  console.log("API rodando na porta " + port)
})

module.exports = app