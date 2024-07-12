const { DataTypes } = require("sequelize");
const sequelize = require("../Database/DatabaseInfo");


class CommentModel {
    constructor() {
        this.CommentScheme = sequelize.define(
            'comments',
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
                comment_data: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                comment_id: {
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
                    allowNull: true,
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
        return await this.CommentScheme.sync()
    }

    async getAllComments() {
        const comments = await this.CommentScheme.findAll()
        if (!comments) {
            return {error: 'Не удалось найти комментарии для компании!'}
        }
        return comments
    }
    
    async getCommentsForCompany(company_id) {
        const comments = await this.CommentScheme.findAll({
            where: {
                company_id:company_id,
            }
        })
        if (!comments) {
            return {error: 'Не удалось найти комментарии для компании!'}
        }
        return comments
    }

    async getCommentsForProject(project_id, ) {
        const comments = await this.CommentScheme.findAll({
            where: {
                project_id: project_id,
            }
        })
        if (!comments) {
            return {error: 'Не удалось найти комментарии для проекта!'}
        }
        return comments
    }

    async getCommentsForApartment( apartment_id, ) {
        const comments = await this.CommentScheme.findAll({
            where: {
                apartment_id: apartment_id,
            }
        })
        if (!comments) {
            return {error: 'Не удалось найти проект'}
        }
        return comments
    }
    async createComment(
        project_id,
        apartment_id,
        company_id,
        comment_data,
        username,
        comment_id,
    ) {
        const comment = await this.CommentScheme.create({
            project_id: project_id,
            apartment_id: apartment_id,
            company_id: company_id,
            comment_data: comment_data,
            username: username,
            comment_id: comment_id,
        })
        return comment
    }
}

module.exports = new CommentModel()


