import RequestUserActionInterface from "../../Interfaces/RequestUserActionInterface"
import { RequestUserInterface } from "../../Interfaces/RequestUserInterface"

const defaultRequest = {
    requests: [] as RequestUserInterface[]
}

const ADD_USER_REQUEST = "ADD_USER_REQUEST"
const REMOVE_USER_REQUEST = "REMOVE_USER_REQUEST"
const CLEAR_USER_REQUEST = "CLEAR_USER_REQUEST"

export const requestReducer = (state = defaultRequest, action: RequestUserActionInterface) => {
    switch (action.type) {
        case ADD_USER_REQUEST:
            return {...state, requests: [...state.requests, action.payload]}
        case REMOVE_USER_REQUEST:
            return {...state, requests: state.requests.filter(request => request.id !== action.payload)}
        case CLEAR_USER_REQUEST: 
            return {...state, requests: []}
        default:
            return state
    }
}

export const addUserRequest = (payload: RequestUserInterface) => ({type: ADD_USER_REQUEST, payload})
export const removeUserRequest = (payload: string) => ({type: REMOVE_USER_REQUEST, payload})
export const clearUserRequests = () => ({type: CLEAR_USER_REQUEST}) 