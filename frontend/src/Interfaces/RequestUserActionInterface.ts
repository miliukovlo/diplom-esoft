
import { RequestUserInterface } from "./RequestUserInterface";

export default interface RequestUserActionInterface {
    type: string,
    payload: RequestUserInterface | number
}