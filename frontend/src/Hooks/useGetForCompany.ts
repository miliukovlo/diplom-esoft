import { useSelector } from "react-redux"
import { RootState } from "../data/reducers/store"
import { ProjectInterface } from "../Interfaces/ProjectInterface"
import { CommentInterface } from "../Interfaces/CommentInterface"
import CompanyInterface from "../Interfaces/CompanyInterface"
import { ApartmentInterface } from "../Interfaces/ApartmentInterface"
import { RequestUserInterface } from "../Interfaces/RequestUserInterface"

export const useGetForCompany = <T> (type: string, companyId: string | undefined, projectId?: number | string | undefined, apartmentId?: number | string | undefined,): T | undefined=> {
    const allProjects = useSelector((state : RootState) => state.projects.projects as ProjectInterface[])
    const allComments = useSelector((state : RootState) => state.comments.comments as CommentInterface[])
    const allCompanies = useSelector((state : RootState) => state.companies.companies as CompanyInterface[])
    const allApartments = useSelector((state : RootState) => state.apartments.apartments as ApartmentInterface[])
    const allRequests = useSelector((state: RootState) => state.requests.requests as RequestUserInterface[])

    switch(type) {
        case 'comment-for-company':
            if (companyId) {
                const commentsForCompany = allComments.filter((comments) => comments.companyId === companyId && comments.projectId === null && comments.apartmentId === null)
                return commentsForCompany as T
            } else {
                return undefined
            }
        case 'requests-for-company':
            if (companyId) {
                const allRequestsForCompany = allRequests.filter((request) => request.companySend === companyId)
                return allRequestsForCompany as T
            } else {
                return undefined
            }
        case 'comment-for-project':
            if (projectId) {
                const commentsForCompany = allComments.filter((comments) => comments.companyId === null && comments.projectId === projectId && comments.apartmentId === null)
                return commentsForCompany as T
            } else {
                return undefined
            }
        case 'comment-for-apartment':
            if (apartmentId) {
                const commentsForApartment = allComments.filter((comments) => comments.companyId === null && comments.projectId === null && comments.apartmentId === apartmentId)
                return commentsForApartment as T
            } else {
                return undefined
            }
        case 'project':
            if (companyId) {
                const projectsForCompany = allProjects.filter((project) => project.companyId === companyId)
                return projectsForCompany as T
            } else {
                return undefined
            }
        case 'apartments':
            if (projectId) {
                const apartmentsForProject = allApartments.filter((apartment) => apartment.projectId === projectId)
                return apartmentsForProject as T
            } else {
                return undefined
            }
        case 'company':
            if (companyId) {
                const currentCompany = allCompanies.find((company) => company.id === companyId)
                return currentCompany as T
            } else {
                return undefined
            }
        case 'project-by-id':
            if (projectId) {
                const currentProject = allProjects.filter((project) => project.id === projectId)
                return currentProject[0] as T
            } else {
                return undefined
            }
        case 'apartment-by-id':
            if (apartmentId) {
                const currentApartment = allApartments.filter((apartment) => apartment.id === apartmentId)
                return currentApartment[0] as T
            } else {
                return undefined
            }
        default:
            console.error('Вы указали неверный тип!')
    }
}