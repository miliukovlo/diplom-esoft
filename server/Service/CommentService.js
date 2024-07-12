class CommentService {
    constructor(commentModel) {
        this.commentModel = commentModel
    }

    async syncModel() {
        try {
            return await this.commentModel.syncModel()
        } catch(e) {
            return e
        }
    }

    async getAllComments() {
        try {
            const comments = await this.commentModel.getAllComments()
            return comments
        } catch (e) {
            return e
        }
    }


    async getCommentsForCompany(company_id, body) {
        try {
            const {for_company} = body
            const comments = await this.commentModel.getCommentsForCompany(company_id, for_company)
            return comments
        } catch (e) {
            return e
        }
    }

    async getCommentsForProject(company_id,project_id, body) {
        try {
            const {for_project} = body
            const comment = await this.commentModel.getCommentsForProject(company_id,project_id, for_project)
            return comment
        } catch (e) {
            return e
        }
    }
    
    async getCommentsForApartment(company_id,project_id,apartment_id, body) {
        try {
            const {for_apartment} = body
            const comment = await this.commentModel.getCommentsForApartment(company_id,project_id,apartment_id, for_apartment)
            return comment
        } catch (e) {
            return e
        }
    }
    async createComment(body) {
        try {
            const {
                project_id,
                apartment_id,
                company_id,
                comment_data,
                for_company,
                for_project,
                for_apartment,
                username,
                comment_id,
            } = body
            const comment = await this.commentModel.createComment(
                project_id,
                apartment_id,
                for_company,
                for_project,
                for_apartment,
                company_id,
                comment_data,
                username,
                comment_id,
            )
            return comment
        } catch (e) {
            return e
        }
    }
}

module.exports = CommentService