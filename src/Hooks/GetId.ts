import { useSelector } from "react-redux"
import { RootState } from "../data/reducers/store"
import { ProjectInterface } from "../Interfaces/ProjectInterface"
import { CommentInterface } from "../Interfaces/CommentInterface"

export const GetId = (type: string): number => {
    const allProjects = useSelector((state : RootState) => state.projects.projects as ProjectInterface[])
    const allComments = useSelector((state : RootState) => state.comments.comments as CommentInterface[])
    switch(type) {
        case 'comment':
            const tryCommentId: number = Math.floor(Math.random() * 1000000)
            let finalCommentId: number = 0
            if (allComments.find(comment => comment.id === tryCommentId)) {
                GetId(type)
            } else {
                finalCommentId = tryCommentId
            }
            return finalCommentId
        case 'project':
            const tryProjectId: number = Math.floor(Math.random() * 1000000)
            let finalProjectId: number = 0
            if (allProjects.find(project => project.id === tryProjectId)) {
                GetId(type)
            } else {
                finalProjectId = tryProjectId
            }
            return finalProjectId
        default:
            return 0
    }
}