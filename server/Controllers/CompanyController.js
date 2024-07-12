class CompanyController {
    constructor(companyService) {
        this.companyService = companyService
    }

    async syncModel() {
        return await this.companyService.syncModel()
    }

    getAllCompanies = async (req, res) => {
        try {
            const companies = await this.companyService.getAllCompanies()
            if (!companies) {
                res.status(404).json({error: 'Компаний нет в системе!'})
                return
            }
            res.status(200).json(companies)
        }catch (error) {
            res.status(500).json({error: error.message})
        }
    }

    getCompanyById = async (req, res) => {
        try {
            const {company_id} = req.params
            const company = await this.companyService.getCompanyById(company_id)
            if (!company) {
                res.status(404).json({error: 'Компаний нет в системе!'})
                return
            }
            res.status(200).json(company)
        } catch (error) {
            res.status(500).json({error: error.message})
        }
    }
    createCompany = async (req,res) => {
        try {
            const company = await this.companyService.createCompany(req.body)
            if (!company || company.length === 0) {
                res.status(404).json({error: 'Не удалось создать компнию!'})
                return
            }
            res.status(200).json(company)
        } catch (error) {
            res.status(500).json({error: error.message})
        }
    }
}

module.exports = CompanyController