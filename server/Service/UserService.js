class UserService {
    constructor(userModel) {
        this.userModel = userModel
    }

    async syncModel() {
        try {
            return await this.userModel.syncModel()
        } catch(e) {
            return e
        }
    }

    async getAllUsers() {
        try {
            const users = await this.userModel.getAllUsers()
            return users
        } catch (e) {
            return e
        }
    }

    async getUserByUsername(username) {
        try {
            const user = await this.userModel.getUserByUsername(username)
            return user
        } catch (e) {
            return e
        }
    }
    async createUser(body) {
        try {
            const {
                first_name,
                last_name,
                username,
                email,
                phone,
                is_admin,
                company_id,
                image_url,
                password
            } = body
                const user = await this.userModel.createUser(
                    first_name,
                    last_name,
                    username,
                    email,
                    phone,
                    is_admin,
                    company_id,
                    image_url,
                    password
                )
                return user
        } catch (e) {
            return e
        }
    }
    async updateUser(username, body) {
        try {
            const user = await this.userModel.updateUser(username, body)
            return user
        } catch (e) {
            return e
        }
    }
}

module.exports = UserService