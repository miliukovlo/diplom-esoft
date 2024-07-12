import { useSelector } from "react-redux"
import { RootState } from "../data/reducers/store"
import { ProjectInterface } from "../Interfaces/ProjectInterface"
import { CommentInterface } from "../Interfaces/CommentInterface"
import { ApartmentInterface } from "../Interfaces/ApartmentInterface"
import { RequestUserInterface } from "../Interfaces/RequestUserInterface"

export const GetId = (type: string): void => {
    // const allProjects = useSelector((state : RootState) => state.projects.projects as ProjectInterface[])
    // const allComments = useSelector((state : RootState) => state.comments.comments as CommentInterface[])
    // const allApartments = useSelector((state : RootState) => state.apartments.apartments as ApartmentInterface[])
    // const allRequests = useSelector((state: RootState) => state.requests.requests as RequestUserInterface[])

    // switch(type) {
    //     case 'comment':
    //         const tryCommentId: number = Math.floor(Math.random() * 10000000)
    //         let finalCommentId: number = 0
    //         if (allComments.find(comment => comment.id === tryCommentId)) {
    //             GetId(type)
    //         } else {
    //             finalCommentId = tryCommentId
    //         }
    //         return finalCommentId
    //     case 'project':
    //         const tryProjectId: number = Math.floor(Math.random() * 10000000)
    //         let finalProjectId: number = 0
    //         if (allProjects.find(project => project.id === tryProjectId)) {
    //             GetId(type)
    //         } else {
    //             finalProjectId = tryProjectId
    //         }
    //         return finalProjectId
    //     case 'apartment':
    //         const tryApartmentId: number = Math.floor(Math.random() * 10000000)
    //         let finalApartmentId: number = 0
    //         if (allApartments.find(project => project.id === tryApartmentId)) {
    //             GetId(type)
    //         } else {
    //             finalApartmentId = tryApartmentId
    //         }
    //         return finalApartmentId
    //     case 'request':
    //         const tryRequestId: number = Math.floor(Math.random() * 10000000)
    //         let finalRequestId: number = 0
    //         if (allRequests.find(request => request.id === tryRequestId)) {
    //             GetId(type)
    //         } else {
    //             finalRequestId = tryRequestId
    //         }
    //         return finalRequestId
    //     default:
    //         return 0
    // }
}