const Router = require('express')

module.exports = (projectController) => {
    const router = new Router()


    router.get('/', projectController.getAllProjects)
    router.get('/:company_id', projectController.getProjectByCompanyId)
    router.get('/:company_id/:project_id', projectController.getProjectById)
    router.post('/', projectController.createProject)

    return router
}