import React from 'react';
import './ProjectInfoStyle.css'

interface ProjectInfoProps {
    type: string,
    description: string,
    rating: number
}

const ProjectInfo: React.FC<ProjectInfoProps> = React.memo(({
    type,
    description,
    rating
}: ProjectInfoProps) => {
    return (
        <div className="project-content__info">
            <p className="project-content__text">Тип проекта: {type}</p>
            <p className="project-content__text text-description">Описание: {description}</p>
            <p className="project-content__text">Рейтинг: {rating}</p>
        </div>
    );
})

export default ProjectInfo;
