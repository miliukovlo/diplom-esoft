const express = require('express');
const UserRoutes = require('./UserRoutes');
const CompaniesRoutes = require('./CompaniesRoutes')

module.exports = (userController, companyController) => {
    const router = express.Router()
    const userRoutes = UserRoutes(userController)
    const companyRoutes = CompaniesRoutes(companyController)

    router.use('/users', userRoutes)
    router.use('/company', companyRoutes)

    return router
};