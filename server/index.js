require('dotenv').config()
const  express = require('express')
const sequelize = require('./dbConnect')
const database = require('./database/database')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const router = require('./routes/index')
const errorHandler = require('./middleware/errorHandlerMiddleware')
const path = require('path')

const PORT = process.env.PORT

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname,'images')))
app.use(fileUpload({}))
app.use('/api', router)

app.use(errorHandler)


const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT,() => console.log (`Server started port: ${PORT}`))
    }  catch (e) {
        console.log(e)
    }
}
start()
