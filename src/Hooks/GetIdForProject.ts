import { useSelector } from "react-redux"
import { RootState } from "../data/reducers/store"
import { ProjectInterface } from "../Interfaces/ProjectInterface"

export const GetIdForProjects = (): number => {
    const allProjects = useSelector((state : RootState) => state.projects.projects as ProjectInterface[])
    const tryProjectId: number = Math.floor(Math.random() * 1000000)
    let finalProjectId: number = 0
    if (allProjects.find(project => project.id === tryProjectId)) {
        GetIdForProjects()
    } else {
        finalProjectId = tryProjectId
    }
    return finalProjectId
}