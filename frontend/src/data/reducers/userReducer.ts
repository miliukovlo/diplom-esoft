import UserActionInterface from "../../Interfaces/UserActionInterface"
import { UserInterface } from "../../Interfaces/UserInterface"

const defaultUser = {
    user: [{
        firstName: null,
        lastName: null,
        username: null,
        email: null,
        phone: null,
        id: null,
        isAdmin: false,
        companyId: null,
        image: null,
        theme: null
    }] as UserInterface[]
}

const ADD_USER = "ADD_USER"
const REMOVE_USER = "REMOVE_USER"

export const userReducer = (state = defaultUser, action: UserActionInterface) => {
    switch (action.type) {
        case ADD_USER:
            return {...state, user: [action.payload]}
        default:
            return state
    }
}

export const addUser = (payload: UserInterface) => ({type: ADD_USER, payload})