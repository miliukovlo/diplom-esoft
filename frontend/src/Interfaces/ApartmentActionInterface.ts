import { ApartmentInterface } from "./ApartmentInterface";

export default interface ApartmentActionInterface {
    type: string,
    payload: ApartmentInterface | string
}