class RequestsService {
    constructor(requestsModel) {
        this.requestsModel = requestsModel
    }

    async syncModel() {
        try {
            return await this.requestsModel.syncModel()
        } catch(e) {
            return e
        }
    }

    async getRequestsForCompany(company_id) {
        try {
            const requests = await this.requestsModel.getRequestsForCompany(company_id)
            return requests
        } catch (e) {
            return e
        }
    }
    async createRequest(body) {
        try {
            const {
                project_id,
                apartment_id,
                company_id,
                username,
                request_id,
            } = body
            const request = await this.requestsModel.createRequest(
                project_id,
                apartment_id,
                company_id,
                username,
                request_id,
            )
            return request
        } catch (e) {
            return e
        }
    }
    async deleteRequest(body) {
        try {
            const {
                request_id,
            } = body
            const request = await this.requestsModel.deleteRequest(
                request_id,
            )
            return request
        } catch (e) {
            return e
        }
    }
}

module.exports = RequestsService