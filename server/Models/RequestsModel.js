const { DataTypes } = require("sequelize");
const sequelize = require("../Database/DatabaseInfo");

class RequestsModel {
    constructor() {
        this.RequestScheme = sequelize.define(
            'requests',
            {
                project_id: {
                    type: DataTypes.STRING,
                    allowNull: true,
                    unique: false,
                    references: {
                        model: 'projects',
                        key: 'project_id'
                    }
                },
                request_id: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    unique: true,
                    primaryKey: true
                },
                apartment_id: {
                    type: DataTypes.STRING,
                    allowNull: true,
                    references: {
                        model: 'apartments',
                        key: 'apartment_id'
                    }
                },
                company_id: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    references: {
                        model: 'companies',
                        key: 'company_id'
                    }
                },
                username: {
                    type: DataTypes.STRING,
                    allowNull: true,
                    references: {
                        model: 'users_lists',
                        key: 'username'
                    }
                },
                first_name: {
                    type: DataTypes.STRING,
                    allowNull: true,
                },
                last_name: {
                    type: DataTypes.STRING,
                    allowNull: true,
                },
                email: {
                    type: DataTypes.STRING,
                    allowNull: true,
                },
                phone: {
                    type: DataTypes.STRING,
                    allowNull: true,
                },
            }
        )
    }

    async syncModel() {
        return await this.RequestScheme.sync()
    }

    async getAllRequests() {
        const requests = await this.RequestScheme.findAll()
        if (!requests) {
            return {error: 'Не удалось найти комментарии для компании!'}
        }
        return requests
    }
    
    async getRequestsForCompany(company_id) {
        const requests = await this.RequestScheme.findAll({
            where: {
                company_id:company_id,
            }
        })
        if (!requests) {
            return {error: 'Не удалось найти комментарии для компании!'}
        }
        return requests
    }
    async createRequest(
        project_id,
        apartment_id,
        company_id,
        username,
        request_id,
        first_name,
        last_name,
        email,
        phone
    ) {
        const request = await this.RequestScheme.create({
            project_id,
            apartment_id,
            company_id,
            username,
            request_id,
            first_name,
            last_name,
            email,
            phone
        })
        return request
    }
    async deleteRequest(
        request_id,
    ) {
        const request = await this.RequestScheme.destroy({
            where: {
                request_id: request_id
            }
        })
        return request
    }
}

module.exports = new RequestsModel()


