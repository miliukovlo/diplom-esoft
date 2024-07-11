const { DataTypes } = require("sequelize");
const sequelize = require("../Database/DatabaseInfo");

class ProjectModel {
    constructor() {
        this.ProjectScheme = sequelize.define(
            'projects',
            {
                project_id: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    unique: true,
                    primaryKey: true
                },
                project_name: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                company_id: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    references: {
                        model: 'companies',
                        key: 'company_id'
                    }
                },
                logo: {
                    type: DataTypes.STRING,
                    allowNull: true,
                },
                description: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                project_type: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                watch: {
                    type: DataTypes.INTEGER,
                    defaultValue: 0,
                }
            }
        )
    }

    async syncModel() {
        return await this.ProjectScheme.sync()
    }

    async getAllProjects() {
        const projects = await this.ProjectScheme.findAll()
        if (!projects) {
            return {error: 'Не удалось найти проекты!'}
        }
        return projects
    }

    async getProjectById(company_id,project_id) {
        const project = await this.ProjectScheme.findOne({
            where: {
                project_id: project_id,
                company_id: company_id
            }
        })
        if (!project) {
            return {error: 'Не удалось найти проект'}
        }
        return project
    }
    async getProjectByCompanyId(company_id) {
        const projects = await this.ProjectScheme.findAll({
            where: {
                company_id: company_id
            }
        })
        if (!projects) {
            return {error: 'Не удалось найти проект'}
        }
        return projects
    }
    async createProject(
        project_id,
        project_name,
        company_id,
        logo,
        description,
        project_type,
    ) {
        const project = await this.ProjectScheme.create({
            project_id: project_id,
            project_name: project_name,
            company_id: company_id,
            logo: logo,
            description: description,
            project_type: project_type
        })
        return project
    }
}

module.exports = new ProjectModel()


