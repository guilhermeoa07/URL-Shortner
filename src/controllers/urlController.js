const shortId = require('shortid')
const validUrl = require('valid-url')

const urlModel = require('../models/urlShortnermodel')

const config = process.env

async function getById(req, res, next) {
    try {
        const result = await urlModel.findOne({
            _id: req.params.id
        })

        if (result) {
            res.status(200).send(result)
        } else {
            res.status(200).send({ Message: "not found" })
        }
    } catch (error) {
        next(error)
    }
}

async function getByUrl(req, res, next) {
    try {
        if (validUrl.isUri(req.body.url)) {
            const result = await urlModel.find({
                originalUrl: req.body.url
            })

            if (result) {
                res.status(200).send(result)
            } else {
                res.status(200).send({ Message: "not found" })
            }
        } else {
            res.status(404).send({ Message: "Not valid URL" })
        }
    } catch (error) {
        next(error)
    }
}

async function postNewUrl(req, res, next) {
    try {
        const originalUrl = req.body.url
        if (validUrl.isUri(originalUrl)) {
            const findUrl = await urlModel.find({
                originalUrl: originalUrl
            })

            if (findUrl && findUrl.length > 0) {
                res.status(200).send({ Message: "Already in the database", Url: findUrl })
            } else {
                const shortidUrl = shortId.generate()
                const shortUrl = `${config.default_url}/${shortidUrl}`

                const item = new urlModel({
                    originalUrl,
                    shortUrl,
                    urlCode: shortidUrl,
                    createdAt: Date.now()
                })

                await item.save()

                res.status(201).send({ Message: 'Salvo com sucesso', shortUrl })
            }
        }
    } catch (error) {
        next(error)
    }
}

module.exports = { getById, getByUrl, postNewUrl }