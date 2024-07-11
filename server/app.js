const express = require('express')
const dotenv = require('dotenv')
const sequelize = require('./Database/DatabaseInfo')
const cors = require('cors')
const router = require('./Routes/router')
//Пользователи
const UserModel = require('./Models/UserModel')
const UserController = require('./Controllers/UsersController')
const UserService = require('./Service/UserService')
//Компании
const CompanyModel = require('./Models/CompanyModel')
const CompanyController = require('./Controllers/CompanyController')
const CompanyService = require('./Service/CompanyService')
//Проекты
const ProjectModel = require('./Models/ProjectModel')
const ProjectController = require('./Controllers/ProjectController')
const ProjectService = require('./Service/ProjectService')
//Пользователи
const userService = new UserService(UserModel)
const userController = new UserController(userService)
//Компании
const companyService = new CompanyService(CompanyModel)
const companyController = new CompanyController(companyService)
//Проекты
const projectService = new ProjectService(ProjectModel)
const projectController = new ProjectController(projectService)

dotenv.config()

const app = express()
const port = process.env.PORT || 5000

app.use(express.json())
app.use(cors())
app.use('/api', router(
    userController, 
    companyController, 
    projectController

))   

const start = async () => {
    try {
        await sequelize.authenticate()
        await companyController.syncModel()
        await projectController.syncModel()
        await userController.syncModel()
        app.listen(port, () => {
            console.log(`Сервер запущен на ${port} порту`)
        })
    } catch (e) {
        console.log(e)
        console.log('Не удалось подключиться к базе данных')
    }
}
start()