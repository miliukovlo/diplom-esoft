import { useSelector } from "react-redux"
import { RootState } from "../data/reducers/store"
import { ProjectInterface } from "../Interfaces/ProjectInterface"

export const useGetProjectsForCompany = (companyId: string | undefined) => {
    const allProjects = useSelector((state : RootState) => state.projects.projects as ProjectInterface[])
    if (companyId) {
        const projectsForCompany = allProjects.filter((project) => project.companyId === companyId)
        return projectsForCompany
    } else {
        return null
    }
}