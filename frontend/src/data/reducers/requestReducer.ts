import RequestUserActionInterface from "../../Interfaces/RequestUserActionInterface"
import { RequestUserInterface } from "../../Interfaces/RequestUserInterface"

const defaultRequest = {
    requests: [{
        firstName: 'Aleksey',
        lastName: 'Petrov',
        username: 'someName',
        email: 'example@mail.ru',
        phone: '+79998886655',
        isAdmin: true,
        companyId: 'someCompany3',
        companySend: 'someCompany3',
        id: 1238814
    }] as RequestUserInterface[]
}

const ADD_USER_REQUEST = "ADD_USER_REQUEST"
const REMOVE_USER_REQUEST = "REMOVE_USER_REQUEST"

export const requestReducer = (state = defaultRequest, action: RequestUserActionInterface) => {
    switch (action.type) {
        case ADD_USER_REQUEST:
            return {...state, requests: [...state.requests, action.payload]}
        case REMOVE_USER_REQUEST:
            return {...state, requests: state.requests.filter(request => request.id !== action.payload)}
        default:
            return state
    }
}

export const addUserRequest = (payload: RequestUserInterface) => ({type: ADD_USER_REQUEST, payload})
export const removeUserRequest = (payload: number) => ({type: REMOVE_USER_REQUEST, payload}) 