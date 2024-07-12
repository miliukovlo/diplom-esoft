const Router = require('express')

module.exports = (commentController) => {
    const router = new Router()


    router.get('/:company_id', commentController.getCommentsForCompany)
    router.get('/:company_id/:project_id', commentController.getCommentsForProject)
    router.get('/:company_id/:project_id/:apartment_id', commentController.getCommentsForApartment)
    router.post('/', commentController.createComment)

    return router
}