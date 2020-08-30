const express = require('express');
const bodyParser = require('body-parser');
const normalizePort = require('normalize-port');
const port = normalizePort(process.env.PORT || '3333');
const routers = require('./routers')

const config = require('./src/config')();

require('./src/database/database')(config.db);

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', routers)

app.listen(port, () => {
  console.log("API rodando na porta " + port);
});

module.exports = app;