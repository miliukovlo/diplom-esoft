import React from 'react';
import './ProjectStyle.css'
import { ProjectInterface } from '../../../../Interfaces/ProjectInterface';
import { Link } from 'react-router-dom';

export interface ProjectPropsInterface extends ProjectInterface {
    theme: string
}

const Project: React.FC<ProjectPropsInterface> = React.memo(({
    title,
    poster,
    id,
    type,
    description,
    rating,
    companyId,
    theme
}: ProjectPropsInterface) => {

    return (
        <Link to={`/company/${companyId}/project/${id}`} className='project-block__link'>
            <div className={theme === 'dark' ? 'project-block project-block-dark' : 'project-block project-block-light'}>
                <div className="project-block__poster-block">
                    <img src={poster} alt="Постер проекта" className='poster'/>
                </div>
                <div className="project-block__info">
                    <h2 className={theme === 'dark' ? "info-title light-title" : 'info-title dark-title'}>{title}</h2>
                    <p className={theme === 'dark' ? "info-text light-title" : 'info-text dark-title'}>Тип проекта: {type === 'Жилой комплекс' ? 'Жилой комплекс' : 'Частные дома'}</p>
                    <p className={theme === 'dark' ? "info-text light-title" : 'info-text dark-title'}>Описание: {description}</p>
                    <p className={theme === 'dark' ? "info-text light-title" : 'info-text dark-title'}>Рейтинг: {rating}</p>
                </div>
            </div>
        </Link>
    );
})

export default Project;
