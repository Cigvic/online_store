const Router = require('express')
const router = new Router()
const brandController = require('./brandController')

router.post('/', brandController.create)
router.get('/', brandController.getAll)
router.delete('/', brandController.deleteOne)
//router.post('/', brandController.post)

module.exports = router