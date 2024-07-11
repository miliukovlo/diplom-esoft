const Router = require('express')

module.exports = (companyController) => {
    const router = new Router()


    router.get('/', companyController.getAllCompanies)
    router.get('/:company_id', companyController.getCompanyById)
    router.post('/', companyController.createCompany)

    return router
}