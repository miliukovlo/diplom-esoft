export interface CommentInterface {
    id: string,
    projectId?: string,
    commentData: string,
    forCompany: boolean,
    forProject: boolean,
    forApartment: boolean,
    apartmentId?: string,
    companyId: string,
    username: string
}