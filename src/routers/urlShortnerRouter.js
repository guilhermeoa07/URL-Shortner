const { Router } = require('express')

const controller = require('../controllers/urlController')
const router = Router()

router.post('/url', controller.postNewUrl)
router.get('/url', controller.getByUrl) 
router.get('/url/:id', controller.getById)

module.exports = router