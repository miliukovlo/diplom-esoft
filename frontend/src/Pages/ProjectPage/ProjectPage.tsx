import React from 'react';
import { useGetForCompany } from '../../Hooks/useGetForCompany';
import { ProjectInterface } from '../../Interfaces/ProjectInterface';
import { useParams } from 'react-router-dom';
import ProjectContent from '../../components/ProjectPage/ProjectContent';
import { useSelector } from 'react-redux';
import { RootState } from '../../data/reducers/store';
import { ThemeReducerInterface } from '../../Interfaces/ThemeReducerInterface';

const ProjectPage = () => {

    const params = useParams();
    const id = params.projectId;

    const currentProject: ProjectInterface | undefined = useGetForCompany<ProjectInterface>('project-by-id', params.id, id);

    const theme = useSelector((state: RootState) => state.theme.theme as ThemeReducerInterface);

    if (!currentProject) {
        return <div>Loading...</div>;
    }

    return (
        <main className={theme.theme === 'dark' ? 'main dark-back' : 'main light-back'}>
            <ProjectContent
                posterUrl={'https://msk.vnovoselie.ru/wp-content/uploads/2021/09/sidney-siti-moskva-jk-1002721217-10.jpg'}
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
