import { CommentInterface } from "./CommentInterface";

export default interface CommentActionReducerInterface {
    type: string,
    payload: CommentInterface | string
}