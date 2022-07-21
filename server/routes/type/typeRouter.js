const Router = require('express')
const router = new Router()
const typeController = require('./typeController')
const checkRole = require('../../middleware/checkRoleMiddleware')

router.post('/',/*checkRole(1),*/ typeController.create)
router.get('/', typeController.getAll)
router.delete('/', typeController.deleteOne)
//router.post('/', typeController.post)

module.exports = router