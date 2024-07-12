import React, { useEffect, useRef } from 'react';
import './ProjectsBlockStyle.css'
import Project from './Project/Project';
import { useGetForCompany } from '../../../Hooks/useGetForCompany';
import { ProjectInterface } from '../../../Interfaces/ProjectInterface';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addProject, clearProject } from '../../../data/reducers/ProjectsReducer';
import { RootState } from '../../../data/reducers/store';
import { useParams } from 'react-router-dom';

interface ProjectsListProps {
    theme: string,
    forWho: string,
    companyId: string
}

const ProjectsList: React.FC<ProjectsListProps> = React.memo(({
    theme,
    forWho,
    companyId
}: ProjectsListProps) => {
    const params = useParams()
    const paramsCompanyId = params.companyId
    const dispatch = useDispatch()
    const projectsOfCompany = useGetForCompany<ProjectInterface[]>('project', companyId)!
    const projects = useSelector((state : RootState) => state.projects.projects as ProjectInterface[])
    const effectRef = useRef(false)

    useEffect(() => {
        if (effectRef.current === false) {
            const getProjects = async () => {
                const getProjects = await axios.get(`http://localhost:3760/api/project/${companyId ? companyId : paramsCompanyId}`)
                return getProjects.data
            }
            getProjects().then(async (projectsList) => {
                dispatch(clearProject());
                for (const project of projectsList) {
                    try {
                        if (!projects.some(proj => proj.id === project.id)) {
                            dispatch(addProject({
                                title: project.project_name,
                                id: project.project_id,
                                type: project.project_type,
                                description: project.description,
                                posterUrl: "https://msk.vnovoselie.ru/wp-content/uploads/2021/03/10-Ostrov.jpg",
                                companyId: project.company_id,
                                watch: project.watch,
                                poster: undefined
                            }));
                        }
                    } catch (error) {
                        console.error(error);
                    }
                }
            })
            effectRef.current = true
        }
    },[companyId, dispatch, projectsOfCompany, projects])
    return (
        <div className={theme === 'dark' ? 'projects-list list-black' : 'projects-list list-light'}>
            {projectsOfCompany !== undefined && projectsOfCompany.length !== 0 ?
                projectsOfCompany?.map((project) => {
                    return (
                        <Project
                            title={project.title}
                            posterUrl={project.posterUrl}
                            description={project.description}
                            poster={project.poster}
                            type={project.type}
                            companyId={project.companyId}
                            id={project.id}
                            key={project.id}
                            theme={theme}
                            watch={project.watch}
                            forWho={forWho}
                        />
                    )
                })
            :
            <h3 className={theme === 'dark' ? 'no-projects light-title' : 'no-projects dark-title'}>Проектов пока что нет!</h3>
            }
        </div>
    );
})

export default ProjectsList;
