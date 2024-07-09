const express = require('express')
const dotenv = require('dotenv')
const sequelize = require('./Database/DatabaseInfo')
const cors = require('cors')

dotenv.config()

const app = express()
const port = process.env.PORT || 5000

app.use(express.json())
app.use(cors())

const start = async () => {
    try {
        await sequelize.authenticate()
        app.listen(port, () => {
            console.log(`Сервер запущен на ${port} порту`)
        })
    } catch (e) {
        console.log(e)
        console.log('Не удалось подключиться к базе данных')
    }
}
start()