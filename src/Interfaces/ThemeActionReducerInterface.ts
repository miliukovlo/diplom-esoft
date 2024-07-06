import { ThemeReducerInterface } from "./ThemeReducerInterface";

export default interface ThemeActionReducerInterface {
    type: string,
    payload: ThemeReducerInterface | number
}