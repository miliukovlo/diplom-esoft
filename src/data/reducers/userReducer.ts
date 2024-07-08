import UserActionInterface from "../../Interfaces/UserActionInterface"
import { UserInterface } from "../../Interfaces/UserInterface"

const defaultUser = {
    user: [{
        firstName: 'Aleksey',
        lastName: 'Petrov',
        username: 'someName',
        email: 'example@mail.ru',
        phone: '+79998886655',
        id: 1234534534,
        isAdmin: true,
        companyId: 'someCompany3'
    }] as UserInterface[]
}

const ADD_USER = "ADD_USER"
const REMOVE_USER = "REMOVE_USER"

export const userReducer = (state = defaultUser, action: UserActionInterface) => {
    switch (action.type) {
        case ADD_USER:
            return {...state, user: [...state.user, action.payload]}
        case REMOVE_USER:
            return {...state, user: state.user.filter(user => user.id !== action.payload)}
        default:
            return state
    }
}

export const addFavoriteCompany = (payload: UserInterface) => ({type: ADD_USER, payload})
export const removeFavoriteCompany = (payload: string) => ({type: REMOVE_USER, payload}) 