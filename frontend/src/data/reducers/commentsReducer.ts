import CommentActionReducerInterface from "../../Interfaces/CommentActionReducerInterface"
import { CommentInterface } from "../../Interfaces/CommentInterface"

const defaultCompanies = {
    comments: [] as CommentInterface[]
}

const ADD_COMMENT_COMPANY = "ADD_COMMENT_COMPANY"
const CLEAR_COMMENT = "CLEAR_COMMENT"

export const commentsReducer = (state = defaultCompanies, action: CommentActionReducerInterface) => {
    switch (action.type) {
        case ADD_COMMENT_COMPANY:
            return {...state, comments: [...state.comments, action.payload]}
        case CLEAR_COMMENT:
            return{...state, comments: []}
        default:
            return state
    }
}

export const addComment = (payload: CommentInterface) => ({type: ADD_COMMENT_COMPANY, payload})
export const clearComment = () => ({type: CLEAR_COMMENT})
