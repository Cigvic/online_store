const Router = require('express')
const router = new Router()
const deviceController = require('./deviceController')

router.post('/', deviceController.create)
router.get('/', deviceController.getAll)
router.delete('/', deviceController.deleteOne)
router.get('/one/:id', deviceController.getOne)
router.get('/new', deviceController.new)
router.post('/rating', deviceController.rating)

// test getRating delete this
router.post('/getRating', deviceController.getRating)

module.exports = router