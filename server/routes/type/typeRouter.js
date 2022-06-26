const Router = require('express')
const router = new Router()
const typeController = require('./typeController')

router.post('/', typeController.create)
router.get('/', typeController.getAll)
router.delete('/', typeController.delete)
router.post('/', typeController.post)

module.exports = router