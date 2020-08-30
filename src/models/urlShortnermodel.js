const { Schema } = require('mongoose');
const shortid = require('shortid');
const Schema = mongoose.Schema;

require('mongoose-type-url')

const urlSchema = new Schema({
    originalUrl: {
        type: mongoose.SchemaTypes.Url,
        required: true,
        lowercase: true
    },
    urlCode: {
        type: String,
        default: shortid.generate,
        unique: true
    },
    shortUrl: {
        type: mongoose.SchemaTypes.Url,
        unique: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt : {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Urls', urlSchema)