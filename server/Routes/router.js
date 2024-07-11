const express = require('express');
const UserRoutes = require('./UserRoutes');
const CompaniesRoutes = require('./CompaniesRoutes');
const ProjectRouter = require('./ProjectRouter');

module.exports = (userController, companyController, projectController) => {
    const router = express.Router()
    const userRoutes = UserRoutes(userController)
    const companyRoutes = CompaniesRoutes(companyController)
    const projectRoutes = ProjectRouter(projectController)

    router.use('/users', userRoutes)
    router.use('/company', companyRoutes)
    router.use('/project', projectRoutes)

    return router
};