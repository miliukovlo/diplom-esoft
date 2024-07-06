import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectApartmentBlockStyle.css'

interface ProjectApartmentBlockProps {
    title: string,
    cost: number,
    rating: number,
    companyId: string,
    projectId: number,
    id: number,
    type: string,
    poster: string,
    description: string,
    theme: string
}

const ProjectApartmentBlock: React.FC<ProjectApartmentBlockProps> = React.memo(({
    title,
    cost,
    rating,
    companyId,
    projectId,
    id,
    type,
    poster,
    description,
    theme
}: ProjectApartmentBlockProps) => {
    return (
        <Link to={`/company/${companyId}/project/${projectId}/apartment/${id}`} className='project-block__link'>
            <div className={theme === 'dark' ? 'project-block project-block-dark' : 'project-block project-block-light'}>
                <div className="project-block__poster-block">
                    <img src={poster} alt="Постер планировки" className='poster'/>
                </div>
                <div className="project-block__info">
                    <h2 className={theme === 'dark' ? "info-title light-title" : 'info-title dark-title'}>{title}</h2>
                    <p className={theme === 'dark' ? "info-text light-title" : 'info-text dark-title'}>Тип проекта: {type === 'Квартира' ? 'Квартира' : 'Частный дом'}</p>
                    <p className={theme === 'dark' ? "info-text light-title" : 'info-text dark-title'}>Описание: {description}</p>
                    <p className={theme === 'dark' ? "info-text light-title" : 'info-text dark-title'}>Рейтинг: {rating}</p>
                    <p className={theme === 'dark' ? "info-text light-title" : 'info-text dark-title'}>Цена: {cost}</p>
                </div>
            </div>
        </Link>
    );
})

export default ProjectApartmentBlock;
