class CommentController {
    constructor(commentService) {
        this.commentService = commentService
    }

    async syncModel() {
        return await this.commentService.syncModel()
    }

    getCommentsForCompany = async (req, res) => {
        try {
            const {company_id} = req.params
            const comments = await this.commentService.getCommentsForCompany(company_id, req.body)
            if (!comments || comments.length === 0) {
                res.status(404).json({error: 'Комментариев к компании нет в системе!'})
                return
            }
            res.status(200).json(comments)
        }catch (error) {
            res.status(500).json({error: error.message})
        }
    }

    getCommentsForProject = async (req, res) => {
        try {
            const {company_id, project_id} = req.params
            const comments = await this.commentService.getCommentsForProject(company_id, project_id, req.body)
            if (!comments || comments.length === 0) {
                res.status(404).json({error: 'Комментариев к проекту нет в системе!'})
                return
            }
            res.status(200).json(comments)
        } catch (error) {
            res.status(500).json({error: error.message})
        }
    }

    getCommentsForApartment = async (req, res) => {
        try {
            const {company_id, project_id, apartment_id} = req.params
            const comments = await this.commentService.getCommentsForApartment(company_id, project_id, apartment_id, req.body)
            if (!comments || comments.length === 0) {
                res.status(404).json({error: 'Комментариев к планировке нет в системе!'})
                return
            }
            res.status(200).json(comments)
        } catch (error) {
            res.status(500).json({error: error.message})
        }
    }

    createComment = async (req,res) => {
        try {
            const comments = await this.commentService.createComment(req.body)
            if (!comments || comments.length === 0) {
                res.status(404).json({error: 'Не удалось создать планировку!'})
                return
            }
            res.status(200).json(comments)
        } catch (error) {
            res.status(500).json({error: error.message})
        }
    }
}

module.exports = CommentController