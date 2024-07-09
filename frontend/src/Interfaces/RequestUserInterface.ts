import { UserInterface } from "./UserInterface";

export interface RequestUserInterface extends UserInterface {
    companySend: string,
    projectId: number,
    apartmentId: number,
    userId: number
}