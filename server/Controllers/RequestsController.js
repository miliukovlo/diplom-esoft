class RequestController {
    constructor(requestsService) {
        this.requestsService = requestsService
    }

    async syncModel() {
        return await this.requestsService.syncModel()
    }

    getRequestsForCompany = async (req, res) => {
        try {
            const {company_id} = req.params
            const requests = await this.requestsService.getRequestsForCompany(company_id)
            if (!requests || requests.length === 0) {
                res.status(404).json({error: 'Заявок к компании нет в системе!'})
                return
            }
            res.status(200).json(requests)
        }catch (error) {
            res.status(500).json({error: error.message})
        }
    }

    createRequest = async (req,res) => {
        try {
            const request = await this.requestsService.createRequest(req.body)
            if (!request || request.length === 0) {
                res.status(404).json({error: 'Не удалось создать заявку!'})
                return
            }
            res.status(200).json(request)
        } catch (error) {
            res.status(500).json({error: error.message})
        }
    }

    deleteRequest = async (req,res) => {
        try {
            const request = await this.requestsService.deleteRequest(req.body)
            if (!request || request.length === 0) {
                res.status(404).json({error: 'Не удалось удалить заявку!'})
                return
            }
            res.status(200).json(request)
        } catch (error) {
            res.status(500).json({error: error.message})
        }
    }
}

module.exports = RequestController