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

    async getAllRequests() {
        try {
            const requests = await this.requestsModel.getAllRequests()
            return requests
        } catch (e) {
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
                first_name,
                last_name,
                email,
                phone
            } = body
            const request = await this.requestsModel.createRequest(
                project_id,
                apartment_id,
                company_id,
                username,
                request_id,
                first_name,
                last_name,
                email,
                phone
            )
            return request
        } catch (e) {
            return e
        }
    }
    async deleteRequest(request_id) {
        try {
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