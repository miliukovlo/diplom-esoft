const Router = require('express')

module.exports = (apartmentController) => {
    const router = new Router()


    router.get('/:project_id', apartmentController.getApartmentsForProject)
    router.get('/:project_id/:apartment_id', apartmentController.getApartmentById)
    router.post('/', apartmentController.createApartment)

    return router
}