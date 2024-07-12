import React from 'react';
import './ProjectInfoStyle.css'

interface ProjectInfoProps {
    type: string,
    description: string,
    theme: string
}

const ProjectInfo: React.FC<ProjectInfoProps> = React.memo(({
    type,
    description,
    theme
}: ProjectInfoProps) => {
    return (
        <div className={theme === 'dark' ? "project-content__info info-dark" : 'project-content__info info-light'}>
            <p className="project-content__text">Тип проекта: {type === "apartment" ? "Жилой комплекс" : "Частные дома"}</p>
            <p className="project-content__text text-description">Описание: {description}</p>
        </div>
    );
})

export default ProjectInfo;
