const { DataTypes } = require("sequelize");
const sequelize = require("../Database/DatabaseInfo");


class ApartmentModel {
    constructor() {
        this.ApartmentScheme = sequelize.define(
            'apartments',
            {
                project_id: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    unique: false,
                    references: {
                        model: 'projects',
                        key: 'project_id'
                    }
                },
                apartment_name: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                apartment_id: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    unique: true,
                    primaryKey: true
                },
                square: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                },
                apartment_cost: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                },
                rooms: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                },
                amount: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                },
                have_balcony: {
                    type: DataTypes.BOOLEAN,
                    allowNull: false,
                },
                is_sale: {
                    type: DataTypes.BOOLEAN,
                    allowNull: false,
                },
                company_id: {
                    type: DataTypes.STRING,
                    allowNull: true,
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
                apartment_type: {
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
        return await this.ApartmentScheme.sync()
    }

    async getAllApartments() {
        const apartments = await this.ApartmentScheme.findAll()
        if (!apartments) {
            return {error: 'Не удалось найти планировки!'}
        }
        return apartments
    }

    async getApartmentsForProject(project_id) {
        const apartments = await this.ApartmentScheme.findAll({
            where: {
                project_id:project_id
            }
        })
        if (!apartments) {
            return {error: 'Не удалось найти проекты!'}
        }
        return apartments
    }

    async getApartmentById(project_id, apartment_id) {
        const apartment = await this.ApartmentScheme.findOne({
            where: {
                project_id: project_id,
                apartment_id: apartment_id
            }
        })
        if (!apartment) {
            return {error: 'Не удалось найти проект'}
        }
        return apartment
    }
    async createApartment(
        project_id,
        apartment_name,
        square,
        rooms,
        amount,
        apartment_cost,
        have_balcony,
        is_sale,
        apartment_id,
        company_id,
        logo,
        description,
        apartment_type,
    ) {
        const apartment = await this.ApartmentScheme.create({
            project_id: project_id,
            apartment_name: apartment_name,
            square: square,
            rooms: rooms,
            amount: amount,
            apartment_cost: apartment_cost,
            have_balcony: have_balcony,
            is_sale: is_sale,
            apartment_id: apartment_id,
            company_id: company_id,
            logo: logo,
            description: description,
            apartment_type: apartment_type,
        })
        return apartment
    }
}

module.exports = new ApartmentModel()


