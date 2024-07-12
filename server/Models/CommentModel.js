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
                for_company: {
                    type: DataTypes.BOOLEAN,
                    allowNull: false,
                },
                for_project: {
                    type: DataTypes.BOOLEAN,
                    allowNull: true,
                },
                for_apartment: {
                    type: DataTypes.BOOLEAN,
                    allowNull: true,
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
        return await this.CommentScheme.sync()
    }

    async getAllComments() {
        const comments = await this.CommentScheme.findAll()
        if (!comments) {
            return {error: 'Не удалось найти комментарии для компании!'}
        }
        return comments
    }
    
    async getCommentsForCompany(company_id, for_company) {
        const comments = await this.CommentScheme.findAll({
            where: {
                company_id:company_id,
                for_company: for_company
            }
        })
        if (!comments) {
            return {error: 'Не удалось найти комментарии для компании!'}
        }
        return comments
    }

    async getCommentsForProject(company_id,project_id, for_project) {
        const comments = await this.CommentScheme.findAll({
            where: {
                company_id: company_id,
                project_id: project_id,
                for_project: for_project
            }
        })
        if (!comments) {
            return {error: 'Не удалось найти комментарии для проекта!'}
        }
        return comments
    }

    async getCommentsForApartment(company_id, project_id, apartment_id, for_apartment) {
        const comments = await this.CommentScheme.findAll({
            where: {
                company_id: company_id,
                project_id: project_id,
                apartment_id: apartment_id,
                for_apartment: for_apartment
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
        for_company,
        for_project,
        for_apartment,
        company_id,
        comment_data,
        username,
        comment_id,
    ) {
        const comment = await this.CommentScheme.create({
            project_id: project_id,
            apartment_id: apartment_id,
            company_id: company_id,
            for_company: for_company,
            for_project: for_project,
            for_apartment: for_apartment,
            comment_data: comment_data,
            username: username,
            comment_id: comment_id,
        })
        return comment
    }
}

module.exports = new CommentModel()


