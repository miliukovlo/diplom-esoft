import ApartmentActionInterface from "../../Interfaces/ApartmentActionInterface"
import { ApartmentInterface } from "../../Interfaces/ApartmentInterface"

const defaultApartments = {
    apartments: [
        {
            title: 'Однокомнатная квартира',
            poster: 'https://i.pinimg.com/736x/2e/a4/6e/2ea46e0932586c1a19d1ebff4773e3e5.jpg',
            description: 'Описание...',
            cost: 4699000,
            square: 32.5,
            rooms: 1,
            companyId: 'someCompany3',
            projectId: 14277124,
            id: 14277121,
            haveBalcony: true,
            amount: 103,
            isSale: true,
            rating: 4.78
        }
    ] as ApartmentInterface[]
}

const ADD_APARTMENT = "ADD_APARTMENT"

export const apartmentReducer = (state = defaultApartments, action: ApartmentActionInterface) => {
    switch (action.type) {
        case ADD_APARTMENT:
            return {...state, apartments: [...state.apartments, action.payload]}
        default:
            return state
    }
}

export const addApartment = (payload: ApartmentInterface) => ({type: ADD_APARTMENT, payload})
