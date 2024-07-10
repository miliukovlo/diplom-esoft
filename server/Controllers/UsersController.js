class UserController {
    constructor(userService) {
        this.userService = userService
    }

    async syncModel() {
        return await this.userService.syncModel()
    }

    getAllUsers = async (req, res) => {
        try {
            const users = await this.userService.getAllUsers()
            if (!users || users.length === 0) {
                res.status(404).json({error: 'Пользователя нет в системе!'})
                return
            }
            res.status(200).json(users)
        }catch (error) {
            res.status(500).json({error: error.message})
        }
    }

    getUserByUsername = async (req, res) => {
        try {
            const {username} = req.params
            const user = await this.userService.getUserByUsername(username)
            if (!user || user.length === 0) {
                res.status(404).json({error: 'Пользователя нет в системе!'})
                return
            }
            res.status(200).json(user)
        } catch (error) {
            res.status(500).json({error: error.message})
        }
    }
    createUser = async (req,res) => {
        try {
            const user = await this.userService.createUser(req.body)
            if (!user || user.length === 0) {
                res.status(404).json({error: 'Не удалось создать пользователя!'})
                return
            }
            res.status(200).json(user)
        } catch (error) {
            res.status(500).json({error: error.message})
        }
    }
}

module.exports = UserController