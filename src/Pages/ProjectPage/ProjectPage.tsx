import React from 'react';
import { useGetForCompany } from '../../Hooks/useGetForCompany';
import { ProjectInterface } from '../../Interfaces/ProjectInterface';
import { Params, useParams } from 'react-router-dom';
import ProjectContent from '../../components/ProjectPage/ProjectContent';

const ProjectPage = () => {

    const params: Readonly<Params<string>> = useParams()

    const id: number = Number(params.projectId)

    const currentProject: ProjectInterface = useGetForCompany<ProjectInterface>('project-by-id',params.id, id)!

    console.log(currentProject)

    return (
        <main className='main'>
            <ProjectContent
                title={currentProject.title}
                rating={currentProject.rating}
                poster={currentProject.poster}
                description={currentProject.description}
                id={currentProject.id}
                type={currentProject.type}
                companyId={currentProject.companyId}
            />
        </main>
    );
}

export default ProjectPage;
