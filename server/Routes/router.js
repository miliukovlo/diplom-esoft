const express = require('express');
const UserRoutes = require('./UserRoutes');
const CompaniesRoutes = require('./CompaniesRoutes');
const ProjectRouter = require('./ProjectRouter');
const ApartmentsRoutes = require('./ApartmentsRoutes');

module.exports = (
    userController, 
    companyController, 
    projectController,
    apartmentController,
) => {
    const router = express.Router()
    const userRoutes = UserRoutes(userController)
    const companyRoutes = CompaniesRoutes(companyController)
    const projectRoutes = ProjectRouter(projectController)
    const apartmentRoutes = ApartmentsRoutes(apartmentController)

    router.use('/users', userRoutes)
    router.use('/company', companyRoutes)
    router.use('/project', projectRoutes)
    router.use('/apartment', apartmentRoutes)

    return router
};