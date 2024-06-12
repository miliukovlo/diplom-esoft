import { useSelector } from "react-redux"
import { RootState } from "../data/reducers/store"
import { CommentInterface } from "../Interfaces/CommentInterface"

export const GetIdForComment = (): number => {
    const allComments = useSelector((state : RootState) => state.comments.comments as CommentInterface[])
    const tryCommentId: number = Math.floor(Math.random() * 1000000)
    let finalCommentId: number = 0
    if (allComments.find(comment => comment.id === tryCommentId)) {
        GetIdForComment()
    } else {
        finalCommentId = tryCommentId
    }
    return finalCommentId
}