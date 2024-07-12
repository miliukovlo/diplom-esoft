class CompanyController {
    constructor(projectService) {
        this.projectService = projectService
    }

    async syncModel() {
        return await this.projectService.syncModel()
    }

    getAllProjects = async (req, res) => {
        try {
            const projects = await this.projectService.getAllProjects()
            if (!projects) {
                res.status(404).json({error: 'Проектов нет в системе!'})
                return
            }
            res.status(200).json(projects)
        }catch (error) {
            res.status(500).json({error: error.message})
        }
    }

    getProjectById = async (req, res) => {
        try {
            const {company_id, project_id} = req.params
            const project = await this.projectService.getProjectById(company_id, project_id)
            if (!project || project.length === 0) {
                res.status(404).json({error: 'Компаний нет в системе!'})
                return
            }
            res.status(200).json(project)
        } catch (error) {
            res.status(500).json({error: error.message})
        }
    }

    getProjectByCompanyId = async (req, res) => {
        try {
            const {company_id} = req.params
            const project = await this.projectService.getProjectByCompanyId(company_id)
            if (!project || project.length === 0) {
                res.status(404).json({error: 'Компаний нет в системе!'})
                return
            }
            res.status(200).json(project)
        } catch (error) {
            res.status(500).json({error: error.message})
        }
    }

    createProject = async (req,res) => {
        try {
            const project = await this.projectService.createProject(req.body)
            if (!project || project.length === 0) {
                res.status(404).json({error: 'Не удалось создать компнию!'})
                return
            }
            res.status(200).json(project)
        } catch (error) {
            res.status(500).json({error: error.message})
        }
    }
}

module.exports = CompanyController