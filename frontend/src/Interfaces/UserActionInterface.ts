import { UserInterface } from "./UserInterface";

export default interface UserActionInterface {
    type: string,
    payload: UserInterface | number
}