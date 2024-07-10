export interface UserInterface {
    firstName: string | null,
    lastName: string | null,
    username: string | null,
    email: string | null,
    phone: string | null,
    isAdmin: boolean,
    companyId?: string | null,
    image?: string | null,
    theme?: string | null
}