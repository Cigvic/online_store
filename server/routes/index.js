const Router = require('express')
const router = new Router()
const brandRouter = require('./brand/brandRouter')
const deviceRouter = require('./device/deviceRouter')
const typeRouter = require('./type/typeRouter')
const userRouter = require('./user/userRouter')

router.use('/brand',brandRouter)
router.use('/device',deviceRouter)
router.use('/type',typeRouter)
router.use('/user',userRouter)


module.exports = router