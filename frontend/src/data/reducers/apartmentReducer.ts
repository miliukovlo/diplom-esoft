import ApartmentActionInterface from "../../Interfaces/ApartmentActionInterface"
import { ApartmentInterface } from "../../Interfaces/ApartmentInterface"

const defaultApartments = {
    apartments: [] as ApartmentInterface[]
}

const ADD_APARTMENT = "ADD_APARTMENT"
const CLEAR_APARTMENT = "CLEAR_APARTMENT"

export const apartmentReducer = (state = defaultApartments, action: ApartmentActionInterface) => {
    switch (action.type) {
        case ADD_APARTMENT:
            return {...state, apartments: [...state.apartments, action.payload]}
        case CLEAR_APARTMENT:
            return {...state, apartments: []}
        default:
            return state
    }
}

export const addApartment = (payload: ApartmentInterface) => ({type: ADD_APARTMENT, payload})
export const clearApartment = () => ({type: CLEAR_APARTMENT})
