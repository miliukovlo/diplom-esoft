import React from 'react';
import './ProjectContentStyle.css'
import { ProjectInterface } from '../../Interfaces/ProjectInterface';
import ProjectImage from './ProjectImage/ProjectImage';
import ProjectInfo from './ProjectInfo/ProjectInfo';
import ProjectRequest from './ProjectRequest/ProjectRequest';
import CommentList from '../Common/CommentList/CommentList';
import { useTextarea } from '../../Hooks/useTextarea';
import ProjectApartmentList from './ProjectApartmentList/ProjectApartmentList';

export interface ProjectContentProps extends ProjectInterface {
    theme: string
}

const ProjectContent: React.FC<ProjectContentProps> = React.memo(({
    title,
    id,
    description,
    posterUrl,
    type,
    companyId,
    theme
}: ProjectContentProps) => {

    const commentValue = useTextarea<string>('')

    return (
        <div className='project-content'>
            <h1 className={theme === 'dark' ? 'project-content__title light-title' : 'project-content__title dark-title'}>{title}</h1>
            <ProjectImage
                posterUrl={posterUrl}
            />
            <ProjectInfo
                type={type}
                description={description}
                theme={theme}
            />
            <ProjectRequest/>
            <ProjectApartmentList
                projectId={id}
                companyId={companyId}
                theme={theme}
            />
            <CommentList
                type={'project'}
                forWho='project'
                value={commentValue.value}
                onChange={commentValue.onChange}
                setValue={commentValue.setValue}
                projectId={id}
                theme={theme}
            />
        </div>
    );
})

export default ProjectContent;
