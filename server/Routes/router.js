const express = require('express');
const UserRoutes = require('./UserRoutes');
const CompaniesRoutes = require('./CompaniesRoutes');
const ProjectRouter = require('./ProjectRouter');
const ApartmentsRoutes = require('./ApartmentsRoutes');
const CommentsRoutes = require('./CommentsRoutes');

module.exports = (
    userController, 
    companyController, 
    projectController,
    apartmentController,
    commentsController
) => {
    const router = express.Router()
    const userRoutes = UserRoutes(userController)
    const companyRoutes = CompaniesRoutes(companyController)
    const projectRoutes = ProjectRouter(projectController)
    const apartmentRoutes = ApartmentsRoutes(apartmentController)
    const commentRoutes = CommentsRoutes(commentsController)

    router.use('/users', userRoutes)
    router.use('/company', companyRoutes)
    router.use('/project', projectRoutes)
    router.use('/apartment', apartmentRoutes)
    router.use('/comment', commentRoutes)

    return router
};