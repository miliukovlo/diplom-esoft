import React from 'react';
import './ProjectContentStyle.css'
import { ProjectInterface } from '../../Interfaces/ProjectInterface';

const ProjectContent: React.FC<ProjectInterface> = ({
    poster,
    title,
    id,
    description,
    type,
    rating,
    companyId
}: ProjectInterface) => {

    return (
        <div className='project-content'>
            <h1 className='project-content__title'>{title}</h1>
            <div className="project-content__image-block">
                <img src={poster} alt="Постер проекта" className='project-content__image' />
            </div>
        </div>
    );
}

export default ProjectContent;
