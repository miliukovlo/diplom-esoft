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
                }
            }
        )
    }

    async syncModel() {
        return await this.RequestScheme.sync()
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
    ) {
        const request = await this.RequestScheme.create({
            project_id,
            apartment_id,
            company_id,
            username,
            request_id,
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


