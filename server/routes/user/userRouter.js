const Router = require('express')
const router = new Router()
const userController = require('./userController')

router.post('/', userController.create)
router.get('/', userController.getAll)
router.delete('/', userController.delete)
router.post('/', userController.post)

module.exports = router