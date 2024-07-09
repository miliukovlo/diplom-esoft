import React from 'react';
import './ProjectImageStyle.css'

interface ProjectImageProps {
    posterUrl: string | undefined
}

const ProjectImage: React.FC<ProjectImageProps> = React.memo(({
    posterUrl
}: ProjectImageProps) => {
    return (
        <div className="project-content__image-block">
            <img src={posterUrl} alt="Постер проекта" className='project-content__image' />
        </div>
    );
})

export default ProjectImage;
