const Router = require('express')
const router = new Router()
const deviceController = require('./deviceController')

router.post('/', deviceController.create)
router.get('/', deviceController.getAll)
router.delete('/', deviceController.deleteOne)
router.get('/one', deviceController.getOne)
router.get('/new', deviceController.new)

module.exports = router