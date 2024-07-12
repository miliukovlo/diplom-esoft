const Router = require('express')

module.exports = (requestsController) => {
    const router = new Router()

    router.get('/', requestsController.getAllRequests)
    router.get('/:company_id', requestsController.getRequestsForCompany)
    router.post('/', requestsController.createRequest)
    router.delete('/', requestsController.deleteRequest)

    return router
}