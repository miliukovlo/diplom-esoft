import ProjectActionReducerInterface from "../../Interfaces/ProjectActionReducerInterface"
import { ProjectInterface } from "../../Interfaces/ProjectInterface"

const defaultProjects = {
    projects: [
        {
            title: 'Название проекта',
            poster: 'https://msk.vnovoselie.ru/wp-content/uploads/2021/03/ZHK_Skandinaviya.jpg',
            id: 14277124,
            type: 'Жилой комплекс',
            description: 'Описание...',
            rating: 5,
            companyId: 'someCompany3'
        },
        {
            title: 'Название проекта',
            poster: 'https://msk.vnovoselie.ru/wp-content/uploads/2021/03/ZHK_Skandinaviya.jpg',
            id: 14277122,
            type: 'Жилой комплекс',
            description: 'Описание...',
            rating: 5,
            companyId: 'someCompany3'
        },
    ] as ProjectInterface[]
}

const ADD_PROJECT = "ADD_PROJECT"
const REMOVE_PROJECT = "REMOVE_PROJECT"

export const projectsReducer = (state = defaultProjects, action: ProjectActionReducerInterface) => {
    switch (action.type) {
        case ADD_PROJECT:
            return {...state, projects: [...state.projects, action.payload]}
        case REMOVE_PROJECT:
            return {...state, projects: state.projects.filter(project => project.id !== action.payload)}
        default:
            return state
    }
}

export const addProject = (payload: ProjectInterface) => ({type: ADD_PROJECT, payload})
export const removeProject = (payload: string) => ({type: REMOVE_PROJECT, payload}) 