import { useSelector } from "react-redux"
import { RootState } from "../data/reducers/store"
import { ProjectInterface } from "../Interfaces/ProjectInterface"
import { CommentInterface } from "../Interfaces/CommentInterface"
import { ApartmentInterface } from "../Interfaces/ApartmentInterface"

export const GetId = (type: string): number => {
    const allProjects = useSelector((state : RootState) => state.projects.projects as ProjectInterface[])
    const allComments = useSelector((state : RootState) => state.comments.comments as CommentInterface[])
    const allApartments = useSelector((state : RootState) => state.apartments.apartments as ApartmentInterface[])
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
        case 'apartment':
            const tryApartmentId: number = Math.floor(Math.random() * 1000000)
            let finalApartmentId: number = 0
            if (allApartments.find(project => project.id === tryApartmentId)) {
                GetId(type)
            } else {
                finalApartmentId = tryApartmentId
            }
            return finalApartmentId
        default:
            return 0
    }
}