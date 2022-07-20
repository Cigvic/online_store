const Router = require('express')
const router = new Router()
const basketDeviceController = require('./basketDeviceController')

router.get('/basket/:basketId', basketDeviceController.getAll)
router.post('/', basketDeviceController.add)
router.delete('/', basketDeviceController.deleteOne)
router.delete('/deleteAll', basketDeviceController.deleteAll)

module.exports = router