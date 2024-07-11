class ApartmentController {
    constructor(apartmentService) {
        this.apartmentService = apartmentService
    }

    async syncModel() {
        return await this.apartmentService.syncModel()
    }

    getApartmentsForProject = async (req, res) => {
        try {
            const {project_id} = req.params
            const apartments = await this.apartmentService.getApartmentsForProject(project_id)
            if (!apartments || apartments.length === 0) {
                res.status(404).json({error: 'Проектов нет в системе!'})
                return
            }
            res.status(200).json(apartments)
        }catch (error) {
            res.status(500).json({error: error.message})
        }
    }

    getApartmentById = async (req, res) => {
        try {
            const {project_id, apartment_id} = req.params
            const apartment = await this.apartmentService.getApartmentById(project_id, apartment_id)
            if (!apartment || apartment.length === 0) {
                res.status(404).json({error: 'Планировки нет в системе!'})
                return
            }
            res.status(200).json(apartment)
        } catch (error) {
            res.status(500).json({error: error.message})
        }
    }

    createApartment = async (req,res) => {
        try {
            const apartment = await this.apartmentService.createApartment(req.body)
            if (!apartment || apartment.length === 0) {
                res.status(404).json({error: 'Не удалось создать планировку!'})
                return
            }
            res.status(200).json(apartment)
        } catch (error) {
            res.status(500).json({error: error.message})
        }
    }
}

module.exports = ApartmentController