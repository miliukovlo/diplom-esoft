class ProjectService {
    constructor(projectModel) {
        this.projectModel = projectModel
    }

    async syncModel() {
        try {
            return await this.projectModel.syncModel()
        } catch(e) {
            return e
        }
    }

    async getAllProjects() {
        try {
            const projects = await this.projectModel.getAllProjects()
            return projects
        } catch (e) {
            return e
        }
    }

    async getProjectById(company_id, project_id) {
        try {
            const project = await this.projectModel.getProjectById(company_id, project_id)
            return project
        } catch (e) {
            return e
        }
    }
    async getProjectByCompanyId(company_id) {
        try {
            const projects = await this.projectModel.getProjectByCompanyId(company_id)
            return projects
        } catch (e) {
            return e
        }
    }
    async createProject(body) {
        try {
            const {
                project_id,
                project_name,
                company_id,
                logo,
                description,
                project_type,
            } = body
            const project = await this.projectModel.createProject(
                project_id,
                project_name,
                company_id,
                logo,
                description,
                project_type,
            )
            return project
        } catch (e) {
            return e
        }
    }
}

module.exports = ProjectService