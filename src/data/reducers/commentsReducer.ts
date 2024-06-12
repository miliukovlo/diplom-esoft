import { CommentInterface } from "../../Interfaces/CommentInterface"
import CompanyActionReducerInterface from "../../Interfaces/CompanyActionReducerInterface"
import CompanyInterface from "../../Interfaces/CompanyInterface"

const defaultCompanies = {
    comments: [] as CommentInterface[]
}

const ADD_COMMENT_COMPANY = "ADD_COMMENT_COMPANY"

export const commentsReducer = (state = defaultCompanies, action: CompanyActionReducerInterface) => {
    switch (action.type) {
        case ADD_COMMENT_COMPANY:
            return {...state, comments: [...state.comments, action.payload]}
        default:
            return state
    }
}

export const addComment = (payload: CompanyInterface) => ({type: ADD_COMMENT_COMPANY, payload})
