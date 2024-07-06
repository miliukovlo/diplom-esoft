import React from 'react';
import './ProjectInfoStyle.css'

interface ProjectInfoProps {
    type: string,
    description: string,
    rating: number,
    theme: string
}

const ProjectInfo: React.FC<ProjectInfoProps> = React.memo(({
    type,
    description,
    rating,
    theme
}: ProjectInfoProps) => {
    return (
        <div className={theme === 'dark' ? "project-content__info info-dark" : 'project-content__info info-light'}>
            <p className="project-content__text">Тип проекта: {type}</p>
            <p className="project-content__text text-description">Описание: {description}</p>
            <p className="project-content__text">Рейтинг: {rating}</p>
        </div>
    );
})

export default ProjectInfo;
