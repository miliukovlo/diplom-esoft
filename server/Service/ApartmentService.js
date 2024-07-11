class ApartmentService {
    constructor(apartmentModel) {
        this.apartmentModel = apartmentModel
    }

    async syncModel() {
        try {
            return await this.apartmentModel.syncModel()
        } catch(e) {
            return e
        }
    }

    async getApartmentsForProject(project_id) {
        try {
            const apartments = await this.apartmentModel.getApartmentsForProject(project_id)
            return apartments
        } catch (e) {
            return e
        }
    }

    async getApartmentById(project_id, apartment_id) {
        try {
            const apartment = await this.apartmentModel.getApartmentById(project_id, apartment_id)
            return apartment
        } catch (e) {
            return e
        }
    }
    async createApartment(body) {
        try {
            const {
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
            } = body
            const apartment = await this.apartmentModel.createApartment(
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
            )
            return apartment
        } catch (e) {
            return e
        }
    }
}

module.exports = ApartmentService