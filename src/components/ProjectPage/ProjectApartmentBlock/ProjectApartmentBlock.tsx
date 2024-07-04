import React from 'react';
import { Link } from 'react-router-dom';

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
}: ProjectApartmentBlockProps) => {
    return (
        <Link to={`/company/${companyId}/project/${projectId}/apartment/${id}`} className='project-block__link'>
            <div className='project-block'>
                <div className="project-block__poster-block">
                    <img src={poster} alt="Постер планировки" className='poster'/>
                </div>
                <div className="project-block__info">
                    <h2 className="info-title">{title}</h2>
                    <p className="info-text">Тип проекта: {type === 'Квартира' ? 'Квартира' : 'Частный дом'}</p>
                    <p className="info-text">Описание: {description}</p>
                    <p className="info-text">Рейтинг: {rating}</p>
                    <p className="info-text">Цена: {cost}</p>
                </div>
            </div>
        </Link>
    );
})

export default ProjectApartmentBlock;
