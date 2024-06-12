import CommentActionReducerInterface from "../../Interfaces/CommentActionReducerInterface"
import { CommentInterface } from "../../Interfaces/CommentInterface"

const defaultCompanies = {
    comments: [] as CommentInterface[]
}

const ADD_COMMENT_COMPANY = "ADD_COMMENT_COMPANY"

export const commentsReducer = (state = defaultCompanies, action: CommentActionReducerInterface) => {
    switch (action.type) {
        case ADD_COMMENT_COMPANY:
            return {...state, comments: [...state.comments, action.payload]}
        default:
            return state
    }
}

export const addComment = (payload: CommentInterface) => ({type: ADD_COMMENT_COMPANY, payload})
