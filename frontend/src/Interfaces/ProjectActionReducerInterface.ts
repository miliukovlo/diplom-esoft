import { ProjectInterface } from "./ProjectInterface";

export default interface ProjectActionReducerInterface {
    type: string,
    payload: ProjectInterface | number | string
}