const Router = require('express')

module.exports = (commentController) => {
    const router = new Router()

    router.get('/', commentController.getAllComments)
    router.get('/:company_id', commentController.getCommentsForCompany)
    router.get('/:project_id', commentController.getCommentsForProject)
    router.get('/:apartment_id', commentController.getCommentsForApartment)
    router.post('/', commentController.createComment)

    return router
}