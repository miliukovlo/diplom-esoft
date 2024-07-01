import React from 'react';
import './ProjectStyle.css'
import { ProjectInterface } from '../../../../Interfaces/ProjectInterface';

const Project: React.FC<ProjectInterface> = ({
    title,
    poster,
    id,
    type,
    description,
    rating
}: ProjectInterface) => {
    return (
        <div className='project-block'>
            
        </div>
    );
}

export default Project;
