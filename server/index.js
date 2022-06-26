require('dotenv').config()
const  express = require('express')
const sequelize = require('./dbConnect')
const database = require('./database/database')
const router = require('./routes/index')

const PORT = process.env.PORT
const app = express()
app.use('/api',router)

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
