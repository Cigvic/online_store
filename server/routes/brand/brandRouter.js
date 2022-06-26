const Router = require('express')
const router = new Router()
const brandController = require('./brandController')

router.post('/', brandController.create)
router.get('/', brandController.getAll)
router.delete('/', brandController.delete)
router.post('/', brandController.post)

module.exports = router