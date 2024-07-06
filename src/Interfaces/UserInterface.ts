export interface UserInterface {
    firstName: string,
    lastName: string,
    username: string,
    email: string,
    phone: string,
    id: number,
    password: string,
    isAdmin: boolean,
    companyId?: string,
    image?: string,
    theme?: string
}