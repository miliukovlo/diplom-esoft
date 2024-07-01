import React from 'react';
import './ProjectsBlockStyle.css'
import { useGetProjectsForCompany } from '../../../Hooks/GetProjectsForCompany';
import Project from './Project/Project';

interface ProjectsListProps {
    companyId: string
}

const ProjectsList: React.FC<ProjectsListProps> = React.memo(({
    companyId
}: ProjectsListProps) => {

    const projectsOfCompany = useGetProjectsForCompany(companyId)

    return (
        <div className='projects-list'>
            {projectsOfCompany !== null && projectsOfCompany.length !== 0 ?
                projectsOfCompany?.map((project) => {
                    return (
                        <Project
                        title={project.title}
                        rating={project.rating}
                        description={project.description}
                        poster={project.poster}
                        type={project.type}
                        companyId={project.companyId}
                        id={project.id}
                        key={project.id}
                        />
                    )
                })
            :
            <h3>Проектов пока что нет!</h3>
            }
        </div>
    );
})

export default ProjectsList;
