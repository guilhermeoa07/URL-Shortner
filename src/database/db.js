module.exports = function ({ db }) {
    const mongoose = require('mongoose');

    mongoose.connect(`mongodb://${db.user}:${db.pass}@${db.host}:${db.port}/${db.database}`, { useNewUrlParser: true });

    mongoose.Promise = global.Promise;

    mongoose.connection.on('connected', () => {
        console.log("Conectado com sucesso ao Mongo");
    });

    mongoose.connection.on('error', function (error) {
        console.log('Erro na conexão: ' + error);
    });

    mongoose.connection.on('disconnected', () => {
        console.log("Desconectado.");
    });

    process.on('SIGINT', () => {
        mongoose.connection.close(() => {
            console.log('Conexão finalizada pelo terminal.');
            process.exit(0);
        });
    });
}
