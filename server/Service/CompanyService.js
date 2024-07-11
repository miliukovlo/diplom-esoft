class CompanyService {
    constructor(companyModel) {
        this.companyModel = companyModel
    }

    async syncModel() {
        try {
            return await this.companyModel.syncModel()
        } catch(e) {
            return e
        }
    }

    async getAllCompanies() {
        try {
            const companies = await this.companyModel.getAllCompanies()
            return companies
        } catch (e) {
            return e
        }
    }

    async getCompanyById(company_id) {
        try {
            const company = await this.companyModel.getCompanyById(company_id)
            return company
        } catch (e) {
            return e
        }
    }
    async createCompany(body) {
        try {
            const {
                company_id,
                company_name,
                logo,
                slogan,
                specialization,
            } = body
            const company = await this.companyModel.createCompany(
                company_id,
                company_name,
                logo,
                slogan,
                specialization,
            )
            return company
        } catch (e) {
            return e
        }
    }
}

module.exports = CompanyService