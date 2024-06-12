import { useSelector } from "react-redux"
import { RootState } from "../data/reducers/store"
import { CommentInterface } from "../Interfaces/CommentInterface"

export const useGetCommentsForCompany = (companyId: string | undefined) => {
    const allComments = useSelector((state : RootState) => state.comments.comments as CommentInterface[])
    if (companyId) {
        const commentsForCompany = allComments.filter((comments) => comments.companyId === companyId)
        return commentsForCompany
    } else {
        return null
    }
}