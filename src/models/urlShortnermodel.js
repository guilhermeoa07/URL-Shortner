const mongoose = require('mongoose')
const shortid = require('shortid')
const Schema = mongoose.Schema

require('mongoose-type-url')

const urlSchema = new Schema({
    originalUrl: {
        type: mongoose.SchemaTypes.Url,
        required: true,
        lowercase: true
    },
    shortUrl: {
        type: mongoose.SchemaTypes.Url,
        lowercase: true,
        unique: true
    },
    urlCode: {
        type: String,
        default: shortid.generate,
        unique: true
    },
    createdAt: {
        type: Date
    },
    updatedAt : {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Urls', urlSchema)