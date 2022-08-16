const Router = require('express')
const router = new Router()
const orderController = require('./orderController')

router.get('/all/:userId', orderController.getAll)
router.post('/', orderController.create)
//router.delete('/', orderController.deleteOne)

module.exports = router