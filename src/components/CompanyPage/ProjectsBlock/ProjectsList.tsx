import React from 'react';
import './ProjectsBlockStyle.css'
import Project from './Project/Project';
import { useGetForCompany } from '../../../Hooks/useGetForCompany';
import { ProjectInterface } from '../../../Interfaces/ProjectInterface';

interface ProjectsListProps {
    companyId: string,
    theme: string
}

const ProjectsList: React.FC<ProjectsListProps> = React.memo(({
    companyId,
    theme
}: ProjectsListProps) => {

    const projectsOfCompany = useGetForCompany<ProjectInterface[]>('project', companyId)
    return (
        <div className={theme === 'dark' ? 'projects-list list-black' : 'projects-list list-light'}>
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
                            theme={theme}
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
