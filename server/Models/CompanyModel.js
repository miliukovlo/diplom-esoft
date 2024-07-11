const { DataTypes } = require("sequelize");
const sequelize = require("../Database/DatabaseInfo");

class CompanyModel {
    constructor() {
        this.CompanyScheme = sequelize.define(
            'companies',
            {
                company_id: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    unique: true,
                    primaryKey: true
                },
                company_name: {
                    type: DataTypes.STRING,
                    unique: false,
                    allowNull: false,
                },
                logo: {
                    type: DataTypes.STRING,
                    allowNull: true,
                },
                slogan: {
                    type: DataTypes.STRING,
                    allowNull: true,
                },
                specialization: {
                    type: DataTypes.STRING,
                    allowNull: true,
                }
            }
        )
    }

    async syncModel() {
        return await this.CompanyScheme.sync()
    }

    async getAllCompanies() {
        const companies = await this.CompanyScheme.findAll()
        if (!companies) {
            return {error: 'Не удалось найти компании'}
        }
        return companies
    }

    async getCompanyById(company_id) {
        const company = await this.CompanyScheme.findOne({
            where: {
                company_id: company_id
            }
        })
        if (!company) {
            return {error: 'Не удалось найти компанию'}
        }
        return company
    }
    async createCompany(
        company_id,
        company_name,
        logo,
        slogan,
        specialization,
    ) {
        const company = await this.CompanyScheme.create({
            company_id: company_id,
            company_name: company_name,
            logo: logo,
            slogan: slogan,
            specialization: specialization,
        })
        return company
    }
}

module.exports = new CompanyModel()


