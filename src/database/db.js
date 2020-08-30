const mongoose = require('mongoose')
require('dotenv').config()

const config = process.env

module.exports = function () {

const uri = (`mongodb://${config.hostDB}:${config.portDB}/${config.database}`)
const options = {
    useNewUrlParser: true,
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 500,
    connectTimeoutMS: 10000,
  };

    mongoose.connect(`${uri}?authSource=admin`, options)

    mongoose.Promise = global.Promise

    mongoose.connection.on('connected', () => {
        console.log("Conectado com sucesso ao Mongo")
    })

    mongoose.connection.on('error', function (error) {
        console.log('Erro na conexão: ' + error)
    })

    mongoose.connection.on('disconnected', () => {
        console.log("Desconectado.")
    })

    process.on('SIGINT', () => {
        mongoose.connection.close(() => {
            console.log('Conexão finalizada pelo terminal.')
            process.exit(0)
        })
    })
}
