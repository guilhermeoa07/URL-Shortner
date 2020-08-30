const config = require('./config.json')

module.exports = async function (environment) {
    if(environment && environment== "dev") {
        return config.dev
    }

    return config.prod
}