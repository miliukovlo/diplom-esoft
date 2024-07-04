import React from 'react';
import './ProjectContentStyle.css'
import { ProjectInterface } from '../../Interfaces/ProjectInterface';
import ProjectImage from './ProjectImage/ProjectImage';
import ProjectInfo from './ProjectInfo/ProjectInfo';
import ProjectRequest from './ProjectRequest/ProjectRequest';
import CommentList from '../Common/CommentList/CommentList';
import { useTextarea } from '../../Hooks/useTextarea';
import ProjectApartmentList from './ProjectApartmentList/ProjectApartmentList';

const ProjectContent: React.FC<ProjectInterface> = React.memo(({
    poster,
    title,
    id,
    description,
    type,
    rating,
    companyId
}: ProjectInterface) => {

    const commentValue = useTextarea<string>('')

    return (
        <div className='project-content'>
            <h1 className='project-content__title'>{title}</h1>
            <ProjectImage
                poster={poster}
            />
            <ProjectInfo
                type={type}
                rating={rating}
                description={description}
            />
            <ProjectRequest/>
            <ProjectApartmentList
                projectId={id}
                companyId={companyId}
            />
            <CommentList
                type={'project'}
                value={commentValue.value}
                onChange={commentValue.onChange}
                setValue={commentValue.setValue}
                projectId={id}
            />
        </div>
    );
})

export default ProjectContent;
