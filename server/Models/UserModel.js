const { DataTypes } = require("sequelize");
const sequelize = require("../Database/DatabaseInfo");

class UserModel {
    constructor() {
        this.UserScheme = sequelize.define(
            'users_lists',
            {
                first_name: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                last_name: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                username: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    unique: false,
                    primaryKey: true
                },
                email: {
                    type: DataTypes.STRING,
                    allowNull: true,
                    unique: true
                },
                phone: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    unique: false
                },
                is_admin: {
                    type: DataTypes.BOOLEAN,
                    allowNull: false
                },
                company_id: {
                    type: DataTypes.STRING,
                    allowNull: true,
                    references: {
                        model: 'companies',
                        key: 'company_id'
                    }
                },
                image_url: {
                    type: DataTypes.STRING,
                    allowNull: true,
                },
                theme: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    defaultValue: 'dark'
                },
                user_password: {
                    type: DataTypes.STRING,
                    allowNull: false
                }
            }
        )
    }

    async syncModel() {
        return await this.UserScheme.sync()
    }

    async getAllUsers() {
        const users = await this.UserScheme.findAll()
        if (!users) {
            return {error: 'Не удалось найти пользователей'}
        }
        return users
    }

    async getUserByUsername(username) {
        const user = await this.UserScheme.findOne({
            where: {
                username: username
            }
        })
        if (!user) {
            return {error: 'Не удалось найти пользователя'}
        }
        return user
    }
    async createUser(
        first_name,
        last_name,
        username,
        email,
        phone,
        is_admin,
        company_id,
        image_url,
        password
    ) {
        const user = await this.UserScheme.create({
            first_name: first_name,
            last_name: last_name,
            username: username,
            email: email,
            phone: phone,
            is_admin: is_admin,
            company_id: company_id,
            image_url: image_url,
            theme: 'dark',
            user_password: password
        })
        return user
    }
}

module.exports = new UserModel()


