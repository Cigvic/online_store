const Router = require('express')
const router = new Router()
const deviceController = require('./deviceController')

router.post('/', deviceController.create)
router.get('/', deviceController.getAll)
router.delete('/', deviceController.deleteOne)
//router.post('/', deviceController.post)

module.exports = router