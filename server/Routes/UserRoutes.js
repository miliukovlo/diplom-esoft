const Router = require('express')

module.exports = (userController) => {
    const router = new Router()

    router.get('/', userController.getUserByUsername)
    router.post('/', userController.createUser)

    return router
}