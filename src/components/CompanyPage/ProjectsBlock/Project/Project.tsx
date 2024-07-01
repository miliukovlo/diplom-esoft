import React from 'react';
import './ProjectStyle.css'
import { ProjectInterface } from '../../../../Interfaces/ProjectInterface';

const Project: React.FC<ProjectInterface> = React.memo(({
    title,
    poster,
    id,
    type,
    description,
    rating
}: ProjectInterface) => {
    return (
        <div className='project-block'>
            <div className="project-block__poster-block">
                <img src={poster} alt="Постер проекта" className='poster'/>
            </div>
            <div className="project-block__info">
                <h2 className="info-title">{title}</h2>
                <p className="info-text">Тип проекта: {type === 'Жилой комплекс' ? 'Жилой комплекс' : 'Частные дома'}</p>
                <p className="info-text">Описание: {description}</p>
                <p className="info-text">Рейтинг: {rating}</p>
            </div>
        </div>
    );
})

export default Project;
