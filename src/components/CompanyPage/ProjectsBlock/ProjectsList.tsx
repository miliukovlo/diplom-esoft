import React from 'react';
import './ProjectsBlockStyle.css'
import Project from './Project/Project';
import { useGetForCompany } from '../../../Hooks/useGetForCompany';
import { ProjectInterface } from '../../../Interfaces/ProjectInterface';

interface ProjectsListProps {
    companyId: string
}

const ProjectsList: React.FC<ProjectsListProps> = React.memo(({
    companyId
}: ProjectsListProps) => {

    const projectsOfCompany = useGetForCompany<ProjectInterface[]>('project', companyId)
    console.log(projectsOfCompany)
    return (
        <div className='projects-list'>
            {projectsOfCompany !== undefined && projectsOfCompany.length !== 0 ?
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
