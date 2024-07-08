import React from 'react';
import { useGetForCompany } from '../../Hooks/useGetForCompany';
import { ProjectInterface } from '../../Interfaces/ProjectInterface';
import { Params, useParams } from 'react-router-dom';
import ProjectContent from '../../components/ProjectPage/ProjectContent';
import { useSelector } from 'react-redux';
import { RootState } from '../../data/reducers/store';
import { ThemeReducerInterface } from '../../Interfaces/ThemeReducerInterface';

const ProjectPage = () => {

    const params: Readonly<Params<string>> = useParams()

    const id: number = Number(params.projectId)

    const currentProject: ProjectInterface = useGetForCompany<ProjectInterface>('project-by-id',params.id, id)!

    const theme = useSelector((state : RootState) => state.theme.theme as ThemeReducerInterface)

    return (
        <main className={theme.theme === 'dark' ? 'main dark-back' : 'main light-back'}>
            <ProjectContent
                title={currentProject.title}
                poster={currentProject.poster}
                description={currentProject.description}
                id={currentProject.id}
                type={currentProject.type}
                companyId={currentProject.companyId}
                theme={theme.theme}
                watch={currentProject.watch}
            />
        </main>
    );
}

export default ProjectPage;
