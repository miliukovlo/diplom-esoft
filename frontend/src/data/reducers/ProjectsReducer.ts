import ProjectActionReducerInterface from "../../Interfaces/ProjectActionReducerInterface"
import { ProjectInterface } from "../../Interfaces/ProjectInterface"

const defaultProjects = {
    projects: []  as ProjectInterface[]
}

const ADD_PROJECT = "ADD_PROJECT"
const REMOVE_PROJECT = "REMOVE_PROJECT"
const CLEAR_PROJECT = "CLEAR_PROJECT"

export const projectsReducer = (state = defaultProjects, action: ProjectActionReducerInterface) => {
    switch (action.type) {
        case ADD_PROJECT:
            return {...state, projects: [...state.projects, action.payload]}
        case REMOVE_PROJECT:
            return {...state, projects: state.projects.filter(project => project.id !== action.payload)}
        case CLEAR_PROJECT:
            return {...state, projects: []}
        default:
            return state
    }
}

export const addProject = (payload: ProjectInterface) => ({type: ADD_PROJECT, payload})
export const removeProject = (payload: string) => ({type: REMOVE_PROJECT, payload})
export const clearProject = () => ({type: CLEAR_PROJECT}) 